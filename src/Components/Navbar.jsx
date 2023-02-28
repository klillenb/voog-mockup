import "./styles/Navbar.css"
import VOOG_LOGO from "../assets/2020-nav-logo.svg"
import ARROW_DOWN from "../assets/2020-arrow-down.svg"
import {useState} from "react";
import VoimalusedTab from "./VoimalusedTab.jsx";
import KujundusedTab from "./KujundusedTab.jsx";
import MaterjalidTab from "./MaterjalidTab.jsx";
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

    const [optionBar, setOptionBar] = useState(0)



    function textAndArrow(text, num){

        function optionBarChange(num) {
            if(optionBar === num){
                setOptionBar(0);
            }else{
                setOptionBar(num);
            }
        }

        return(
            <span className="text-arrow nav-text">
                <div className="text-inner" onClick={() => {optionBarChange(num)}}><b>{text}</b><img className="nav-arrow-down" src={ARROW_DOWN}></img></div>
            </span>
        )
    }

    function language(text){
        return(
            <span className="text-arrow lang-text">
                <div className="text-inner"><b>{text}</b><img className="nav-arrow-down" src={ARROW_DOWN}></img></div>
            </span>
        )
    }

    return (
        <>
            {optionBar === 1 ? <VoimalusedTab/> : null}
            {optionBar === 2 ? <KujundusedTab/> : null}
            {optionBar === 3 ? <MaterjalidTab/> : null}
            <div className="Navbar-start">
                <div className="navbar-inner">
                    <div className="nav-left">
                    <span>
                        <img className="voog-logo" src={VOOG_LOGO}></img>
                    </span>
                        {textAndArrow("Võimalused", 1)}
                        {textAndArrow("Kujundused", 2)}
                        {textAndArrow("Materjalid", 3)}
                        <span className="nav-text text-arrow"><b>Partnerid</b></span>
                    </div>
                    <div className="nav-right">
                        {language("Eesti keeles")}
                        <span>
                            <button type="button" className="btn nav-button-lang"><b>Sisene</b></button>
                        </span>
                        <span>
                            <button type="button" className="btn btn-primary nav-button-cta"><b>Loo veebileht tasuta</b></button>
                        </span>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Navbar;
