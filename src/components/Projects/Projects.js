import React from 'react';
import s from './Projects.module.css';


function Projects() {
  return (
    <div className={s.projectsBlock}>
      <div className={s.container}>
        <div className={s.block}>
          <div className={s.wordProject}>Мои работы</div>
          <div className={s.projects}>
            <div className={s.project}>
              <div className={s.projectImg}>
                <button>Смотреть</button></div>
              <div className={s.projectDescription}>

                <span>Social Network</span>
                <span>Описание проекта</span>

              </div>
            </div>
            <div className={s.project}>
              <div className={s.projectImg}>
                <button>Смотреть</button></div>
              <div className={s.projectDescription}>

                <span>Social Network</span>
                <span>Описание проекта</span>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
