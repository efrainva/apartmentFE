import React from "react";

const TenentCard = () => {


    function look(one){
        console.log(one)
    }
    return(<section className="TenentCard">
        
        {/* <section className="topPart">
        </section> */}
        <h2 className="numberhTwo">number</h2>

        <section className="bottomPart">
            <div className="paidStatus">paid/status</div>
            <button className="messageButtton" onClick={()=>{look("1")} }>message</button>
            <button className="paperButton" onClick={()=>{look("2")} }>paperwork</button>
            <button className="maitenanceButton" onClick={()=>{look("3")} }>maitenance</button>
        </section>
        
    </section>)
}

export default TenentCard;