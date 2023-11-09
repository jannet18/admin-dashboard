import React from 'react'

function RightTop() {
  return (
    <div className='top_card'>
        <div className="top_card_name">
            <h2>Statistics</h2>
            <a href="#more" className="viewmore">View More</a>
        </div>
        <div className="earning">
            <p>Artwork Sold <span>157</span>    </p>
            <p>Artwork Cancelled <span>6</span>    </p>
            <p>Artwork Pending <span>15</span>    </p>
            <p>Artwork Delivered <span>200</span>    </p>
            <p>Artwork Sold <span>157</span>    </p>
            <p>Total Earnings <span>280 ETH</span>    </p>
        </div>
    </div>
  )
}

export default RightTop