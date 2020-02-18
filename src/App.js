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

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterTweetList: []
    };
    this.handleAddingNewTweetToList = this.handleAddingNewTweetToList.bind(this);
  }

  handleAddingNewTweetToList(newTweet){
   var newMasterTweetList = this.state.masterTweetList.slice();
   newMasterTweetList.push(newTweet);
   this.setState({masterTweetList: newMasterTweetList});
 }

  render(){
    return (
      <div className="App">
      <div className="container">
      <Header/>
      <Switch>
      <Route exact path='/' render={()=><TweetList tweetList={this.state.masterTweetList} />} />
      <Route path='/newtweet' render={()=><NewTweetControl onNewTweetCreation={this.handleAddingNewTweetToList} />} />
      <Route component={Error404} />
      </Switch>
      </div>
      </div>
    );
  }
}

export default App;
