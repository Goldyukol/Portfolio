import React from 'react';
import s from './Button.module.sass';

const Button = (props) => {
    return (
        <>
            <div><span className={s.btn}></span></div>
            <a href="#" className={s.brk}>
                {props.title}
            </a>
        </>
    );
}

export default Button;
