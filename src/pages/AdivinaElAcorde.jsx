import { useEffect, useState } from "react"
import { notas } from "../../utils/NotasSol.js"
import { Nota } from "../components/Nota.jsx"
import { Tecla } from "../components/Tecla.jsx"
import { TeclaFlat } from "../components/TeclaFlat.jsx"
import { crearAcorde } from "../../utils/crearAcorde.js"
import { teclas as teclado } from "../../utils/teclas.js"
import { Modal } from "../components/Modal.jsx"

export const AdivinaElAcorde = () => {
	const [miAcorde, setMiAcorde] = useState(false)
	const [teclas, setTeclas] = useState(false)
	const [aviso, setAviso] = useState(false)
	let [aciertos, setAciertos] = useState(0)
	let [errores, setErrores] = useState(0)

	useEffect(() => {
		setMiAcorde(crearAcorde())
		setTeclas(teclado)
	}, [])

	function verificarAcorde() {
		let teclasPulsadas = teclas.filter((tecla) => tecla.selected === true)
		let correct = []

		if (teclasPulsadas.length === 3) {
			let notasAcorde = notas.filter(
				(nota) =>
					nota.numero === miAcorde.base ||
					nota.numero === miAcorde.tercera ||
					nota.numero === miAcorde.quinta
			)

			let teclasPulsadas = teclas.filter((tecla) => tecla.selected === true)

			teclasPulsadas.map((teclaPulsada) => {
				notasAcorde.map((notaAcorde) => {
					if (teclaPulsada.nota === notaAcorde.nota) {
						correct.push(teclaPulsada)
					}
				})
			})

			if (correct.length < 3) {
				setAviso("Corrige el error")
				setErrores((errores += 1))
				let tecladoPulsado = [
					{ nota: "C", color: "blanca", numero: 1, selected: false },
					{ nota: "C#", color: "negra", numero: 2, selected: false },
					{ nota: "D", color: "blanca", numero: 3, selected: false },
					{ nota: "D#", color: "negra", numero: 4, selected: false },
					{ nota: "E", color: "blanca", numero: 5, selected: false },
					{ nota: "F", color: "blanca", numero: 6, selected: false },
					{ nota: "F#", color: "negra", numero: 7, selected: false },
					{ nota: "G", color: "blanca", numero: 8, selected: false },
					{ nota: "G#", color: "negra", numero: 9, selected: false },
					{ nota: "A", color: "blanca", numero: 10, selected: false },
					{ nota: "A#", color: "negra", numero: 11, selected: false },
					{ nota: "B", color: "blanca", numero: 12, selected: false },
				]

				let nuevoTecladoPulsado = []

				tecladoPulsado.map((tecla) => {
					correct.map((teclaCorrecta) => {
						if (tecla.nota === teclaCorrecta.nota) {
							tecla.selected = true
						}
					})
					nuevoTecladoPulsado.push(tecla)
				})

				setTeclas(nuevoTecladoPulsado)
			}
		} else {
			setAviso("El acorde debe tener 3 teclas seleccionadas")
		}

		if (correct.length === 3) {
			setMiAcorde(crearAcorde())
			let nuevasTeclas = teclas.map((tecla) => ({ ...tecla, selected: false }))
			setTeclas(nuevasTeclas)
			setAviso(false)
			setAciertos((aciertos += 1))
		}
	}

	return (
		<section className="flex flex-col items-center justify-around h-screen">
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
			<div className="w-full">
				<ul className="w-full justify-center flex items-center">
					<li className="text-green-400 text-2xl font-bold w-1/3 text-center">
						{aciertos}/20
					</li>
					<li className="text-red-400 text-2xl font-bold w-1/3 text-center">
						{errores}/3
					</li>
				</ul>
				{miAcorde &&
					notas.map((nota) => {
						let visible = false
						if (
							nota.numero === miAcorde.base ||
							nota.numero === miAcorde.tercera ||
							nota.numero === miAcorde.quinta
						) {
							visible = true
						}
						if (nota.espacio === false) {
							if (nota.numero < 10 || nota.numero > 23) {
								return (
									<li
										className="list-none h-6  grid place-items-center"
										key={nota.numero}
										id={nota.numero}
									>
										<div className="border-4 h-2 w-10 border-black"></div>

										{
											<Nota
												absolute={true}
												visible={visible}
												nota={nota.nota}
												numero={nota.numero}
											/>
										}
									</li>
								)
							}
							return (
								<li
									className="list-none h-6  grid place-items-center"
									key={nota.numero}
									id={nota.numero}
								>
									<div className="border-4 h-2 w-full border-black"></div>
									<Nota
										visible={visible}
										nota={nota.nota}
										numero={nota.numero}
										absolute={true}
									/>
								</li>
							)
						}
						if (nota.espacio === true) {
							return (
								<li
									className="list-none h-6 grid place-items-center"
									key={nota.numero}
									id={nota.numero}
								>
									<Nota
										visible={visible}
										nota={nota.nota}
										numero={nota.numero}
									/>
								</li>
							)
						}

						if (nota.espacio === undefined) {
							return (
								<div key={nota.numero} className="flex justify-center gap-7">
									<Nota
										visible={visible}
										nota={nota.nota}
										numero={nota.numero}
										absolute={true}
										sustain={true}
									/>
								</div>
							)
						}
					})}
			</div>

			<div className="flex w-full justify-center">
				{teclas &&
					teclas?.map((tecla) => {
						if (tecla.color === "blanca") {
							return (
								<Tecla
									key={tecla.nota}
									numero={tecla.numero}
									setSelected={setTeclas}
									teclado={teclas}
									selected={tecla.selected}
								/>
							)
						}
						if (tecla.color === "negra") {
							return (
								<TeclaFlat
									key={tecla.nota}
									numero={tecla.numero}
									setSelected={setTeclas}
									teclado={teclas}
									selected={tecla.selected}
								/>
							)
						}
					})}
			</div>
			<div className="w-full h-5 flex flex-col items-center">
				{aviso && <p>{aviso}</p>}
				<button
					className="bg-green-500 w-52 rounded-lg"
					onClick={verificarAcorde}
				>
					Enviar
				</button>
			</div>
		</section>
	)
}
