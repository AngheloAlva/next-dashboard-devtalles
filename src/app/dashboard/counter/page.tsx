import CartCounter from "@/shopping-cart/components/CartCounter"
import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "Counter",
	description: "Counter page",
}

export default function CounterPage(): React.ReactElement {
	return (
		<div className="flex h-full w-full flex-col items-center justify-center">
			<span>Cart products</span>
			<CartCounter value={20} />
		</div>
	)
}
