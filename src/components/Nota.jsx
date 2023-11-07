export const Nota = ({ absolute, visible, nota, sustain }) => {
	return (
		<>
			<div
				className={`w-7 h-7 rounded-full ${absolute ? "absolute " : ""}
			${visible ? "" : "opacity-0"} bg-black text-white`}
			>
				{nota}
				{sustain && (
					<p className="absolute text-black -top-3 -left-10 text-5xl">#</p>
				)}
			</div>
		</>
	)
}
