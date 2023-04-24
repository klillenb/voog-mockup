import { Box } from "@mui/material";
import "./styles/Videoplayer.css";
import backgroundVideo from "/resources/voog-video.mp4";
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

	const wrapTopPos = window.innerWidth >= 600 ? 216 : 136;
	const mainBodyTop = window.innerWidth >= 600 ? 32 : 40;
	const [headerSize, setHeaderSize] = useState({
		height: 0,
		width: 0,
	});
	const headerRef = useRef(null);
	const videoRef = useRef(null);
	const videoBackgroundRef = useRef(null);

	const animateHeader = (scrollTop, headerHeight, videoWidth) => {
		if (window.scrollY <= scrollTop / 1.2) {
			let scaleAmt = 1.0 - scrollTop / window.innerWidth;
			let scale;

			if (scaleAmt >= (videoWidth * 100) / headerSize.width / 100) {
				scale = scaleAmt;
			} else {
				scale = (videoWidth * 100) / headerSize.width / 100;
			}

			if (window.scrollY > headerHeight || window.innerWidth >= 600) {
				videoRef.current.style.opacity = (1 - (headerHeight - scrollTop) / headerHeight) * 1.6;
				videoRef.current.style.boxShadow =
					"0 22.7197px 13.4955px rgba(0,0,0,.0121168), 0 31.7288px 24.9955px rgba(0,0,0,.03), 0 40.5722px 43.8162px rgba(0,0,0,.0178832), 0 53.7405px 80.0658px rgba(0,0,0,.0215656)";
			} else {
				videoRef.current.style.opacity = 0;
				videoRef.current.style.boxShadow = "none";
			}

			headerRef.current.style.opacity = (0 + (headerHeight - y * 1.4)) / headerHeight;
			headerRef.current.style.top = `${wrapTopPos / 2}px`;
			headerRef.current.style.transform = `scale(${scale})`;
			headerRef.current.style.display = "flex";

			const mainBody = document.querySelector(".main-body");
			const footerBody = document.querySelector(".footer-main");
			mainBody.style.position = "sticky";
			mainBody.style.top = `${mainBodyTop}px`;
			footerBody.style.position = "absolute";
		} else {
			headerRef.current.style.opacity = 0;
			headerRef.current.style.display = "none";
			videoRef.current.style.opacity = 1;
		}
	};

	useEffect(() => {
		setTimeout(
			() =>
				setHeaderSize({
					height: headerRef.current.clientHeight + wrapTopPos,
					width: headerRef.current.offsetWidth,
				}),
			1
		);
	}, []);

	useEffect(() => {
		videoBackgroundRef.current.style.height = `${headerSize.height}px`;
	}, [headerSize]);

	useEffect(() => {
		window.addEventListener("scroll", handleNavigation);
		animateHeader(y, headerSize.height, videoRef.current.offsetWidth);
		return () => {
			window.removeEventListener("scroll", handleNavigation);
		};
	}, [handleNavigation]);

	return (
		<Box className="video-wrapper">
			<Box ref={videoBackgroundRef} className="video-background" />
			{/* bottomWrapper */}
			<Box ref={headerRef} className="video-header">
				<img src="/voog-mockup/resources/header-front_large.png" />
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
			<Box className="video-description-wrapper">
				<Box ref={videoRef} className="video">
					<video autoPlay loop muted id="video">
						<source src={backgroundVideo} type="video/mp4" />
					</video>
				</Box>
				<Box className="video-text">
					<Box className="video-undertext-tagline">
						<h3>Lihtne kasutada.</h3>
						<h3>Rohkete võimalustega.</h3>
					</Box>
					<Box className="video-undertext-description">
						Vooga saab igaüks endale nullist ilusa kodulehe ja veebipoe luua. Ent lihtsus on kõigest asja üks külg. Voog
						on nii võimas, et disainiagentuurid haldavad sellel suuri, ainukordseid ja keerukaid kliendisaite.
					</Box>
				</Box>
			</Box>
		</Box>
	);
}
