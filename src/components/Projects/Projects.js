import React from 'react';
import s from './Projects.module.css';


function Projects() {
  return (
    <div className={s.projects}>
      <div className={s.container}>
        <div className={s.block}>
          <span>Мои работы</span>
          <div className={s.work}>
            <div className={s.projectOne}>
              <div className={s.buttonProject}>
                <button>Смотреть</button></div>
              <div className={s.part}>
                <div className={s.word}>
                  <span>Social Network</span>
                  <span>Описание проекта</span>
                </div>
              </div>
            </div>
            <div className={s.projectTwo}>
              <div className={s.buttonProject}>
                <button>Смотреть</button></div>
              <div className={s.part}>
                <div className={s.word}>
                  <span>TodoList</span>
                  <span>Описание проекта</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
