"use client"

import { useAppSelector } from "@/store"
import PokemonGrid from "./PokemonGrid"
import { useEffect, useState } from "react"

export default function FavoritePokemons(): React.ReactElement {
	const favoritePokemons = useAppSelector((state) => Object.values(state.pokemons.favorites))
	// const [pokemons, setPokemons] = useState(favoritePokemons)

	// useEffect(() => {
	// 	setPokemons(favoritePokemons)
	// }, [favoritePokemons])

	return (
		// <>{favoritePokemons.length === 0 ? <NoFavorites /> : <PokemonGrid pokemons={pokemons} />}</>
		<PokemonGrid pokemons={favoritePokemons} />
	)
}

export function NoFavorites(): React.ReactElement {
	return (
		<div className="flex h-96 flex-col items-center justify-center">
			<span className="text-3xl">No favorite pokemons</span>
			<span className="text-lg text-gray-500">Add some pokemons to your favorite list</span>
		</div>
	)
}
