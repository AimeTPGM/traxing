/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import UnderDevelopment from './components/UnderDevelopment';
import MainPage from './pages/MainPage';
import SummaryPage from './pages/SummaryPage';

class App extends Component {
  render() {
    return (
      <div>
        <HashRouter basename={process.env.PUBLIC_URL}>
          <Route exact path='/' component={MainPage} />
          <Route exact path='/summary' component={SummaryPage} />
        </HashRouter>
      </div>
    );
  }
}

export default App;
