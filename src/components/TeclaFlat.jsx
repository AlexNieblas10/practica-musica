export const TeclaFlat = ({ selected, setSelected, teclado, numero }) => {
	function handleClick() {
		if (teclado) {
			let index = teclado.findIndex((tecla) => tecla.numero === numero)
			teclado[index].selected = !teclado[index].selected
			setSelected([...teclado])
		}
	}
	return (
		<li
			onClick={handleClick}
			className={`bg-black w-[30px] z-20 h-[120px] list-none mr-[-15px] ml-[-15px] ${
				selected && "bg-green-500"
			} lg:w-[60px] lg:mr-[-30px] lg:ml-[-30px] transition-colors`}
		></li>
	)
}
