import "./style/App.css";
import { Box } from "@mui/material";
import Partners from "./components/Partners";
import Navbar from "./Components/Navbar.jsx";
import Videoplayer from "./components/Videoplayer";
import EasyEdit from "./components/EasyEdit";
import Testimonial from "./components/Testimonial";
import DesignWebsite from "./components/DesignWebsite";
import Card from "./components/Card";
import Footer from "./components/Footer";

export default function App() {
	return (
		<Box>
			<Navbar />
			<Box className="main-body">
				<Videoplayer />
				<Partners />
				<EasyEdit />
				<Testimonial />
				<DesignWebsite />
				<Card />
			</Box>
			<Footer />
		</Box>
	);
}
