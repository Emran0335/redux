import { apiSlice } from "../api/apiSlice";

export const conversationsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // endpoints here
    getConversations: builder.query({
        query: (email)=> `/conversations?participants_like=${email}&_sort=timestamp&_order=des&_page=1&_limit=${import.meta.env.VITE_APP_CONVERSATIONS_PER_PAGE}` 
    })
  }),
});


export const {useGetConversationsQuery} = conversationsApi;