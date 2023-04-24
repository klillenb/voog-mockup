import { Box } from "@mui/material";
import "./styles/Partners.css";

export default function Partners() {
	return (
		<Box className="partners-wrapper">
			<Box className="partners-text">
				<h5>Ühine teiste edukate Voo kasutajatega.</h5>
			</Box>
			<Box className="partners-row">
				<a class="partners" href="https://guardtime.com">
					<img src="/assets/guardtime.svg" />
				</a>
				<a class="partners" href="https://playtech.ee/">
					<img src="/assets/Playtech.svg" />
				</a>
				<a class="partners" href="https://cleveron.ee/">
					<img src="/assets/cleveron.svg" />
				</a>
				<a class="partners" href="https://messente.com">
					<img src="/assets/Messente.svg" />
				</a>
			</Box>
		</Box>
	);
}
