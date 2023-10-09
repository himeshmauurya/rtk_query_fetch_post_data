import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: () => `https://fakestoreapi.com/products?limit=3`,
    }),
    getProductByName: builder.query({
        query: () => `https://dummyjson.com/products?limit=3`,
      }),
    createUser: builder.mutation({
      query: (body) => ({
        url: '/products',
        method: 'POST',
        body,
      }),
    }),
  })
})


export const { useLazyGetProductByNameQuery,useLazyGetPokemonByNameQuery,useCreateUserMutation } = pokemonApi