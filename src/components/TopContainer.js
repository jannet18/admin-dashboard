import React from 'react';
import {FaSearch} from 'react-icons/fa';
import {BsFillBellFill, BsChevronDown} from 'react-icons/bs';
function TopContainer() {
  return (
    <div className='top-container'>
        <div className='input-box'>
      <input type='text' className='search-icon' placeholder='Search'></input>
      <i><FaSearch/></i>
        </div>
        <div className='profile-container'>
          <i className='profile-icon'><BsFillBellFill/></i>
        </div>
        <div className='profile-image'>

        </div>
        <p className='profile-name'>
          Christine Dona
        </p>
        <i className='menu-chevron' id='menu-chevron'>
          <BsChevronDown/>
        </i>
    </div>
  )
}

export default TopContainer