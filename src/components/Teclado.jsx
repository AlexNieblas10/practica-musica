import { Tecla } from "./Tecla"
import { TeclaFlat } from "./TeclaFlat"

export const Teclado = ({ teclas, setTeclas }) => {
	return (
		<div className="flex w-full justify-center">
			{teclas?.map((tecla) => {
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
	)
}
