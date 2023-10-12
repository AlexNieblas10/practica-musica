import { Piano } from "./components/Piano"
import { Partitura } from "./components/Partitura"

export function App() {
	return (
		<div className="w-full h-screen grid place-items-center">
			<Partitura />
			<Piano />
		</div>
	)
}
