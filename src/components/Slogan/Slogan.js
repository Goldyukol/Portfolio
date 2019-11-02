import React from 'react';
import s from './Slogan.module.css';


function Slogan() {
  return (
    <div className={s.slogan}>
      <div className={s.container}>
        <div className={s.block}>
          <div className={s.sloganOpenTag}>hire</div>
          <div className={s.button}><button>Нанять меня</button></div>
        </div>
      </div>
      <div className={s.sloganCloseTag}>/hire</div>
    </div>
  );
}

export default Slogan;
