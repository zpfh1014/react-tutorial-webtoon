import React, { Component } from 'react';
import { BroserRouter as Router, Route } from 'react-router-dom';
import './App.css';


import Main from './container/Main';
import WebtoonHone from './container/WebtoonHone';
import Viewer from './container/Viewer';

class App extends Component {
  render(){
    return(
      <Router>
        <div>
          <Router exact path="/" component={Main}/>
          <Router exact path="/webtoon/:webtoonId" component={WebtoonHone}/>
          <Router exact path="/viewer/:episodeId" component={Viewer}/>
        </div>
      </Router>
    )
  }
}

export default App;
