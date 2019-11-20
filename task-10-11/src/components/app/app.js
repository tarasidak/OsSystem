import React from 'react';

import Header from '../header';
import Todos from '../todos';
import Posts from '../posts';

import './app.css';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Switch>
          <Route exact path="/" component={Header} />
          <Route path="/todos" component={Todos}/>
          <Route path="/posts" component={Posts}/>
          {/* <Route path="/profile" component={Profile}/> */}
      </Switch>
    </Router>
  );
};

export default App;