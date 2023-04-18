import "./styles/MaterjalidTabMobiil.css"
export default function MaterjalidTab(){

    return(
        <div className="materjalid-tab-body-mobiil">
                <div className="tab-div-mobile">
                    <div className="image-div-mobile"><div className="img-class"><img src={'//media.voog.com/0000/0036/2183/photos/Help.svg'}></img></div></div>
                    <div>
                        <div className="div-middle-mobiil"><b><text>Tugi ja juhendid</text></b></div>
                        <div className="div-bottom-mobiil">Rohkem Voost.</div>
                    </div>
                </div>
                <div className="tab-div-mobile">
                    <div className="image-div-mobile"><div className="img2-class"><img src={'//media.voog.com/0000/0036/2183/photos/Social.svg'}></img></div></div>
                   <div>
                       <div className="div-middle-mobiil"><b><text>Integratsioon</text></b></div>
                       <div className="div-bottom-mobiil">Täienda oma lehekülge sotsiaalmeedia-tööriistade abil.</div>
                   </div>
                </div>
        </div>

    )
}