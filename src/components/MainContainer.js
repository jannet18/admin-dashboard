import React from 'react';
import '../components/MainContainer.css';
import banner from '../images/backround.jpeg';
import CardMain from './CardMain';
import card1 from '../images/card-1.jpeg';
import card2 from '../images/card-2.jpeg';
import card3 from '../images/card-3.jpeg';
import card4 from '../images/card-4.jpeg';
import card5 from '../images/card-5.jpeg';
import card6 from '../images/card-6.jpeg';
import RightTop from './RightTop';
import RightBottom from './RightBottom';



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
          <main>
          <CardMain imgSrc={card1} title={"Cubic Thunder"} hearts={'65'}/>
          <CardMain imgSrc={card2} title={"Pokeman Ball"} hearts={'55'}/>
          <CardMain imgSrc={card3} title={"Pyramid God"} hearts={'35'}/>
          <CardMain imgSrc={card4} title={"Stunning Cube"} hearts={'50'}/>
          <CardMain imgSrc={card5} title={"Star Crystal"} hearts={'45'}/>
          <CardMain imgSrc={card6} title={"Crystal Bird"} hearts={'75'}/>
          </main>
        </div>
        </div>
        <div className='right'>
          <RightTop/>
          <RightBottom/>
        </div>
    </div>
  )
}

export default MainContainer