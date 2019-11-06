import React from 'react';
import s from './Contacts.module.css';


function Contacts() {
  return (
    <div className={s.contacts}>
      <div className={s.contactOpenTag}>contact</div>
      <div className={s.container}>
        <form action='' className={s.formBlock}>
          <div className={s.name}>
            <input className={s.contactInput} type='text' id='name' ></input>
            <label for='name'>name</label>
          </div>
          <div className={s.email}>
            <input className={s.contactInput} name='' type='text' id='' ></input>
            <span className={s.styledSpan}></span>
          </div>
          <textarea className={s.contactTextarea} name='' id=''></textarea>
          <div><a href="https://www.airforce.com/" className={s.underlined}></a></div>
          <a href="#" className={s.brk}>
            Отправить
              </a>
        </form>
      </div>
      <div className={s.contactCloseTag}>/contact</div>
    </div >

  );
}

export default Contacts;
