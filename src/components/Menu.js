import React, {useEffect} from 'react';
import logo from '../images/logo.png';
import './Menu.css';
import { FaShoppingCart,FaWallet, FaDelicious, FaChartLine, FaRegClock, FaCog, FaSignOutAlt } from "react-icons/fa"

function Menu() {

  useEffect(() => {
const mainMenu = document
.getElementById('main-menu')
.querySelectorAll('li');

function removeActive () {
  mainMenu.forEach(element => {
    element.classList.remove('active');
    this.classList.add('active');
  });
}

mainMenu.forEach(element => {
  element.addEventListener('click', removeActive);
});

  }, []);
  return (
<menu  className='menu'>
  <img src={logo} alt=''/>
  <div className="main">
<ul id='main-menu' className='main-menu'>
    <Icon icon={<FaDelicious/>}/>
    <Icon icon={<FaShoppingCart/>}/>
    <Icon icon={<FaWallet/>}/>
    <Icon icon={<FaChartLine/>}/>
    <Icon icon={<FaRegClock/>}/>
  </ul>
  <ul className='mini-menu'>
  <Icon icon={<FaCog/>}/>
  <Icon icon={<FaSignOutAlt/>}/>
  </ul>
  </div>
</menu>
  )
}

const Icon = ({icon}) => (
  <li>
    <a href='#menu'>{icon}</a>
  </li>
);

export default Menu;