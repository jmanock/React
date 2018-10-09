import React, { Component } from 'react';
import './App.css';
import Posts from './Components/posts';
import PostForm from './Components/postForm';
import {Provider} from 'react-redux';
import store from './Store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <PostForm />
          <hr />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
