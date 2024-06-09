import Link from "next/link"
import Image from "next/image"
import { IoHeartOutline } from "react-icons/io5"

import type { SimplePokemon } from "../interfaces/simple-pokemon"

export default function PokemonCard({ pokemon }: PokemonCardProps): React.ReactElement {
	const { id, name } = pokemon

	return (
		<div className="right-0 mx-auto mt-2 w-60">
			<div className="overflow-hidden rounded bg-white shadow-lg">
				<div className="border-b bg-gray-800 p-6 text-center">
					<Image
						key={pokemon.id}
						src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
						alt={pokemon.name}
						width={96}
						className="mx-auto"
						height={96}
						priority={false}
					/>
					<p className="pt-2 text-lg font-semibold capitalize text-gray-50">{name}</p>
					<div className="mt-5">
						<Link
							href={`/dashboard/pokemons/${name}`}
							className="rounded-full border px-4 py-2 text-xs font-semibold text-gray-100"
						>
							More info
						</Link>
					</div>
				</div>
				<div className="border-b">
					<div className="flex items-center px-4 py-2 hover:bg-gray-100">
						<div className="text-red-600">
							<IoHeartOutline />
						</div>
						<div className="pl-3">
							<p className="text-sm font-medium leading-none text-gray-800">Not favorited</p>
							<p className="text-xs text-gray-500">View your campaigns</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

interface PokemonCardProps {
	pokemon: SimplePokemon
}
