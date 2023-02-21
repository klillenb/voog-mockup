import "./styles/Navbar.css"
import VOOG_LOGO from "../assets/2020-nav-logo.svg"
import ARROW_DOWN from "../assets/2020-arrow-down.svg"



import {Box, Typography} from "@mui/material";
function Navbar() {


    function textAndArrow(text){
        return(
            <span className="text-arrow nav-text">
                <span><b>{text}</b></span>
                <span className="nav-arrow-down"><img src={ARROW_DOWN}></img></span>
            </span>
        )
    }

    return (
        <div className="Navbar-start bg-info">
            <div className="navbar-inner">
                <div className="nav-left">
                <span>
                    <img className="voog-logo" src={VOOG_LOGO}></img>
                </span>
                    {textAndArrow("Võimalused")}
                    {textAndArrow("Kujundused")}
                    {textAndArrow("Materjalid")}
                    <span className="nav-text text-arrow"><b>Partnerid</b></span>
                </div>
                <div className="nav-right">
                <span>
                    <button type="button" class="btn btn-primary nav-button-cta">Loo veebileht tasuta</button>
                </span>

                </div>
            </div>

        </div>
    );
}

export default Navbar;