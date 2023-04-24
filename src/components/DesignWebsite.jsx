import { Box } from "@mui/material";
import "./styles/DesignWebsite.css";

export default function DesignWebsite() {
	return (
		<Box className="design-wrapper">
			<Box className="design-text-wrapper">
				<h3>Kujunda oma veebileht.</h3>
				<Box className="design-text-content">
					<p>
						Voos on palju kohandatavaid kujundusmalle, mille vahel valida. Sa ei pea olema disainer, et leht hea välja
						näeks. Aga sa võid ka kogu oma lehe ise käsitsi kujundada, et luua täiesti kordumatu veebileht.
					</p>
				</Box>
				<Box className="button-group">
					<button type="button" className="btn btn-primary nav-button-cta">
						<b>Alusta tasuta</b>
					</button>
					<button type="button" className="btn">
						Loe lisaks
					</button>
				</Box>
			</Box>
			<Box className="image-wrapper">
				<img
					src="voog-mockup/resources/design-your-website-voog-2x_block.png"
					sizes="(min-width: 500px) 500px"
					srcSet="/voog-mockup/resources/design-your-website-voog-2x.png 1000w, /voog-mockup/resources/design-your-website-voog-2x_block.png 521w, /voog-mockup/resources/design-your-website-voog-2x_medium.png 130w"
				/>
			</Box>
		</Box>
	);
}
