"use client"

import { useAppDispatch, useAppSelector } from "@/store"
import { addOne, initCounterState, subtractOne } from "@/store/counter/counterSlice"
import { useEffect } from "react"

const getApiCounter = async (): Promise<CounterResponse> => {
	const data = await fetch("/api/counter").then((res) => res.json())

	return data
}

export default function CartCounter({ value = 0 }: { value: number }): React.ReactElement {
	const count = useAppSelector((state) => state.counter.count)
	const dispatch = useAppDispatch()

	useEffect(() => {
		getApiCounter().then(({ count }) => {
			dispatch(initCounterState(count))
		})
	}, [dispatch])

	// useEffect(() => {
	// 	dispatch(initCounterState(value))
	// }, [dispatch, value])

	return (
		<>
			<span className="text-9xl">{count}</span>

			<div className="flex gap-2">
				<button
					onClick={() => dispatch(subtractOne())}
					className="flex w-24 items-center justify-center rounded-xl bg-gray-900 p-2 text-white transition-colors hover:bg-gray-600"
				>
					-1
				</button>
				<button
					onClick={() => dispatch(addOne())}
					className="flex w-24 items-center justify-center rounded-xl bg-gray-900 p-2 text-white transition-colors hover:bg-gray-600"
				>
					+1
				</button>
			</div>
		</>
	)
}

interface CounterResponse {
	method: string
	count: number
}
