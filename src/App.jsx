import { Piano } from "./components/Piano"
import { Partitura } from "./components/Partitura"
import { getNota } from "../utils/getNota.js"
import { useEffect, useState } from "react"

export function App() {
	const [notaPartitura, setNotaPartitura] = useState(false)
	const [notaPulsadaTeclado, setNotaPulsadaTeclado] = useState(false)
	const [aciertos, setAciertos] = useState(0)
	const [errores, setErrores] = useState(0)

	useEffect(() => {
		setNotaPartitura(getNota())
	}, [])

	return (
		<div className="w-full h-screen grid place-items-center">
			<ul className="w-1/2 justify-between flex">
				<li className="text-red-400 text-2xl font-bold">{errores}/3</li>
				<li className="text-green-400 text-2xl font-bold">{aciertos}/20</li>
			</ul>
			<Partitura
				notaPartitura={notaPartitura}
				notaTeclado={notaPulsadaTeclado}
				setNotaPartitura={setNotaPartitura}
				setAciertos={setAciertos}
				setErrores={setErrores}
				aciertos={aciertos}
				errores={errores}
				setNotaTeclado={setNotaPulsadaTeclado}
			/>
			<Piano setNotaTeclado={setNotaPulsadaTeclado} />
		</div>
	)
}
