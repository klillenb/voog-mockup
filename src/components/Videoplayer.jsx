import { Box } from "@mui/material";
import "./styles/Videoplayer.css";
import backgroundVideo from "../assets/voog-video.mp4";
import { useCallback, useEffect, useState, useRef } from "react";

export default function Videoplayer() {
	// https://stackoverflow.com/questions/62497110/detect-scroll-direction-in-react-js
	// https://dev.to/nadeemkhanrtm/detect-scroll-direction-reactjs-1gnp
	const [direction, setDirection] = useState("scroll-down");
	const [y, setY] = useState(document.scrollingElement.scrollHeight);

	const handleNavigation = useCallback(
		(e) => {
			if (y > window.scrollY) {
				setDirection("scroll-up");
			} else if (y < window.scrollY) {
				setDirection("scroll-down");
			}
			setY(window.scrollY);
		},
		[y]
	);

	useEffect(() => {
		window.addEventListener("scroll", handleNavigation);
		animateHeader(y, headerSize.height, videoRef.current.offsetWidth);
		return () => {
			window.removeEventListener("scroll", handleNavigation);
		};
	}, [handleNavigation]);

	const [wrapTopPos, setWrapTopPos] = useState(0);
	const [headerSize, setHeaderSize] = useState({
		height: "",
		width: "",
	});
	const headerRef = useRef(null);
	const videoRef = useRef(null);

	const animateHeader = (scrollTop, headerHeight, videoWidth) => {
		if (window.scrollY <= scrollTop / 1.2) {
			let scaleAmt = 1.0 - scrollTop / window.innerWidth;

			if (scaleAmt >= (videoWidth * 100) / headerSize.width / 100) {
				let scale = scaleAmt;
			} else {
				let scale = (videoWidth * 100) / headerSize.width / 100;
			}

			if (window.scrollY > headerHeight || window.innerWidth >= 600) {
				headerRef.current.style.opacity = (1 - (headerHeight - scrollTop) / headerHeight) * 1.6;
				headerRef.current.style.boxShadow =
					"0 22.7197px 13.4955px rgba(0,0,0,.0121168), 0 31.7288px 24.9955px rgba(0,0,0,.03), 0 40.5722px 43.8162px rgba(0,0,0,.0178832), 0 53.7405px 80.0658px rgba(0,0,0,.0215656)";
			} else {
				headerRef.current.style.opacity = 0;
				headerRef.current.style.boxShadow = "none";
			}
		}
		console.log(headerRef.current.style.opacity);
	};

	useEffect(() => {
		if (window.innerWidth >= 600) setWrapTopPos(216);
		else setWrapTopPos(136);
		setHeaderSize({
			height: headerRef.current.clientHeight + wrapTopPos,
			width: headerRef.current.offsetWidth,
		});
	}, []);

	return (
		<Box className="video-wrapper">
			{/* <Box className={`video-header ${direction}`}> */}
			<Box ref={headerRef} className="video-header">
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
			<Box ref={videoRef} className="video-wrapper">
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
