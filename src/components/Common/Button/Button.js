import React from 'react';
import s from './Button.module.sass';

const Button = (props) => {

    const replaceHref = () => {
        if (props.href) {
            window.location.href = props.href
        }
    }

    return (
        <>
            <div><span className={s.btn}></span></div>
            <button onClick={() => { replaceHref() }} type={props.type} className={s.brk}
                disabled={props.disabled} >
                {props.title}
            </button>
        </>
    );
}

export default Button;
