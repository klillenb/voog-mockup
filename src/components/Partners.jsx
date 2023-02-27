import { Box } from "@mui/material";
import "./styles/Partners.css";

export default function Partners() {
	return (
		<Box className="partners-wrapper">
			<Box sx={{ minWidth: "initial", maxWidth: "initial" }}>
				<h5>Ühine teiste edukate Voo kasutajatega.</h5>
			</Box>
			<Box className="partners-row">
				<a class="partners" href="https://guardtime.com">
					<img src="src/assets/guardtime.svg" />
				</a>
				<a class="partners" href="https://playtech.ee/">
					<img src="src/assets/playtech.svg" />
				</a>
				<a class="partners" href="https://cleveron.ee/">
					<img src="src/assets/cleveron.svg" />
				</a>
				<a class="partners" href="https://messente.com">
					<img src="src/assets/Messente.svg" />
				</a>
			</Box>
		</Box>
	);
}
