import React from 'react';
import Header from './component/Header';
import Main from './component/Main';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Main />
      </React.Fragment>
    )
  }
}

export default App;