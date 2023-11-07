import { useEffect } from "react"
import { partituraSol } from "../../utils/partituraSol.js"
import { partituraFa } from "../../utils/partituraFa.js"
import { Nota } from "./Nota"
import { getNota } from "../../utils/getNota.js"

export const Partitura = ({
	notaPartitura,
	notaTeclado,
	setNotaPartitura,
	setNotaTeclado,
	setErrores,
	setAciertos,
	aciertos,
	errores,
	partitura,
}) => {
	let partituraUsada

	if (partitura === "fa") {
		partituraUsada = { partitura: partituraFa }
	} else {
		partituraUsada = { partitura: partituraSol }
	}

	useEffect(() => {
		if (notaTeclado !== false) {
			let indexNotaPartitura = partituraUsada.partitura.findIndex(
				(nota) => nota.numero === notaPartitura
			)

			let notaeEnLaPartitura =
				partituraUsada.partitura[indexNotaPartitura]?.nota

			if (notaTeclado !== notaeEnLaPartitura) {
				setErrores((errores += 1))
			} else {
				setAciertos((aciertos += 1))
				setNotaPartitura(getNota())
				setNotaTeclado(false)
			}
		}
	}, [notaTeclado])

	return (
		<>
			{notaPartitura && (
				<div className="w-full relative">
					<ul>
						{partitura === "sol"
							? partituraSol.map((nota) => {
									let visible = false
									if (notaPartitura === nota.numero) {
										visible = true
									}

									if (!nota.espacio) {
										if (nota.numero < 5 || nota.numero > 14) {
											return (
												<li
													className="list-none h-6  grid place-items-center"
													key={nota.numero}
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
											>
												<div className="border-4 h-2 w-full border-black"></div>
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
									if (nota.espacio) {
										return (
											<li
												className="list-none h-6 grid place-items-center"
												key={nota.numero}
											>
												{
													<Nota
														visible={visible}
														nota={nota.nota}
														numero={nota.numero}
													/>
												}
											</li>
										)
									}
								})
							: partituraFa.map((nota) => {
									let visible = false
									if (notaPartitura === nota.numero) {
										visible = true
									}

									if (!nota.espacio) {
										if (nota.numero < 5 || nota.numero > 14) {
											return (
												<li
													className="list-none h-6  grid place-items-center"
													key={nota.numero}
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
											>
												<div className="border-4 h-2 w-full border-black"></div>
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
									if (nota.espacio) {
										return (
											<li
												className="list-none h-6 grid place-items-center"
												key={nota.numero}
											>
												{
													<Nota
														visible={visible}
														nota={nota.nota}
														numero={nota.numero}
													/>
												}
											</li>
										)
									}
								})}
					</ul>
					<img
						className={` w-52 absolute ${
							partitura === "sol" ? "top-9" : "top-[120px]"
						}`}
						src={
							partitura === "sol"
								? "https://cdn.pixabay.com/photo/2016/03/26/01/17/treble-clef-1279909_960_720.png"
								: "https://cdn.pixabay.com/photo/2016/05/30/20/54/bass-clef-1425777_1280.png"
						}
					/>
				</div>
			)}
		</>
	)
}
