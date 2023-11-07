import { Button } from "./Button"

export const Modal = ({ children, setAciertos, setErrores }) => {
	return (
		<section className="w-screen h-screen absolute top-0 z-30 grid place-items-center bg-[#d1d1e9] bg-opacity-80 ">
			<h1 className="text-5xl">{children}</h1>
			<aside
				onClick={() => {
					setAciertos(0)
					setErrores(0)
				}}
				className="w-1/4"
			>
				<Button>Jugar de nuevo</Button>
			</aside>
		</section>
	)
}
