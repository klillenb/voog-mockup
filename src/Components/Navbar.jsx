import "./styles/Navbar.css";
import VOOG_LOGO from "../assets/2020-nav-logo.svg";
import ARROW_DOWN from "../assets/2020-arrow-down.svg";
function Navbar() {
	function textAndArrow(text) {
		return (
			<span className="text-arrow nav-text">
				<span>
					<b>{text}</b>
				</span>
				<span className="nav-arrow-down">
					<img src={ARROW_DOWN}></img>
				</span>
			</span>
		);
	}

	function language(text) {
		return (
			<span className="text-arrow lang-text">
				<span>
					<b>{text}</b>
				</span>
				<span className="nav-arrow-down">
					<img src={ARROW_DOWN}></img>
				</span>
			</span>
		);
	}

	return (
		<div className="Navbar-start bg-transparent">
			<div className="navbar-inner">
				<div className="nav-left">
					<span>
						<img className="voog-logo" src={VOOG_LOGO}></img>
					</span>
					{textAndArrow("Võimalused")}
					{textAndArrow("Kujundused")}
					{textAndArrow("Materjalid")}
					<span className="nav-text text-arrow">
						<b>Partnerid</b>
					</span>
				</div>
				<div className="nav-right">
					{language("Eesti keeles")}
					<span>
						<button type="button" className="btn nav-button-lang">
							<b>Sisene</b>
						</button>
					</span>
					<span>
						<button type="button" className="btn btn-primary nav-button-cta">
							<b>Loo veebileht tasuta</b>
						</button>
					</span>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
