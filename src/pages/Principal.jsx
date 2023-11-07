import { LinkTo } from "../components/Link"

export const Principal = () => {
	return (
		<main className="bg-[#fffffe] grid place-items-center w-full min-h-screen">
			<div>
				<h1 className="text-5xl text-[#2b2c34] text-center">
					Bienvenido a practica musica
				</h1>
				<h2 className="text-3xl text-[#2b2c34] text-center">
					¿Que deseas practicar?
				</h2>
			</div>
			<ul className="w-1/2 flex flex-col gap-5">
				<li className="w-full">
					<LinkTo destination={"/adivina-nota"}>Adivina la nota</LinkTo>
				</li>
				<li className="w-full">
					<LinkTo destination={"/adivina-acorde"}>Adivina el acorde</LinkTo>
				</li>
			</ul>
		</main>
	)
}
