import { Button } from "./Button"

export const HedearGames = ({
	aciertos,
	errores,
	setPartitura,
	setAciertos,
	setErrores,
}) => {
	function cambiarClave() {
		window.localStorage.removeItem("partitura")

		setPartitura(false)

		setAciertos(0)
		setErrores(0)
	}
	return (
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
	)
}

export default HedearGames
