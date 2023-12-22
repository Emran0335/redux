import io from "socket.io-client";
import { apiSlice } from "../api/apiSlice";
import { messagesApi } from "../messages/messagesApi";

export const conversationsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // endpoints here
    getConversations: builder.query({
      query: (email) =>
        `/conversations?participants_like=${email}&_sort=timestamp&_order=des&_page=1&_limit=${
          import.meta.env.VITE_APP_CONVERSATIONS_PER_PAGE
        }`,
      async onCacheEntryAdded(
        arg,
        { updateCachedData, cacheDataLoaded, cacheEntryRemoved }
      ) {
        // create socket
        const socket = io("http://localhost:9000", {
          reconnectionDelay: 1000,
          reconnection: true,
          reconnectionAttempts: 10,
          transports: ["websocket"],
          agent: false,
          upgrade: false,
          rejectUnauthorized: false,
        });
        try {
          await cacheDataLoaded;
          socket.on("conversation", (data) => {
            // console.log(data);
            updateCachedData((draftState) => {
              const conversation = draftState.find(
                (c) => c.id == data?.data?.id
              );
              if (conversation) {
                conversation.message = data?.data?.message;
                conversation.timestamp = data?.data?.timestamp;
              } else {
                // do nothing
              }
            });
          });
        } catch (error) {}
        // to remove the cache entry, when the client is not in the conversation mode
        await cacheEntryRemoved;
        socket.close();
      },
    }),
    // for getting more data for the new pages
    getMoreConversations: builder.query({
      query: ({email, page}) =>
        `/conversations?participants_like=${email}&_sort=timestamp&_order=des&_page=${page}&_limit=${
          import.meta.env.VITE_APP_CONVERSATIONS_PER_PAGE
        }`,
      async onCacheEntryAdded(
        arg,
        { updateCachedData, cacheDataLoaded, cacheEntryRemoved }
      ) {
        // create socket
        const socket = io("http://localhost:9000", {
          reconnectionDelay: 1000,
          reconnection: true,
          reconnectionAttempts: 10,
          transports: ["websocket"],
          agent: false,
          upgrade: false,
          rejectUnauthorized: false,
        });
        try {
          await cacheDataLoaded;
          socket.on("conversation", (data) => {
            // console.log(data);
            updateCachedData((draftState) => {
              const conversation = draftState.find(
                (c) => c.id == data?.data?.id
              );
              if (conversation) {
                conversation.message = data?.data?.message;
                conversation.timestamp = data?.data?.timestamp;
              } else {
                // do nothing
              }
            });
          });
        } catch (error) {}
        // to remove the cache entry, when the client is not in the conversation mode
        await cacheEntryRemoved;
        socket.close();
      },
    }),
    getConversation: builder.query({
      query: ({ userEmail, participantEmail }) =>
        `/conversations?participants_like=${userEmail}-${participantEmail}&&participants_like=${participantEmail}-${userEmail}`,
    }),
    addConversation: builder.mutation({
      // eslint-disable-next-line no-unused-vars
      query: ({ sender, data }) => ({
        url: "/conversations",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        const conversation = await queryFulfilled;
        if (conversation?.data?.id) {
          // arg means {sender, data}
          const users = arg.data.users;
          console.log(users);
          // users is an array sent from Modal UI
          const senderUser = users.find((user) => user.email === arg.sender);
          const receiverUser = users.find((user) => user.email !== arg.sender);
          // silent entry to message table
          dispatch(
            messagesApi.endpoints.addMessage.initiate({
              conversationId: conversation?.data?.id,
              sender: senderUser,
              receiver: receiverUser,
              message: arg.data.message,
              timestamp: arg.data.timestamp,
            })
          );
        }
      },
    }),
    editConversation: builder.mutation({
      query: ({ id, data, sender }) => ({
        url: `/conversations/${id}`,
        method: "PATCH",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        // client site optimistic cache update starts(with utility function)
        // as we need to update getConversations slice which on the left side of UI
        // we also provide arguments(arg) to invalidate leftside UI to update, here it is email. It will be from arg.sendder as we know arg means query object parameter.
        // it also know as client side update
        const pathResult = dispatch(
          apiSlice.util.updateQueryData(
            "getConversations",
            arg.sender,
            (draftState) => {
              // draftState is wrapped by immer. So, it can be mutated
              // draftState is loggedInUser's array of conversations
              // draftState is located in browser localStorage(they remain as string). That's why == is used, (e.g. string == number)
              const draftConversation = draftState.find((c) => c.id == arg.id);
              draftConversation.message = arg.data.message;
              draftConversation.timestamp = arg.data.timestamp;
            }
          )
        );
        // client site optimistic cache update ends
        try {
          // asyncronus can be wrapped in try catch block
          const conversation = await queryFulfilled;
          // console.log(conversation);
          if (conversation?.data?.id) {
            // silent entry to message table
            const users = arg.data.users;
            // users is an array sent from Modal UI
            const senderUser = users.find((user) => user.email === arg.sender);
            const receiverUser = users.find(
              (user) => user.email !== arg.sender
            );
            const res = await dispatch(
              messagesApi.endpoints.addMessage.initiate({
                conversationId: conversation?.data?.id,
                sender: senderUser,
                receiver: receiverUser,
                message: arg.data.message,
                timestamp: arg.data.timestamp,
              })
            ).unwrap();
            // console.log(res)
            // update messages cache pessimistically starts
            dispatch(
              apiSlice.util.updateQueryData(
                "getMessages",
                res.conversationId.toString(),
                // in cache everything is in string, even number must be string
                (draftState) => {
                  draftState.push(res);
                }
              )
            );
            // update messages cache pessimistically ends
          }
        } catch (err) {
          pathResult.undo();
        }
      },
    }),
  }),
});

export const {
  useGetConversationsQuery,
  useGetConversationQuery,
  useAddConversationMutation,
  useEditConversationMutation,
} = conversationsApi;
