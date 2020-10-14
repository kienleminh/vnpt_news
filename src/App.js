import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HOME_PAGE } from 'component/routes';
// import {Provider} from 'react-redux';
import {Footer} from 'component/pages/Footer/Footer';
import {Header} from 'component/pages/Header/Header';
import Home from 'component/pages/Body/Home';


function App() {
  return (
    <div>
      <Home></Home>
    </div>
  );
}

export default App;
