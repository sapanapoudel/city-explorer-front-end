import React from 'react';
import Search from './Search';
import Map from './Map';
import Result from './Result';

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

export default Main;