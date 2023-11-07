import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { AdivinaLaNota } from "./pages/AdivinaLaNota"
import { Principal } from "./pages/Principal"
import { AdivinaElAcorde } from "./pages/AdivinaElAcorde"

const router = createBrowserRouter([
	{ path: "/", element: <Principal /> },
	{ path: "/adivina-nota", element: <AdivinaLaNota /> },
	{ path: "/adivina-acorde", element: <AdivinaElAcorde /> },
])

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
