import { PayloadAction, createSlice } from "@reduxjs/toolkit"

import type { SimplePokemon } from "@/pokemons"

interface InitialState {
	favorites: {
		[key: string]: SimplePokemon
	}
}

// const getInitialState = (): InitialState => {
// 	if (typeof localStorage === "undefined") return { favorites: {} }

// 	const favorites = JSON.parse(localStorage.getItem("favoritePokemons") ?? "{}")
// 	return favorites
// }

const initialState: InitialState = {
	favorites: {},
	// ...getInitialState(),
	// "1": { id: "1", name: "bulbasaur" },
	// "4": { id: "4", name: "charmander" },
	// "7": { id: "7", name: "squirtle" },
}

const pokemonsSlice = createSlice({
	name: "pokemons",
	initialState,
	reducers: {
		setFavoritePokemons(state, action: PayloadAction<{ [key: string]: SimplePokemon }>) {
			state.favorites = action.payload
		},
		toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
			const pokemon = action.payload
			const { id } = pokemon

			if (!!state.favorites[id]) {
				delete state.favorites[id]
				// return
			} else {
				state.favorites[id] = pokemon
			}

			localStorage.setItem("favoritePokemons", JSON.stringify(state.favorites))
		},
	},
})

export const { toggleFavorite, setFavoritePokemons } = pokemonsSlice.actions

export default pokemonsSlice.reducer
