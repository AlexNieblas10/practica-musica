import { Button } from "./Button"

export const SelectClave = ({setPartituraUsada}) => {
	
	return (
		<section className="w-full h-screen flex flex-col justify-around items-center">
			<h1 className="text-5xl font-bold text-center text-[#2b2c34]">
				¿Que clave quieres practicar?
			</h1>
			<aside className="w-full flex justify-around">
				<div onClick={() => setPartituraUsada("SOL")} className="w-1/3">
					<Button>Clave de sol</Button>
				</div>
				<div onClick={() => setPartituraUsada("FA")} className="w-1/3">
					<Button>Clave de fa</Button>
				</div>
			</aside>
		</section>
	)
}
