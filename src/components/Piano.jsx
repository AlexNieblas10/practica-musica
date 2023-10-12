import { teclas } from "../../utils/teclas.js"
import { Tecla } from "./Tecla.jsx"
import { TeclaFlat } from "./TeclaFlat.jsx"

export const Piano = () => {
	return (
		<section className="flex justify-center relative">
			{teclas.map((tecla) => {
				if (tecla.color === "blanca") {
					return <Tecla key={tecla.nota} nota={tecla.nota} />
				}
				if (tecla.color === "negra") {
					return <TeclaFlat key={tecla.nota} />
				}
			})}
		</section>
	)
}
