import React from 'react';
import s from './Footer.module.css';


function Footer() {
  return (
    <div className={s.footer}>
      <div className={s.container}>
        <div className={s.block}>
          <span>Юрий Коленьков</span>
          <div className={s.networkBlock}>
            <div className={s.icon}></div>
            <div className={s.icon}></div>
            <div className={s.icon}></div>
            <div className={s.icon}></div>
          </div>
          <span>© 2019 Все права защищены</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
