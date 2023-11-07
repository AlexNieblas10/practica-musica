import { Piano } from "../components/Piano"
import { Partitura } from "../components/Partitura"
import { getNota } from "../../utils/getNota.js"
import { useEffect, useState } from "react"
import { Button } from "../components/Button"
import { Modal } from "../components/Modal"

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

	function cambiarClave() {
		window.localStorage.removeItem("partitura")
		setPartitura(false)
		setAciertos(0)
		setErrores(0)
		setNotaPulsadaTeclado(false)
	}

	return (
		<main className="bg-[#fffffe]">
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
			{!partitura && (
				<section className="w-full h-screen flex flex-col justify-around items-center">
					<h1 className="text-5xl font-bold text-center text-[#2b2c34]">
						¿Que clave quieres practicar?
					</h1>
					<aside className="w-full flex justify-around">
						<div onClick={() => selectPartitura("sol")} className="w-1/3">
							<Button>Clave de sol</Button>
						</div>
						<div onClick={() => selectPartitura("fa")} className="w-1/3">
							<Button>Clave de fa</Button>
						</div>
					</aside>
				</section>
			)}
			{partitura && (
				<div className="w-full h-screen flex flex-col place-items-center">
					<ul className="w-full justify-center flex items-center">
						<li className="w-1/3 p-5" onClick={cambiarClave}>
							<Button>Cambiar de clave</Button>
						</li>
						<li className="text-green-400 text-2xl font-bold w-1/3 text-center">
							{aciertos}/20
						</li>
						<li className="text-red-400 text-2xl font-bold w-1/3 text-center">
							{errores}/3
						</li>
					</ul>
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
					<Piano setNotaTeclado={setNotaPulsadaTeclado} />
				</div>
			)}
		</main>
	)
}
