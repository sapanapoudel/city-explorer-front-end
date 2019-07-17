import React from 'react';
import Header from './component/Header';
import Search from './component/Search';
import Map from './component/Map';
import Result from './component/Result';
import logo from './logo.svg';
import './App.css';

//Main
class Main extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Search />
        <Map />
        <Result />
      </React.Fragment>

    );
  }
}

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