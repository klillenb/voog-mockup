import "./styles/KujundusedTab.css"
export default function KujundusedTab(){

    function innerInnerTab(text1, text2, text3){
        return(
            <div className="inner-inner-tab">
                <div className="top-div"><text>{text1}</text></div>
                <div className="middle-div"><text>{text2}</text></div>
                <div className="bottom-div"><text>{text3}</text></div>
            </div>
        )
    }

    function innerInnerTab2(text1, text2){
        return(
            <div className="inner-inner-tab">
                <div className="top-div"><text>{text1}</text></div>
                <div className="bottom-div"><text>{text2}</text></div>
            </div>
        )
    }



    return(
        <div className="kujundused-tab-body">
            <div className="kujundused-inner-tab">
                {innerInnerTab("Äri ja teenused", "E-poed", "Restoranid")}
                {innerInnerTab("Looming ja fotograafia", "Muusika ja kunst", "Blogid ja taskuhääling")}
                {innerInnerTab("Mittetulundusühingud", "Kinnisvara", "Üritused")}
                {innerInnerTab2("Koolid ja haridus", "Idufirmad")}
            </div>
        </div>

    )
}