import React from 'react';
import s from './Projects.module.css';


function Projects() {
  return (
    <div className={s.projects}>
      <div className={s.container}>
        <span className={s.projectOpenTag}>projects</span>
        <div className={s.projectsWrapper}>

          <div className={s.project}>
            <div className={s.projectImg}>
              <a className={s.projectBtn} href=''>СМОТРЕТЬ</a>
            </div>
            <span className={s.projectTitle}>Social Network</span>
            <span className={s.description}>Описание проекта</span>
          </div>

          <div className={s.project}>
            <div className={s.projectImg}>
              <a className={s.projectBtn} href=''>СМОТРЕТЬ</a>
            </div>
            <span className={s.projectTitle}>Social Network</span>
            <span className={s.description}>Описание проекта</span>
          </div>

          <div className={s.project}>
            <div className={s.projectImg}>
              <a className={s.projectBtn} href=''>СМОТРЕТЬ</a>
            </div>
            <span className={s.projectTitle}>Social Network</span>
            <span className={s.description}>Описание проекта</span>
          </div>

        </div>
      </div>
      <span className={s.projectOpenTag}>/projects</span>
    </div>
  );
}

export default Projects;
