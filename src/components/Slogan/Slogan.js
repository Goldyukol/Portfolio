import React from 'react';
import s from './Slogan.module.sass';
import Button from '../Common/Button/Button';

function Slogan() {
  return (
    <div className={s.slogan}>
      <div className={s.sloganOpenTag}>hire</div>
      <div className={s.container}>
        <div className={s.block}>
          <div className={s.title}>Готов сотрудничать с Вами!</div>
          <Button />
        </div>
      </div>
      <div className={s.sloganCloseTag}>/hire</div>
    </div>
  );
}

export default Slogan;
