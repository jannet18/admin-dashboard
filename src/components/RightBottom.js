import React from 'react';
import TopSeller from './TopSeller';

function RightBottom() {
  return (
    <div className='right_bottom_card'>
        <div className="bottom_name">
        <h2>Top Seller</h2>
        <a href="#view-more">View More</a>
        </div>
        {
            TopSeller && TopSeller.map((seller, id) => (
                // console.log(seller)
            <div className="top-seller" key={id}>
                <div className="top-seller_img">
                    <img src={seller?.imgSrc} alt="" />
                </div>
           
            <div className="top-seller_name">
                <p>{seller?.seller_name}<span>{seller?.username}</span></p>
            </div>
            <a href="#btn" className="button-1 btn">Follow</a>
            </div>
            ))
        }
       
    </div>
  )
}

export default RightBottom