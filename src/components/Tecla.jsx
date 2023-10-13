export const Tecla = ({ nota, setNotaTeclado }) => {
	return (
		<li
			onClick={() => {
				setNotaTeclado(nota)
			}}
			className="cursor-pointer list-none text-2xl flex items-end justify-center border-y-2 border-x-2 border-black w-[60px] h-[200px] lg:w-[100px] hover:bg-slate-100 transition-colors"
		>
			{nota}
		</li>
	)
}
