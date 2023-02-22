import "./styles/MaterjalidTab.css"
export default function MaterjalidTab(){

    function innerInnerTab(text1, text2, text3){
        return(
            <div className="inner-inner-tab">
                <div className="top-div"><text>{text1}</text></div>
                <div className="middle-div"><text>{text2}</text></div>
                <div className="bottom-div"><text>{text3}</text></div>
            </div>
        )
    }

    function innerInnerTab2(text1, text2, text3){
        return(
            <div className="inner-inner-tab">
                <div className="top-div"><b>{text1}</b></div>
                <div className="middle-div"><text>{text2}</text></div>
                <div className="bottom-div"><text>{text3}</text></div>
            </div>
        )
    }



    return(
        <div className="materjalid-tab-body">
            <div className="materjalid-inner-tab">
                <div className="materjalid-left-tab">
                    <div><div className="img-class"><img src={'//media.voog.com/0000/0036/2183/photos/Help.svg'}></img></div></div>
                    <div className="div-middle"><b><text>Tugi ja juhendid</text></b></div>
                    <div className="div-bottom">Rohkem Voost.</div>
                </div>
                <div className="materjalid-left-tab margin-change">
                    <div><div className="img2-class"><img src={'//media.voog.com/0000/0036/2183/photos/Social.svg'}></img></div></div>
                    <div className="div-middle"><b><text>Integratsioon</text></b></div>
                    <div className="div-bottom">Täienda oma lehekülge sotsiaalmeedia-tööriistade abil.</div>
                </div>
                {innerInnerTab2("Alusta siit", "Ehita ise oma veebileht", "Ehita veebipood")}
                {innerInnerTab("SEO", "Arendajatele", "Veebiseminarid")}
            </div>
        </div>

    )
}