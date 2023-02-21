import { Box } from "@mui/material";

export default function Partners() {
	return (
		<Box className="partners-wrapper" sx={{ display: "flex", justifyContent: "space-between" }}>
			<Box sx={{ minWidth: "initial", maxWidth: "initial" }}>
				<h5>Ühine teiste edukate Voo kasutajatega.</h5>
			</Box>
			<Box className="partners">
				<a class="partners" href="https://guardtime.com">
					<img src="src/assets/guardtime.svg" />
				</a>
				<a class="partners" href="https://playtech.ee/">
					<img src="src/assets/playtech.svg" />
				</a>
				<a class="partners" href="https://cleveron.ee/">
					<img src="src/assets/cleveron.svg" />
				</a>
			</Box>
		</Box>
	);
}
