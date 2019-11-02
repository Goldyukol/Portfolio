import React from 'react';
import s from './Contacts.module.css';


function Contacts() {
  return (
    <div className={s.contacts}>
      <div className={s.container}>
        <span className={s.contactHeader}>Контакты</span>
        <form action='' className={s.formBlock}>
          <input className={s.contactInput} placeholder='Имя' type='text' id='' ></input>
          <input className={s.contactInput} placeholder='e-mail' name='' type='text' id='' ></input>
          <textarea className={s.contactTextarea} placeholder='Сообщение' name='' id='' cols='50' rows='10'></textarea>
          <button className={s.contactBtn} type='submit'>Отправить</button>
        </form>
      </div>
    </div>

  );
}

export default Contacts;
