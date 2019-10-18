import React from 'react';
import s from './Contacts.module.css';


function Contacts() {
  return (
    <div className={s.contacts}>
      <div className={s.container}>
        <div className={s.block}>
          <span>Контакты</span>

          <form action='' className={s.formBlock}>
            <input name='' type='text' id='' className={s.contactInput}></input>
            <input name='' type='text' id='' className={s.contactInput}></input>
            <textarea name='' id='' cols='50' rows='10' className={s.textarea}></textarea>
            <button type='submit'>Отправить</button>
          </form>

          {/* <div className={s.buttonBlock}>
            <button type='submit'>Отправить</button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Contacts;
