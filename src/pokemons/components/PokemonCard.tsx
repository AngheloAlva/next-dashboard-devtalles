"use client"

import { IoHeart, IoHeartOutline } from "react-icons/io5"
import { useAppDispatch, useAppSelector } from "@/store"
import Image from "next/image"
import Link from "next/link"

import type { SimplePokemon } from "../interfaces/simple-pokemon"
import { toggleFavorite } from "@/store/pokemons/pokemons"

export default function PokemonCard({ pokemon }: PokemonCardProps): React.ReactElement {
	const { id, name } = pokemon

	const isFavorite = useAppSelector((state) => !!state.pokemons.favorites[id])
	const dispatch = useAppDispatch()

	const onToggle = () => {
		dispatch(toggleFavorite(pokemon))
	}

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
					<button
						onClick={onToggle}
						className="flex w-full items-center px-4 py-2 hover:bg-gray-100"
					>
						<div className="text-red-600">{isFavorite ? <IoHeart /> : <IoHeartOutline />}</div>
						<div className="pl-3">
							<p className="text-sm font-medium leading-none text-gray-800">
								{isFavorite ? "Is favorite" : "Not favorite"}
							</p>
							<p className="text-xs text-gray-500">View your campaigns</p>
						</div>
					</button>
				</div>
			</div>
		</div>
	)
}

interface PokemonCardProps {
	pokemon: SimplePokemon
}
