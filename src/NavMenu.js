import React from 'react';
import s from './NavMenu.module.css';


function NavMenu() {
  return (
    <div className={s.navMenu}>
      <a href='#' className={s.link}>Главная</a>
      <a href='#' className={s.link}>Скиллы</a>
      <a href='#' className={s.link}>Проекты</a>
      <a href='#' className={s.link}>Контакты</a>
    </div>
  );
}

export default NavMenu;
