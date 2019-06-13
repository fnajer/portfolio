import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import './index.css';
import App from './components/App';
import Jokes from './components/Jokes';
import Music from './components/Music/Music';
import Game from './components/Game/Game';
import Header from './components/Header';
import * as serviceWorker from './serviceWorker';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const RouterApp = () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/jokes" component={Jokes} />
      <Route path="/music" component={Music} />
      <Route path="/game" component={Game} />
      {/* <Route exact path="/" render={() => <Header><App /></Header>} /> */}
    </Switch>
  </Router>
);

ReactDOM.render(
  <Provider store={store}>
    <RouterApp />
  </Provider>, 
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

if (module.hot)
  module.hot.accept();