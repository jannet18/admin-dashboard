import React, { useEffect} from 'react';
import {BiSearchAlt} from 'react-icons/bi';
import {BsFillBellFill, BsChevronDown} from 'react-icons/bs';
import woman from '../images/women.jpeg';
// import './Container.css';

function TopContainer() {
  useEffect(() => {
const menuTarget = document.getElementById('menu-chevron');
const menuContainer = document.getElementById('menu-container');

menuTarget.addEventListener('mouseenter', function() {
  menuTarget.style.transform = 'rotate(180deg)';
  menuContainer.style.transform = 'translateX(0px)';

  menuContainer.addEventListener('mouseleave', function () {
    menuTarget.style.transform = 'rotate(0deg)';
    menuContainer.style.transform = 'translateX(300px)';
  })
})
  }, []);
  return (
    <div className='top-container'>
        <div className='input-box'>
          <input type='text' className='search-icon' placeholder='Search'></input>
            <i><BiSearchAlt/></i>
        </div>
        <div className='profile-container'>
            <i className='profile-icon'><BsFillBellFill/></i>
        </div>
        <div className='profile-image'>
          <img src={woman} alt=''/>
        </div>
        <p className='profile-name'>
          Christine Dona
        </p>
        <i className='menu-chevron' id='menu-chevron'>
          <BsChevronDown/>
        </i>
        <div className='menu-container' id='menu-container'>
          <ul>
            <li>Web design</li>
            <li>UI /UX</li>
            <li>Form Design</li>
            <li>UI Design</li>
          </ul>
        </div>
    </div>
  )
}

export default TopContainer