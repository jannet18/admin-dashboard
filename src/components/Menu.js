import React from 'react';
import logo from '../images/logo.png';
import { FaShoppingCart,FaWallet, FaDelicious, FaChartLine, FaRegClock, FaCog, FaSignOutAlt } from "react-icons/fa"

function Menu() {
  return (
<menu>
  <img src={logo} alt=''/>
<div>
<ul id='main-menu'>
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