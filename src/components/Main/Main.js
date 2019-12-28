import React from 'react';
import s from './Main.module.sass';
import Fade from 'react-reveal/Fade';

function Main() {
  return (
    <Fade clear>
      <div className={s.main} id='main'>
        <div className={s.container}>
          <div className={s.greeting}>
            <span>Привет!</span>
            <span>Меня зовут <span>Юра Коленьков</span></span>
            <h1>Я front-end разработчик</h1>
          </div>
          <div className={s.photo}>
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default Main;
