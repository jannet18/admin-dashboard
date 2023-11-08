import React from 'react';
import { BsFillHeartFill } from "react-icons/bs";

function CardMain({imgSrc, title, hearts}) {
  return (
    <div className='card-main'>
        <img src={imgSrc} alt="" />
        <div className="card_name">
            <h2>{title}</h2>
            <div className="card_icon">
                <i>
                <BsFillHeartFill/>
                <span>{hearts}</span>
                </i>
            </div>
        </div>
        <div className="stats">
            <p>Current Bid <span>1.2 ETH</span></p>
            <p>Ending In <span>1d:12h:10m</span></p>
        </div>
        <div className="card_button">
            <a href="#btn" className="button-1 btn">Place a Bid</a>
            <a href="#btn" className="button-2 btn">History</a>
        </div>
    </div>
  )
}

export default CardMain