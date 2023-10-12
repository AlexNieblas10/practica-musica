export const Nota = ({ absolute, visible, nota, numero }) => {
	return (
		<div
			className={`w-6 h-6 rounded-full ${absolute ? "absolute" : ""}
			${visible ? "" : "opacity-0"} bg-black text-white`}
		>
			{nota}
			{numero}
		</div>
	)
}
