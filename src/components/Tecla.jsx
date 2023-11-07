export const Tecla = ({
	nota,
	setNotaTeclado,
	selected,
	setSelected,
	teclado,
	numero,
}) => {
	function handleClick() {
		if (setNotaTeclado) {
			setNotaTeclado(nota)
		}
		if (teclado) {
			let index = teclado.findIndex((tecla) => tecla.numero === numero)
			teclado[index].selected = !teclado[index].selected
			setSelected([...teclado])
		}
	}
	return (
		<li
			onClick={handleClick}
			className={`cursor-pointer list-none text-2xl flex items-end justify-center border-y-2 border-x-2 border-black w-[60px] h-[200px] lg:w-[100px] ${
				selected && "bg-green-600"
			}  transition-colors`}
		>
			{nota}
		</li>
	)
}
