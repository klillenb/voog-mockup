import { Box } from "@mui/material";
import "./styles/Card.css";

const cardData = [
	{
		title: "SEO-sõbralikud veebilehed",
		content: "Meie SEO tööristad aitavad sul teha oma lehed otsingumootorites kergesti leitavaks.",
		link: "Õpi SEO kohta lähemalt",
		img: "src/assets/card-seo.png",
	},
	{
		title: "Kasutaja­sõbralikud kujundused",
		content: "Voo disain on lihtsasti muudetav ja lubab sul anda oma veebipoele ainukordse välimuse.",
		link: "Vali kujundus",
		img: "src/assets/card-design.png",
	},
	{
		title: "Arendajasõbralik keskkond",
		content:
			"Seadista oma veebipoes turvalised maksete vastuvõtmise lahendused. Voogu on sisse ehitatud rea tuntud maksevahendusplatvormide tugi.",
		link: "Loe dokumentatsiooni",
		img: "src/assets/card-environment.png",
	},
];

export default function Card() {
	return (
		<Box className="card-wrapper">
			{cardData.map((card) => {
				return (
					<Box className="card-component">
						<img src={card.img} />
						<h4>{card.title}</h4>
						<p>{card.content}</p>
						<a href="" class="card-link">
							{card.link}
						</a>
					</Box>
				);
			})}
		</Box>
	);
}
