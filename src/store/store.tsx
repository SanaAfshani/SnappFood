import { configureStore } from '@reduxjs/toolkit'
import {vendorReducer} from "@/store/reducers";
import { createWrapper } from 'next-redux-wrapper';

export const store = configureStore({
    reducer: {
        vendors :vendorReducer
    },
    devTools: process.env.NODE_ENV !== "production",
})

const makeStore = () => {
    return configureStore({
        reducer: {
            vendors :vendorReducer
        },
        devTools: process.env.NODE_ENV !== "production",
    })
}

export const wrapper = createWrapper(makeStore);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch