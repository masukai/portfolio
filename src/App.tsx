import React from 'react'
import Navbar from './components/Navbar'
import MyAvatar from './components/MyAvatar'
import About from './components/About'
import Achievements from './components/Achievements'
import History from './components/History'
import ScrollUp from './utils/ScrollUp'

const App: React.FC = () => {
  return (
    <>
      <section>
        <Navbar />
      </section>
      <section>
        <MyAvatar />
      </section>
      <section id='about'>
        <About />
      </section>
      <section id='achievements'>
        <Achievements />
      </section>
      <section id='history'>
        <History />
      </section>
      <ScrollUp />
      <div id="copyright">
        <small>&nbsp;&nbsp;&nbsp;&copy; 2022 KAITO MASUDA. All Rights Reserved.<br />　</small>
      </div>
    </>
  );
}

export default App;
