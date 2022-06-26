import { configureStore } from '@reduxjs/toolkit'
import { volumeApi } from './volume/volume.api'

export const store = configureStore({
  reducer: { [volumeApi.reducerPath]: volumeApi.reducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(volumeApi.middleware),
})

export type TypeRootState = ReturnType<typeof store.getState>
