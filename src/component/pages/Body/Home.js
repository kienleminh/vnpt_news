import React from 'react'; 
import Header from 'component/pages/Header/Header';
import Footer from 'component/pages/Footer/Footer';
import Body from './BodyHome';
import 'component/css/Display.scss';


function Home() {
  return (
    <div className="Main">
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
}

export default Home;
