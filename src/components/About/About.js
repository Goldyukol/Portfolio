import React from 'react';
import s from './About.module.sass';
import Button from '../Common/Button/Button';
import Fade from 'react-reveal/Fade';

const About = () => {
  return (
    <div className={s.about} id='about'>
      <Fade clear>
        <div className={s.otag}>about</div>
        <div className={s.about_container}>
          <div className={s.about_block}>
            <p className={s.about_description}>I have a solid theoretical base and a working experience with JavaScript, HTML, CSS, React, Redux, SASS, Bootstrap, REST API.
            During my project work I practice various tasks , I am also familiar with TypeScript, Node JS and MongoDB.
             I have a great desire to develop, to learn new technologies and work comprehensively as a front-end developer.
             I speak English at the level of reading technical documentation.
             I like to work in a team, because I am communicative and a very sociable person, that has not only communicative skills but also a serious attitude to the work I do.</p>
            <Button title='Summary' href='https://sites.google.com/view/goldyukol/%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F' />
            <div>
            </div>
          </div>
        </div>
        <div className={s.ctag}>/about</div>
      </Fade>
    </div>
  );
}

export default About;
