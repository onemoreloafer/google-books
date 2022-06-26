import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Root } from './volume.types'

const apiKey = process.env.API_KEY

export const volumeApi = createApi({
  reducerPath: 'api/volumes',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.googleapis.com/books/v1/volumes?q=' }),
  endpoints: (build) => ({
    getVolumes: build.query<Root, string>({ query: (search) => `${search}&key=${apiKey}` }),
  }),
})

export const { useGetVolumesQuery } = volumeApi

/*
    getVolumes: build.query<Root, string>({ query: (search) => `${search}&key=${apiKey}`})
*/

/*
`${apiURL}?key=${apiKey}&langRestrict=en&maxResults=40&orderBy=relevance&q=${this.state.searchTerm}&filter=${this.state.bookType}&printType=${this.state.printType}`;
*/
