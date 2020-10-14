import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HOME_PAGE } from 'component/routes';
// import {Provider} from 'react-redux';
import { Footer } from 'component/pages';
import Header from 'component/pages/Header/Header';
import MainPage from 'component/pages/Body/MainPage';


const App = () => {
  return (
    <Router>
      <div>
        <Header/>
        <Switch>
          <Route path={HOME_PAGE} component={MainPage}/>
        </Switch>
        <Footer/>
      </div>
    </Router>
  )
}

export default App;