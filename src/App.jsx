import "./style/App.css";
import { Box } from "@mui/material";
import Partners from "./components/Partners";
import Navbar from "./Components/Navbar.jsx";

export default function App() {
	return (
		<Box>
			<Navbar />
			<Box className="main-body">
				<Partners />
			</Box>
		</Box>
	);
}
