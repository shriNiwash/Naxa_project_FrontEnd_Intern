import { createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postApi = createApi({
    reducerPath:'postApi',
    baseQuery: fetchBaseQuery({
        baseUrl:'https://admin.naxa.com.np/api/',
    }),
    endpoints:(builder)=>({
        getAllPost:builder.query({
            query:()=>({
                url:'services',
                method:'GET'
            })
        })
    })
})

export const { useGetAllPostQuery } = postApi