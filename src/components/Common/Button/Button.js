import React from 'react';
import s from './Button.module.sass';

function Button() {
    return (
        <>
            <div><span className={s.btn}></span></div>
            <a href="#" className={s.brk}>
                Смотреть
              </a>
        </>
    );
}

export default Button;
