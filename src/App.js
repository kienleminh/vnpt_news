import React from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import Body from './component/Body';
import './component/css/Display.scss';


function App() {
  return (
    <div className="Main">
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
}

export default App;
