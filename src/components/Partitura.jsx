import { useState } from "react"
import { getNota } from "../../utils/getNota.js"
import { partituraSol } from "../../utils/partituraSol.js"
import { Nota } from "./Nota"

export const Partitura = () => {
	const [notaActual, setNotaActual] = useState(getNota())
	return (
		<>
			{notaActual && (
				<div className="w-full">
					<ul>
						{partituraSol.map((nota) => {
							let visible = false
							if (notaActual === nota.numero) {
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
					{/* {partituraSol.reverse().map((nota) => {
						{
							console.log(nota.numero)
						}
						let visible = false
						if (!nota.espacio && nota.numero >= 5 && nota.numero <= 14) {
							return (
								<li
									className="list-none h-6  grid place-items-center"
									key={nota.numero}
								>
									<div className="border-4 h-2 w-full border-black"></div>
									{<Nota absolute={true} visible={true} nota={nota.numero} />}
								</li>
							)
						}

						if (nota.espacio && nota.numero >= 7 && nota.numero <= 14) {
							return (
								<li
									className="list-none h-6 grid place-items-center"
									key={nota.numero}
								>
									{<Nota visible={true} nota={nota.numero} />}
								</li>
							)
						}

						if (!nota.espacio && nota.numero < 5) {
							return (
								<li
									className="list-none h-6 grid place-items-center"
									key={nota.numero}
								>
									{<Nota visible={true} nota={nota.numero} />}
								</li>
							)
						}

						if (!nota.espacio && nota.numero < 5) {
							return (
								<li
									className="list-none h-6 grid place-items-center"
									key={nota.numero}
								>
									<div className="w-2 border-2 h-3 border-black"></div>
									{<Nota visible={true} nota={nota.numero} />}
								</li>
							)
						}
					})} */}
				</div>
			)}
		</>
	)
}
