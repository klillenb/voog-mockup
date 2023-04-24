import { Box } from "@mui/material";
import "./styles/EasyEdit.css";

export default function EasyEdit() {
	return (
		<Box className="easyedit-wrapper">
			<Box className="column-image-wrapper">
				<img
					class="column-image"
					src="voog-mockup/resources/website-easy-to-edit-voog_large.png"
					sizes="(min-width: 500px) 500px"
					srcSet="voog-mockup/resources/website-easy-to-edit-voog.png 980w, voog-mockup/resources/website-easy-to-edit-voog_large.png 817w, voog-mockup/resources/website-easy-to-edit-voog_block.png 383w, voog-mockup/resources/website-easy-to-edit-voog_medium.png 96w"
				/>
			</Box>
			<Box className="column-text">
				<h3>Lihtne muuta.</h3>
				<p>
					Loo oma veebileht või e-pood minutitega. Vooga võtab see väga vähe aega. Ja kui sul on küsimusi, siis meie
					kasutajatugi on sulle alati abiks.
				</p>
				<Box className="column-link-group">
					<a class="column-link" href="https://voog.com/veebid">
						Ehita veebileht
					</a>
					<a class="column-link" href="https://voog.com/veebipood">
						Müü üle interneti
					</a>
					<a class="column-link" href="https://voog.com/signup">
						Tee äri veebis
					</a>
				</Box>
			</Box>
		</Box>
	);
}
