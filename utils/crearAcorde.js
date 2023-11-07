import { tiposDeAcordes } from "./tiposAcordes"

export function crearAcorde(){
  let mayorOMenor = tiposDeAcordes[Math.round(Math.random() * 1)]

		let base = Math.ceil(Math.random() * 16)
		let tercera = base + mayorOMenor.tercera
		let quinta = tercera + mayorOMenor.quinta

		let acorde = { base, tercera, quinta }
		return acorde
}