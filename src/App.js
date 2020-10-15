import React from 'react';
import Header from './Header'
import Slider from './Slider';
import './App.css';
import { Menu } from '@material-ui/core';
import OurMenu from './OurMenu';

function App() {
  return (
    <div className="app">
      <Header/>
      <Slider/>
      <OurMenu/>
    </div>
  );
}

export default App;
