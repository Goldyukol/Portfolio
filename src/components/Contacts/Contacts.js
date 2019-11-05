import React from 'react';
import s from './Contacts.module.css';


function Contacts() {
  return (
    <div className={s.contacts}>
      <div className={s.contactOpenTag}>contact</div>
      <div className={s.container}>
        <form action='' className={s.formBlock}>
          <input className={`${s.contactInput} ${s.name}`} type='text' id='' ></input>
          <input className={`${s.contactInput} ${s.email}`} name='' type='text' id='' ></input>
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
