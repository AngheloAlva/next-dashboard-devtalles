"use client"

import { useAppSelector } from "@/store"
import { SimpleWidget } from "./SimpleWidget"
import { IoCartOutline } from "react-icons/io5"

export default function WidgetsGrid(): React.ReactElement {
	const count = useAppSelector((state) => state.counter.count)

	return (
		<div className="flex flex-wrap items-center justify-center gap-4 py-4">
			<SimpleWidget
				label="Contador"
				href="/dashboard/counter"
				title={count}
				icon={<IoCartOutline className="text-4xl text-blue-500" />}
			/>
		</div>
	)
}
