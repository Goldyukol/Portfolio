import React from 'react';
import s from '../Skills.module.sass';
import Fade from 'react-reveal/Fade';

const Skill = (props) => {
  return (
    <Fade clear>
      <div className={s.item}>
        <div className={s.item_name}>{props.name}</div>
        <div className={s.item_border}>
          <div className={props.img} />
        </div>
      </div>
    </Fade >
  );
}

export default Skill;
