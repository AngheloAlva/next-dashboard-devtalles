import { configureStore } from "@reduxjs/toolkit"
import counter from "./counter/counterSlice"
import pokemons from "./pokemons/pokemons"
import { type TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { localStorageMiddleware } from "./middlewares/localstorage-middleware"

export const store = configureStore({
	reducer: {
		counter,
		pokemons,
	},
	// middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
