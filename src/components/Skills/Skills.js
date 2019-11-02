import React from 'react';
import s from './Skills.module.css';

function Skills() {
  return (
    <div className={s.skills}>
      <div className={s.container}>
        <div className={s.block}>
          <div className={s.skillOpenTag}>skills</div>
          <div className={s.skillItems}>
            <div className={s.skillsItem}>
              <div className={s.skillName}>JS</div>
              <div className={s.skillImgJs} />
              <div className={s.skillsDescription}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...
              </div>
            </div>
            <div className={s.skillsItem}>
              <div className={s.skillName}>HTML/CSS</div>
              <div className={s.skillImgHtml} />
              <div className={s.skillsDescription}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...
              </div>
            </div>
            <div className={s.skillsItem}>
              <div className={s.skillName}>React/Redux</div>
              <div className={s.skillImgReact} />
              <div className={s.skillsDescription}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className={s.skillCloseTag}>/skills</div>
    </div>
  );
}

export default Skills;
