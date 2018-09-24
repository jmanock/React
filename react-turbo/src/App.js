import React, {Component} from 'react';
import MessageList from './components/MessageList';
import Header from './components/Header';
import ChannelList from './components/ChannelList';
import MessageBox from './components/MessageBox';
import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyC2iLhScItDrLrsfR2e1d9aVtVM3lYv5UI",
    authDomain: "testingreact-b89ec.firebaseapp.com",
    databaseURL: "https://testingreact-b89ec.firebaseio.com",
    projectId: "testingreact-b89ec",
    storageBucket: "testingreact-b89ec.appspot.com",
    messagingSenderId: "534927507787"
  };
  firebase.initializeApp(config);

class App extends Component{
  render(){
    return(
      <div className='container'>
        <Header title='Simple Firebase App'/>
        <div className='columns'>
          <div className='column is-3'></div>
          <div className='column is-6'>
            <MessageList db={firebase} />
          </div>
        </div>
        <div className='columns'>
          <div className='column is-3'></div>
          <div className='column is-6'>
            <MessageBox db={firebase} />
          </div>
        </div>
      </div>
    );
  }
}

export default App
