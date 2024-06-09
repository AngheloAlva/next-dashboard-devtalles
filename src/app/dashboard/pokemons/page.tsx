import PokemonGrid from "@/pokemons/components/PokemonGrid"

import type { PokemonsResponse, SimplePokemon } from "@/pokemons"
import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "Pokemon List",
	description: "List of all pokemons",
}

const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
	const data: PokemonsResponse = await fetch(
		`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
	).then((res) => res.json())
	const pokemons = data.results.map((pokemon) => ({
		id: pokemon.url.split("/").at(-2)!,
		name: pokemon.name,
	}))

	// throw new Error("This is an error")

	return pokemons
}

export default async function PokemonPage(): Promise<React.ReactElement> {
	const pokemons = await getPokemons(151)

	return (
		<div className="flex flex-col">
			<span className="my-2 text-center text-5xl">
				Pokemon List <small>statict</small>
			</span>

			<PokemonGrid pokemons={pokemons} />
		</div>
	)
}
