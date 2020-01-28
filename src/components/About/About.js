import React from 'react';
import s from './About.module.sass';
import Button from '../Common/Button/Button';
import Fade from 'react-reveal/Fade';

const About = () => {


  return (
    <div className={s.about} id='about'>
      <Fade clear>
        <div className={s.aboutOpenTag}>about</div>
        <div className={s.container}>
          <div className={s.block}>
            <p className={s.about_description}>I have a solid theoretical base, worked with JavaScript, HTML, CSS, React, Redux, SASS, Bootstrap, REST API.
             I practice various tasks on projects, I am also familiar with TypeScript, Node JS and MongoDB.
              I have a great desire develop, learn new technologies and develop comprehensively as a front-end developer.
              I try to constantly move for technology and be in trend. English at the level of reading documentation and technical literature.
              I like to work in a team, I easily find a common language with people, I always do my job to the end.</p>
            <Button title='Summary' href='https://sites.google.com/view/goldyukol/%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F' />
            <div>
            </div>
          </div>
        </div>
        <div className={s.aboutCloseTag}>/about</div>
      </Fade>
    </div>
  );
}

export default About;
