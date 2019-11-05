import React from 'react';
import s from './Slogan.module.css';


function Slogan() {
  return (
    <div className={s.slogan}>
      <div className={s.sloganOpenTag}>hire</div>
      <div className={s.container}>
        <div className={s.block}>
          <div className={s.title}>Готов сотрудничать с Вами!</div>
          <div><a href="https://www.airforce.com/" className={s.underlined}></a></div>
          <a href="#" className={s.brk}>
            Нанять меня
              </a>
        </div>
      </div>
      <div className={s.sloganCloseTag}>/hire</div>
    </div>
  );
}

export default Slogan;
