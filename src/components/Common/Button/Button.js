import React from 'react';
import s from './Button.module.sass';

const Button = (props) => {
    return (
        <>
            <div><span className={s.btn}></span></div>
            <button onClick={props.onClick} type={props.type} href={props.href} className={s.brk}
                disabled={props.disabled}>
                {props.title}
            </button>
        </>
    );
}

export default Button;
