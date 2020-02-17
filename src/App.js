import React from 'react';
import logo from './logo.svg';
import './App.css';
import LeftBox from './components/leftbox/LeftBox';
import Error404 from './Error404';
import Header from './components/Header';
import TweetList from './components/midbox/TweetList';
import NewTweetForm from './components/midbox/NewTweetForm';
import NewTweetControl from './components/midbox/NewTweetControl';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
    <div className="container">
        <Header/>
        <Switch>
        <Route exact path='/' component = {LeftBox}/>
        <Route exact path='/newtweet' component = {NewTweetForm}/>
        <Route component={Error404} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
