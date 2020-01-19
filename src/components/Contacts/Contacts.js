import React from 'react';
import s from './Contacts.module.sass';
import Button from '../Common/Button/Button';

const Contacts = () => {
  return (
    <div className={s.contacts}>
      <div className={s.otag} id='contact'>contact</div>
      <div className={s.contacts_container}>
        <form action='' className={s.contacts_form}>
          <div className={s.contacts_name}>
            <input type="text" id="name" required="required" autocomplete='off' />
            <label for="name">Name</label>
          </div>
          <div className={s.contacts_email}>
            <input type="text" id="email" required="required" autocomplete='off' />
            <label for="email">Email</label>
          </div>
          <div className={s.contacts_textarea}>
            <textarea type="text" id="text" required="required" autocomplete='off'></textarea>
            <label for="text">Message</label>
          </div>
          <Button title='Отправить' />
        </form>
      </div>
      <div className={s.ctag}>/contact</div>
    </div >
  );
}


export default Contacts;
