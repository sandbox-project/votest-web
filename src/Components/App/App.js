import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import Main from '../../Pages/Main/Main';
import GetPoll from '../../Pages/GetPoll/GetPoll';
import CreatePoll from '../../Pages/CreatePoll/CreatePoll';
import ViewPoll from '../../Pages/ViewPoll/ViewPoll';
import NotFound from '../../Pages/NotFound/NotFound';
import Admin from '../../Pages/Admin/Admin'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/getpoll" component={GetPoll} />
          <Route exact path="/createpoll" component={CreatePoll} />
          <Route exact path="/viewpoll" component={ViewPoll} />
          <Route exact path="/admin" component={Admin} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    );

  }
}

export default App;
