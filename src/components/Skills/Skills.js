import React from 'react';
import s from './Skills.module.css';


function Skills() {
  return (
    <div className={s.skills}>
      <div className={s.container}>
        <div className={s.block}>
          <span>Мои скиллы</span>
          <div className={s.skillItems}>
            <div className={s.skillsItem}>
              <div className={s.skillWord}>JS</div>
              <div className={s.skillImage}>
              </div>
              <div className={s.description}>
              </div>
            </div>
            <div className={s.skillsItem}>
              <div className={s.skillWord}>HTML/CSS</div>
              <div className={s.skillImage}>
              </div>
              <div className={s.description}>
              </div>
            </div>
            <div className={s.skillsItem}>
              <div className={s.skillWord}>React</div>
              <div className={s.skillImage}>
              </div>
              <div className={s.description}>
                {/* Подробное описание навыка */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
