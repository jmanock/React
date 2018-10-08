import React, { Component } from 'react';
import './App.css';
import Posts from './Components/posts';
import PostForm from './Components/postForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PostForm />
        <hr />
        <Posts />
      </div>
    );
  }
}

export default App;
