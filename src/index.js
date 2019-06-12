import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';
import App from './components/App';
import Jokes from './components/Jokes';
import Music from './components/Music';
import Header from './components/Header';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
    <Header />
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/jokes" component={Jokes} />
      <Route path="/music" component={Music} />
      {/* <Route exact path="/" render={() => <Header><App /></Header>} /> */}
    </Switch>
  </Router>, 
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

if (module.hot)
  module.hot.accept();