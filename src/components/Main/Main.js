import React from 'react';
import s from './Main.module.sass';
import Fade from 'react-reveal/Fade';

const Main = () => {
  return (
    <Fade clear>
      <div className={s.main} id='main'>
        <div className={s.container}>
          <div className={s.greeting}>
            <span>Hey!</span>
            <span>My name is <span>Yura Kalenkou</span></span>
            <h1>I am a front-end developer</h1>
          </div>
          <div className={s.photo}>
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default Main;
