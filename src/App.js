import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import './App.scss';
import Discover from './views/Discover/discover';
import VideoIndex from './views/VideoIndex/videoIndex';
import Tabbar from './components/Tabbar/tabbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Tabbar></Tabbar>
        <Route path='/' exact component={Discover}/>
        <Route path='/video' component={VideoIndex}/>

      </div>
    );
  }
}

export default App;
