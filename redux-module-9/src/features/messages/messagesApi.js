import { apiSlice } from "../api/apiSlice";

export const messagesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // endpoints here
    getMessages: builder.query({
      query: (id) =>
        `/messages?conversationId=${id}&_sort=timestamp&_order=des&_page=1&_limit=${
          import.meta.env.VITE_APP_MESSAGES_PER_PAGE
        }`,
    }),
  }),
});


export const {useGetMessagesQuery} = messagesApi