import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Skills from './Skills';
import Projects from './Projects';
import Slogan from './Slogan';
import Contacts from './Contacts';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <div className='portfolio'>
        <Header />
        <Main />
        <Skills />
        <Projects />
        <Slogan />
        <Contacts />
        <Footer />
      </div>
    </div>
  );
}

export default App;
