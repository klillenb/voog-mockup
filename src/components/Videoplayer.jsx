import { Box } from "@mui/material";
import "./styles/Videoplayer.css";
import backgroundVideo from "../assets/voog-video.mp4";

export default function Videoplayer() {
	return (
		<Box className="video-wrapper">
			<Box className="video-header">
				<img src="src/assets/header-front_large.png" />
				<Box className="video-header-text">
					<h1>Tee ise koduleht!</h1>
					<button
						type="button"
						className="btn btn-dark btn-sm"
						onClick={() => (location.href = "https://www.voog.com/signup?language_code=et")}
					>
						Alusta tasuta!
					</button>
				</Box>
			</Box>
			<Box className="video-wrapper">
				<video autoPlay loop muted id="video">
					<source src={backgroundVideo} type="video/mp4" />
				</video>
			</Box>
			<Box className="video-description-wrapper">
				<Box className="video-undertext-tagline">
					<h3>Lihtne kasutada.</h3>
					<h3>Rohkete võimalustega.</h3>
				</Box>
				<Box className="video-undertext-description">
					Vooga saab igaüks endale nullist ilusa kodulehe ja veebipoe luua. Ent lihtsus on kõigest asja üks
					külg. Voog on nii võimas, et disainiagentuurid haldavad sellel suuri, ainukordseid ja keerukaid
					kliendisaite.
				</Box>
			</Box>
		</Box>
	);
}
