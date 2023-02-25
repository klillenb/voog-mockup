import { Box } from "@mui/material";
import "./styles/Testimonial.css";

export default function Testimonial() {
	return (
		<Box className="testimonial-wrapper">
			<Box className="testimonial-content">
				<Box className="testimonial-image" />
				<Box className="testimonial-text">
					<p>Vool on lihtne struktuur. Peaaegu imelihtne on veebilehte luua.</p>
				</Box>
				<Box className="testimonial-author">
					<a href="https://ateljeehouses.ee">Raivo Midri - &nbsp;juhataja</a>
				</Box>
			</Box>
		</Box>
	);
}
