import React from 'react';
import s from './Main.module.css';


function Main() {
  return (
    <div className={s.main}>
      <div className={s.container}>
        <div className={s.greeting}>
          <span>Привет!</span>
          <span>Меня зовут <span>Юра Коленьков</span></span>
          <h1>Я front-end разработчик</h1>
        </div>
        <div className={s.photo}>
          {/* <img src='https://cs7.pikabu.ru/post_img/big/2018/10/20/9/154004999513599819.jpg' alt='' /> */}
        </div>
      </div>
    </div>
  );
}

export default Main;
