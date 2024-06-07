import Image from "next/image"
import type { SimplePokemon } from "../interfaces/simple-pokemon"
import PokemonCard from "./PokemonCard"

export default function PokemonGrid({ pokemons }: PokemonGridProps): React.ReactElement {
	return (
		<div className="flex flex-wrap items-center justify-center gap-10">
			{pokemons.map((pokemon) => (
				<PokemonCard key={pokemon.id} pokemon={pokemon} />
			))}
		</div>
	)
}

interface PokemonGridProps {
	pokemons: SimplePokemon[]
}
