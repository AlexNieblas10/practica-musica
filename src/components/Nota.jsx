export const Nota = ({ absolute, visible, nota, numero }) => {
	return (
		<div
			className={`w-7 h-7 rounded-full ${absolute ? "absolute" : ""}
			${visible ? "" : "opacity-0"} bg-black text-white`}
		>
			{nota}
			{numero}
		</div>
	)
}
