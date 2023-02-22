import "./styles/VoimalusedTab.css"
export default function VoimalusedTab(){

    function linkTab(imageClass, image, title, text, tabClass){
        return(
            <div className={tabClass}>
                <div>
                    <div className={imageClass}><img src={image}></img></div>
                </div>
                <div className="div-middle">
                    <b><p>{title}</p></b>
                </div>
                <div className="div-bottom">
                    {text}
                </div>
            </div>
        )

    }


    return(
        <div className="voimalused-tab-body">
            <div className="inner-tab">
                {linkTab("veebileht-img", '//media.voog.com/0000/0036/2183/photos/Layout-Top-Panel.svg' ,"Veebileht", "Loo Vooga mitmekeelseid veebilehti.", "tab-div-first")}
                {linkTab("epood-img", '//media.voog.com/0000/0036/2183/photos/Cart.svg' ,"E-pood", "Vii tooted ja teenused oma klientideni.", "tab-div-middle")}
                {linkTab("blogi-img", '//media.voog.com/0000/0036/2183/photos/Article.svg',"Blogi", "Loo ainukordne blogi, millega ennast väljendada.", "tab-div-middle")}
                {linkTab("arendajale-img", '//media.voog.com/0000/0036/2183/photos/Code.svg',"Arendajatele", "Ehita täpselt selline veebileht nagu soovid", "tab-div-middle")}
            </div>
        </div>

    )
}