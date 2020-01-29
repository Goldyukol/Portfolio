import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';
import Particles from 'react-particles-js';

const particlesOpt = {
  'particles': {
    'number': {
      'value': 80,
      'density': {
        'enable': true,
        'value_area': 800
      }
    }
  },
  'interactivity': {
    'onhover': {
      'mode': 'repulse'
    }
  }
}

const App = () => {
  return (
    <div className='App'>
      <Particles className={'particles'} params={particlesOpt} />
      <Header />
      <Main />
      <Skills />
      <Projects />
      <About />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
