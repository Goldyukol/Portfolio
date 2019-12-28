import React from 'react';
import s from './Contacts.module.css';


const Contacts = () => {

  return (
    <div className={s.contacts}>
      <div className={s.contactOpenTag} id='contact'>contact</div>
      <div className={s.container}>
        <form action='' className={s.formBlock}>
          <div className={s.name}>
            <input type="text" id="name" required="required" />
            <label for="name">Name</label>
          </div>
          <div className={s.email}>
            <input type="text" id="email" required="required" />
            <label for="email">Email</label>
          </div>
          <div className={s.textarea}>
            <textarea type="text" id="text" required="required"></textarea>
            <label for="text">Message</label>
          </div>
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
