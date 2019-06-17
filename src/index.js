import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import './index.css';
import PubSub, { PubSubContext } from './pubsub';
import App from './components/App';
import Jokes from './components/Jokes';
import Music from './components/Music/Music';
import Game from './components/Game/Game';
import Chat from './components/Chat/Chat';
import Header from './components/Header';
import * as serviceWorker from './serviceWorker';
import { sendMessage } from "./actions/messages";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(
  applyMiddleware(thunk)
);

const store = createStore(rootReducer, enhancer);
store.subscribe(() => console.log(store.getState()));

const pubsub = new PubSub();

pubsub.addListener({
  message: messageObject => {
    const { message, channel } = messageObject;
  
    console.log('message', message, 'channel:', channel);
  
    store.dispatch(message);
  }
});
setTimeout(() => { pubsub.publish(sendMessage("hello")) }, 500);

const RouterApp = () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/jokes" component={Jokes} />
      <Route path="/music" component={Music} />
      <Route path="/game" component={Game} />
      <Route path="/chat" component={Chat} />
      {/* <Route exact path="/" render={() => <Header><App /></Header>} /> */}
    </Switch>
  </Router>
);

ReactDOM.render(
  <Provider store={store}>
    <PubSubContext.Provider value={pubsub}>
      <RouterApp />
    </PubSubContext.Provider>
  </Provider>, 
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

if (module.hot)
  module.hot.accept();