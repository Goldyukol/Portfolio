import React from 'react';
import s from './Contacts.module.sass';
import Button from '../Common/Button/Button';
import Fade from 'react-reveal/Fade';

const Contacts = () => {
  return (
    <div className={s.contacts}>
      <Fade clear>
        <div className={s.otag} id='contact'>contact</div>
        <div className={s.contacts_container}>
          <form className={s.contacts_form} action='https://formspree.io/xayowenj' method='POST'>
            <div className={s.contacts_name}>
              <input type='text' name='name' id="name" required="required" autocomplete='off' />
              <label for="name">Name</label>
            </div>
            <div className={s.contacts_email}>
              <input type='text' name='email' id="email" required="required" autocomplete='off' />
              <label for="email">Email</label>
            </div>
            <div className={s.contacts_textarea}>
              <textarea name='message' type="text" id="text" required="required" autocomplete='off' />
              <label for="text">Message</label>
            </div>
            <Button title='Отправить' type='submit' />
          </form>
        </div>
        <div className={s.ctag}>/contact</div>
      </Fade>
    </div >
  );
}

export default Contacts;
