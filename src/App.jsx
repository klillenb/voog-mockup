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
import NavbarMobile from "./Components/NavbarMobile.jsx";

export default function App() {
	return (
		<Box>
			<Box
				sx={{
					backgroundColor: "rgb(218, 228, 230)",
					position: "absolute",
					zIndex: "2",
					top: "0",
					width: "100%",
					height: "819px",
				}}
			/>
			<Box className="navbar-class">
				<Navbar />
			</Box>
			<Box className="navbar-mobile-class">
				<NavbarMobile />
			</Box>
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
