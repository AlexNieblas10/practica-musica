import { Link } from "react-router-dom"

export const LinkTo = ({ children, destination }) => {
	return (
		<Link to={destination} className="text-xl">
			<div className="w-full h-14 text-[#fffffe] bg-[#6246ea] rounded-lg  flex justify-center items-center">
				{children}
			</div>
		</Link>
	)
}
