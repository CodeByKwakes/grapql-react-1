import React from 'react';
import ReactDOM from 'react-dom';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {queryReducer} from './app/reducers/reducer'
import thunkMiddleware from 'redux-thunk'

const Main = React.createClass({
  render: () => {
    return (
      <div>
        <p>hello react!</p>
      </div>
    )
  }
});

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware
)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(queryReducer)}>
    <Main />
  </Provider>,
  document.getElementById("example")
);