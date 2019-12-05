import React from 'react';
import SearchAppBar from '../header/index';
import MainCard from '../mainCard/index';
import InfoParent from '../infoParent/index';
import './App.css';

function AppFirstPage() {
  return (
    <div className="App">
      <header>
        <SearchAppBar />
        <MainCard/>
        <InfoParent />
      </header>
    </div>
  );
}

export default AppFirstPage;
