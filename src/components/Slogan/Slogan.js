import React from 'react';
import s from './Slogan.module.sass';
import Button from '../Common/Button/Button';
import Fade from 'react-reveal/Fade';

const Slogan = () => {
  return (
    <div className={s.slogan}>
      <Fade clear>
        <div className={s.sloganOpenTag}>hire</div>
        <div className={s.container}>
          <div className={s.block}>
            <div className={s.title}>Готов сотрудничать с Вами!</div>
            <Button title='Нанять меня' />
          </div>
        </div>
        <div className={s.sloganCloseTag}>/hire</div>
      </Fade>
    </div>
  );
}

export default Slogan;
