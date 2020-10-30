import React, {Suspense} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HOME_PAGE } from 'component/routes';
// import {Provider} from 'react-redux';
import { Footer } from 'component/pages';
import Header from 'component/pages/Header/Header';
import MainPage from 'component/pages/Body/MainPage';
import {Spinner} from 'react-bootstrap';


const App = () => {
  return (
    <Router>
      <div>
        <Header/>
        <Switch>
        <Suspense fallback={<Spinner/>}>
          <Route path={HOME_PAGE} component={MainPage}/>

        </Suspense>
        </Switch>
        <Footer/>
      </div>
    </Router>
  )
}

export default App;