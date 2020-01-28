import React from 'react';
import s from '../Projects.module.sass';
import Button from '../../Common/Button/Button'

const Project = (props) => {
  return (
    <div className={s.project}>
      <div className={s.project_block}>
        <span className={s.project_title}>{props.title}</span>
        <span className={s.project_description}>{props.description}</span>
        <div>
          <Button title='View' href={props.href} />
        </div>
      </div>
    </div>
  );
}

export default Project;
