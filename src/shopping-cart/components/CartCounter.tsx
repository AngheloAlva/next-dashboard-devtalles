"use client"

import { useState } from "react"

export default function CartCounter({ value = 0 }: { value: number }): React.ReactElement {
	const [count, setCount] = useState(value)

	const increment = () => setCount((prev) => prev + 1)
	const decrement = () => setCount((prev) => prev - 1)

	return (
		<>
			<span className="text-9xl">{count}</span>

			<div className="flex gap-2">
				<button
					onClick={decrement}
					className="flex w-24 items-center justify-center rounded-xl bg-gray-900 p-2 text-white transition-colors hover:bg-gray-600"
				>
					-1
				</button>
				<button
					onClick={increment}
					className="flex w-24 items-center justify-center rounded-xl bg-gray-900 p-2 text-white transition-colors hover:bg-gray-600"
				>
					+1
				</button>
			</div>
		</>
	)
}
