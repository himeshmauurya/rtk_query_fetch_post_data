import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: () => `/products`,
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


export const { useLazyGetPokemonByNameQuery,useCreateUserMutation } = pokemonApi