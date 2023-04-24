import "./styles/NavbarMobile.css";
import VOOG_LOGO from "/assets/2020-nav-logo.svg";
import ARROW_DOWN from "/assets/2020-arrow-down.svg";
import { useState } from "react";
import VoimalusedTab from "./VoimalusedTabMobiil";
import MaterjalidTab from "./MaterjalidTabMobiil";
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Drawer, Typography } from "@mui/material";
function Navbar() {
	const [optionBar, setOptionBar] = useState(false);

	function toggleOptions() {
		if (optionBar === true) {
			setOptionBar(false);
		} else {
			setOptionBar(true);
		}
	}

	function language(text) {
		return (
			<span className="text-arrow lang-text">
				<div className="text-inner">
					<b>{text}</b>
					<img className="nav-arrow-down" src={ARROW_DOWN}></img>
				</div>
			</span>
		);
	}

	return (
		<>
			<Box className="mobile-navbar">
				<Box>
					<img className="voog-logo" src={VOOG_LOGO}></img>
				</Box>
				<Box className="burger-div" onClick={toggleOptions}>
					<svg width="32" height="12" viewBox="0 0 32 12" fill="none">
						<path fill="#000" d="M0 0h32v2H0zM0 10h32v2H0z"></path>
					</svg>
				</Box>
			</Box>
			<Drawer anchor={"right"} open={optionBar} onClose={toggleOptions}>
				<Box width={"100vw"} height={"100vh"} padding={"32px 24px 60px"}>
					<Box className="mobile-menu-top" paddingBottom={"32px"}>
						<Box>{language("Eesti keel")}</Box>
						<Box className="close-X" onClick={toggleOptions}>
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<rect
									width="31.4305"
									height="1.9644"
									transform="matrix(0.706501 0.707712 -0.706501 0.707712 1.38794 0)"
									fill="black"
								/>
								<rect
									width="31.4305"
									height="1.9644"
									transform="matrix(0.706501 -0.707712 0.706501 0.707712 0.405273 22.6099)"
									fill="black"
								/>
							</svg>
						</Box>
					</Box>
					<Box>
						<div>
							<Accordion style={{ boxShadow: "none", paddingLeft: "-16px" }} disableGutters={true}>
								<AccordionSummary
									expandIcon={<img src={ARROW_DOWN}></img>}
									aria-controls="panel1bh-content"
									id="panel1bh-header"
								>
									<Typography fontSize={18} fontWeight={300} color={"black"}>
										Võimalused
									</Typography>
								</AccordionSummary>
								<AccordionDetails>
									<VoimalusedTab />
								</AccordionDetails>
							</Accordion>
						</div>
						<div>
							<Accordion style={{ boxShadow: "none", paddingLeft: "-16px" }} disableGutters={true}>
								<AccordionSummary
									expandIcon={<img src={ARROW_DOWN}></img>}
									aria-controls="panel1bh-content"
									id="panel1bh-header"
								>
									<Typography fontSize={18} fontWeight={300} color={"black"}>
										Kujundused
									</Typography>
								</AccordionSummary>
								<AccordionDetails>
									<div className="kujundused-list">
										<Typography className="kujundus-list-item">Äri ja teenused</Typography>
										<Typography className="kujundus-list-item">E-poed</Typography>
										<Typography className="kujundus-list-item">Restoranid</Typography>
										<Typography className="kujundus-list-item">Looming ja fotograafia</Typography>
										<Typography className="kujundus-list-item">Muusika ja kunst</Typography>
										<Typography className="kujundus-list-item">Blogid ja taskuhääling</Typography>
										<Typography className="kujundus-list-item">Mittetulundusühingud</Typography>
										<Typography className="kujundus-list-item">Kinnisvara</Typography>
										<Typography className="kujundus-list-item">Üritused</Typography>
										<Typography className="kujundus-list-item">Koolid ja haridus</Typography>
										<Typography className="kujundus-list-item">Idufirmad</Typography>
									</div>
								</AccordionDetails>
							</Accordion>
						</div>
						<div>
							<Accordion style={{ boxShadow: "none", paddingLeft: "-16px" }} disableGutters={true}>
								<AccordionSummary
									expandIcon={<img src={ARROW_DOWN}></img>}
									aria-controls="panel1bh-content"
									id="panel1bh-header"
								>
									<Typography fontSize={18} fontWeight={300} color={"black"}>
										Materjalid
									</Typography>
								</AccordionSummary>
								<AccordionDetails>
									<div className="kujundused-list">
										<MaterjalidTab />
										<Typography className="kujundus-list-item">Alusta siit</Typography>
										<Typography className="kujundus-list-item">Ehita ise oma veebileht</Typography>
										<Typography className="kujundus-list-item">Ehita Veebipood</Typography>
										<Typography className="kujundus-list-item">SEO</Typography>
										<Typography className="kujundus-list-item">Arendajatele</Typography>
										<Typography className="kujundus-list-item">Veebiseminarid</Typography>
									</div>
								</AccordionDetails>
							</Accordion>
						</div>
					</Box>
					<Box width={"100%"}>
						<Button className="button-1" variant={"outlined"} fullWidth={true}>
							Sisene
						</Button>
					</Box>
					<Box width={"100%"} paddingTop={"20px"}>
						<Button className="button-2" variant={"contained"} fullWidth={true}>
							Loo veebileht tasuta
						</Button>
					</Box>
				</Box>
			</Drawer>
		</>
	);
}

export default Navbar;
