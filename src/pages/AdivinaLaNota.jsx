import { Piano } from "../components/Piano"
import { Partitura } from "../components/Partitura"
import { getNota } from "../../utils/getNota.js"
import { useEffect, useState } from "react"
import { Modal } from "../components/Modal"
import { SelectClave } from "../components/SelectClave.jsx"
import HedearGames from "../components/HedearGames.jsx"

export function AdivinaLaNota() {
	const [notaPartitura, setNotaPartitura] = useState(false)
	const [notaPulsadaTeclado, setNotaPulsadaTeclado] = useState(false)
	const [aciertos, setAciertos] = useState(0)
	const [errores, setErrores] = useState(0)
	const [partitura, setPartitura] = useState(
		window.localStorage.getItem("partitura")
	)

	useEffect(() => {
		setNotaPartitura(getNota())
	}, [])

	function selectPartitura(partitura) {
		window.localStorage.setItem("partitura", partitura)
		setPartitura(partitura)
	}

	return (
		<main className="flex flex-col items-center justify-around h-screen">
			{aciertos >= 20 && (
				<Modal setAciertos={setAciertos} setErrores={setErrores}>
					Felicidades ganaste
				</Modal>
			)}
			{errores >= 3 && (
				<Modal setAciertos={setAciertos} setErrores={setErrores}>
					Lo siento intentalo de nuevo
				</Modal>
			)}
			{!partitura && <SelectClave setPartituraUsada={selectPartitura} />}
			{partitura && (
				<HedearGames
					aciertos={aciertos}
					errores={errores}
					setAciertos={setAciertos}
					setErrores={setErrores}
					setPartitura={setPartitura}
				/>
			)}

			{partitura && (
				<>
					<div className="w-full h-screen flex flex-col place-items-center">
						<Partitura
							partitura={partitura}
							notaPartitura={notaPartitura}
							notaTeclado={notaPulsadaTeclado}
							setNotaPartitura={setNotaPartitura}
							setAciertos={setAciertos}
							setErrores={setErrores}
							aciertos={aciertos}
							errores={errores}
							setNotaTeclado={setNotaPulsadaTeclado}
						/>
					</div>
					<div>
						<Piano setNotaTeclado={setNotaPulsadaTeclado} />
					</div>
				</>
			)}
		</main>
	)
}
