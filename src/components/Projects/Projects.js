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
              <div><a href="https://www.airforce.com/" className={s.underlined}></a></div>
              <a href="#" className={s.brk}>
                Смотреть
              </a>
            </div>
            <div className={s.descriptionBlock}>
              <span className={s.title}>Social Network</span>
              <span className={s.description}>Lorem ipsum dolor sit amet,
             consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...</span>
            </div>
          </div>

          <div className={s.project}>
            <div className={s.projectImg}>
              <div><a href="https://www.airforce.com/" className={s.underlined}></a></div>
              <a href="#" className={s.brk}>
                Смотреть
              </a>
            </div>
            <div className={s.descriptionBlock}>
              <span className={s.title}>Social Network</span>
              <span className={s.description}>Lorem ipsum dolor sit amet,
             consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...</span>
            </div>
          </div>

          <div className={s.project}>
            <div className={s.projectImg}>
              <div><a href="https://www.airforce.com/" className={s.underlined}></a></div>
              <a href="#" className={s.brk}>
                Смотреть
              </a>
            </div>
            <div className={s.descriptionBlock}>
              <span className={s.title}>Social Network</span>
              <span className={s.description}>Lorem ipsum dolor sit amet,
             consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...</span>
            </div>
          </div>

        </div>
      </div>
      <span className={s.projectCloseTag}>/projects</span>
    </div>
  );
}

export default Projects;
