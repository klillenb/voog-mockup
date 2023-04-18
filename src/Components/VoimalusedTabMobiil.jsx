import "./styles/VoimalusedTabMobiil.css"
export default function VoimalusedTab(){

    function linkTab(imageClass, image, title, text, tabClass){
        return(
            <div className={tabClass}>
                <div className="image-div-mobile">
                    <div className={imageClass}><img src={image}></img></div>
                </div>
                <div className="voimalused-right">
                    <div>
                        <b>{title}</b>
                    </div>
                    <div className="mobile-bottom-text">
                        {text}
                    </div>
                </div>
            </div>
        )

    }


    return(
        <div className="voimalused-tab-mobiil-body">
            <div className="inner-tab-mobiil">
                {linkTab("veebileht-img", '//media.voog.com/0000/0036/2183/photos/Layout-Top-Panel.svg' ,"Veebileht", "Loo Vooga mitmekeelseid veebilehti.", "tab-div-top")}
                {linkTab("epood-img", '//media.voog.com/0000/0036/2183/photos/Cart.svg' ,"E-pood", "Vii tooted ja teenused oma klientideni.", "tab-div-center")}
                {linkTab("blogi-img", '//media.voog.com/0000/0036/2183/photos/Article.svg',"Blogi", "Loo ainukordne blogi, millega ennast väljendada.", "tab-div-center")}
                {linkTab("arendajale-img", '//media.voog.com/0000/0036/2183/photos/Code.svg',"Arendajatele", "Ehita täpselt selline veebileht nagu soovid", "tab-div-center")}
            </div>
        </div>

    )
}