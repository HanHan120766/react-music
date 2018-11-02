import React, { Component } from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import './App.scss';
import Discover from './views/Discover/jsx/discover';
import VideoIndex from './views/VideoIndex/videoIndex';
import Tabbar from './components/Tabbar/tabbar';
import MusicIndex from './views/MusicIndex/musicIndex';
import Friends from './views/Friends/friends';
import User from './views/User/user';

class App extends Component {

  handleSubmit(e) {
    console.log('e', e)
  }
  render() {
    return (
      <div className="App">
        <Tabbar></Tabbar>
        <Switch>
          <Route path='/discover' component={Discover}/>
          <Route path='/video' component={VideoIndex}/>
          <Route path='/music' component={MusicIndex} />
          <Route path='/friends' component={Friends} />
          <Route path='/user' component={User} />
          
          <Redirect to='/discover'/>
        </Switch>
        
      </div>
    );
  }
}

export default App;
