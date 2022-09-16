import { configureStore } from '@reduxjs/toolkit'
import authenticationSlice from './features/authentication/authenticationSlice'
import classSlice from './features/class/classSlice'

export const store = configureStore({
    reducer: {
        classR: classSlice,
        authentication: authenticationSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch