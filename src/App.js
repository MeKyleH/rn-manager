import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCPFfJ0YsKyN2AnajWmcLd2cr0upt9DeYY',
      authDomain: 'manager-50591.firebaseapp.com',
      databaseURL: 'https://manager-50591.firebaseio.com',
      projectId: 'manager-50591',
      storageBucket: '',
      messagingSenderId: '25668099442'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
