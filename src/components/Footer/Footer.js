import React from 'react';
import s from './Footer.module.css';


function Footer() {
  return (
    <div className={s.footer}>
      <div className={s.container}>
        <span className={s.footerHeader}>Юрий Коленьков</span>
        <div className={s.networkBlock}>
          <div className={s.networkIcon}></div>
          <div className={s.networkIcon}></div>
          <div className={s.networkIcon}></div>
          <div className={s.networkIcon}></div>
        </div>
        <span>© 2019 Все права защищены</span>
      </div>
    </div>

  );
}

export default Footer;
