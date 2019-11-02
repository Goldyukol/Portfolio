import React from 'react';
import s from './NavMenu.module.css';


function NavMenu() {
  return (
    <div className={s.navMenu}>
      <ul>
        <li><a href='#' className={s.link}>Главная</a></li>
        <li><a href='#' className={s.link}>Скиллы</a></li>
        <li><a href='#' className={s.link}>Проекты</a></li>
        <li><a href='#' className={s.link}>Контакты</a></li>
      </ul>
    </div>
  );
}

export default NavMenu;
