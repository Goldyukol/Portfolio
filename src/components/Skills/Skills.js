import React from 'react';
import s from './Skills.module.sass';
import Fade from 'react-reveal/Fade';
import Skill from './Skill/Skill';

const Skills = () => {
  return (
    <div className={s.skills}>
      <div className={s.otag} id='skills'>skills</div>
      <div className={s.container}>
        <div className={s.block}>
          <div className={s.items}>
            <Fade left>
              <Skill name='JavaScript' img={s.skillImgJs} />
            </Fade>
            <Fade top>
              <Skill name='HTML/CSS' img={s.skillImgHtml} />
            </Fade>
            <Fade top>
              <Skill name='React/Redux' img={s.skillImgReact} />
            </Fade>
            <Fade right>
              <Skill name='TypeScript' img={s.skillImgTs} />
            </Fade>
            <Fade left>
              <Skill name='SASS' img={s.skillImgSass} />
            </Fade>
            <Fade bottom>
              <Skill name='Bootstrap' img={s.skillImgBootstrap} />
            </Fade>
            <Fade bottom>
              <Skill name='NodeJS' img={s.skillImgNodeJS} />
            </Fade>
            <Fade right>
              <Skill name='MongoDB' img={s.skillImgMongoDB} />
            </Fade>
          </div>
        </div>
      </div>
      <div className={s.ctag}>/skills</div>
    </div>

  );
}

export default Skills;
