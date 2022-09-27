import React from "react";
import "./currency-live-wall.css"

const CurrencyLiveWall = (props) => {
    return (
        <div className="wall">
       
            <p className="fw-light fs-5 title"><div className="row padding">
                <div className="col-5 p-2">Ticker:</div><div className="col-5 p-2">{props.templateUpdate.ticker}</div>
                <div className="col-5 p-2">BID:</div><div className="col-5 p-2">{props.templateUpdate.bid}</div>
                <div className="col-5 p-2">Ask:</div><div className="col-5 p-2">{props.templateUpdate.ask}</div>
                <div className="col-5 p-2">Open:</div><div className="col-5 p-2">{props.templateUpdate.open}</div>
                <div className="col-5 p-2">Low:</div><div className="col-5 p-2">{props.templateUpdate.low}</div>
                <div className="col-5 p-2">High:</div><div className="col-5 p-2">{props.templateUpdate.high}</div>
                <div className="col-5 p-2">Changes:</div><div className="col-5 p-2">{props.templateUpdate.changes}</div>
                <div className="col-5 p-2">Date:</div><div className="col-5 p-2">{props.templateUpdate.date}</div>
            </div></p>
        </div>
    );
   
}

export default CurrencyLiveWall;



