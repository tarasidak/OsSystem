import React, { Component } from 'react';
import ButtonAppBar  from './components/Header';
import MiniDrawer from './components/Drawer';

export default class App extends Component {
  render() {
    return (
      <div>
        <ButtonAppBar />
        <MiniDrawer />
      </div>
    )
  }
}
