import { teclas } from "../../utils/teclas.js"
import { Tecla } from "./Tecla.jsx"
import { TeclaFlat } from "./TeclaFlat.jsx"

export const Piano = ({ setNotaTeclado }) => {
	return (
		<section className="flex justify-center relative p-5">
			{teclas.map((tecla) => {
				if (tecla.color === "blanca") {
					return (
						<Tecla
							key={tecla.nota}
							nota={tecla.nota}
							setNotaTeclado={setNotaTeclado}
						/>
					)
				}
				if (tecla.color === "negra") {
					return <TeclaFlat key={tecla.nota} />
				}
			})}
		</section>
	)
}
