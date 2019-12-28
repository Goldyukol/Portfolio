import React from 'react';
import './NavMenu.sass';
import Burger from './Burger/Burger';


function NavMenu() {
  return (
    <div className='navMenu'>
      <Burger pageWrapId={'page-wrap'} outerContainerId={'NavMenu'} />
    </div>
  );
}

export default NavMenu;