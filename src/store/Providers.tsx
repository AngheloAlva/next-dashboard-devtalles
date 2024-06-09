"use client"

import { Provider } from "react-redux"
import { store } from "."

export default function Providers({ children }: ProvidersProps): React.ReactElement {
	return <Provider store={store}>{children}</Provider>
}

interface ProvidersProps {
	children: React.ReactElement
}
