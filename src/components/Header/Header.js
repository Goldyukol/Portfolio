import React from 'react';
import s from './Header.module.sass';
import NavMenu from './NavMenu/NavMenu';

const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.container}>
        <NavMenu />
      </div>
    </div>
  );
}

export default Header;
