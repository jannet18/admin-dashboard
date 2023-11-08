import React from 'react';
import '../components/MainContainer.css';
import banner from '../images/backround.jpeg';


function MainContainer() {
  return (
    <div className='mainContainer'>
        <div className='left'>
            <div className="banner"
              style = {{
                background : `url(${banner})`,
                backgroundRepeat : 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover'
              }}>
                 <div className="text-container">
              <h1>Round Hall</h1>
              <h2>1.5 ETH</h2>
              <p>Uploaded by  Alexander Udinoff</p>
              <div className="bid">
                <a href="#button" className='button-1'>Bid now</a>
                <p>Ending In <span>2d:15h:20m</span></p>
              </div>
            </div>
            </div> 
        <div className="cards">
          <div className="filters">
            <div className="popular">
              <h2>Feed</h2>
              <a href='#button-2' className='button-2'>Popular</a>
            </div>
            <div className="filter-buttons">
              <a href="#btn" className="button-1">All</a>
              <a href="#btn" className="button-2">Illustration</a>
              <a href="#btn" className="button-2">Art</a>
              <a href="#btn" className="button-2">Games</a>
            </div>
          </div>
        </div>
        <main>
          
        </main>
        </div>
        <div className='right '></div>
    </div>
  )
}

export default MainContainer