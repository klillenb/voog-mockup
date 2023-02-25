import "./style/App.css";
import { Box } from "@mui/material";
import Partners from "./components/Partners";
import Navbar from "./Components/Navbar.jsx";
import Videoplayer from "./components/Videoplayer";
import EasyEdit from "./components/EasyEdit";
import Testimonial from "./components/Testimonial";

export default function App() {
	return (
		<Box>
			<Navbar />
			<Box className="main-body">
				<Videoplayer />
				<Partners />
				<EasyEdit />
				<Testimonial />
			</Box>
		</Box>
	);
}
