import React from 'react';
import s from './Skills.module.sass';
import Fade from 'react-reveal/Fade';

const Skills = () => {
  return (
    <Fade clear>
      <div className={s.skills}>
        <div className={s.otag} id='skills'>skills</div>
        <div className={s.container}>
          <div className={s.block}>
            <div className={s.items}>
              <div className={s.item}>
                <div className={s.item_name}>JavaScript</div>
                <div className={s.item_border}>
                  <div className={s.skillImgJs} />
                </div>
              </div>
              <div className={s.item}>
                <div className={s.item_name}>HTML/CSS</div>
                <div className={s.item_border}>
                  <div className={s.skillImgHtml} />
                </div>
              </div>
              <div className={s.item}>
                <div className={s.item_name}>React/Redux</div>
                <div className={s.item_border}>
                  <div className={s.skillImgReact} />
                </div>
              </div>
              <div className={s.item}>
                <div className={s.item_name}>TypeScript</div>
                <div className={s.item_border}>
                  <div className={s.skillImgTs} />
                </div>
              </div>
              <div className={s.item}>
                <div className={s.item_name}>SASS</div>
                <div className={s.item_border}>
                  <div className={s.skillImgSass} />
                </div>
              </div>
              <div className={s.item}>
                <div className={s.item_name}>Bootstrap</div>
                <div className={s.item_border}>
                  <div className={s.skillImgBootstrap} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={s.ctag}>/skills</div>
      </div>
    </Fade>
  );
}

export default Skills;
