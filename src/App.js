import React, { Component } from 'react';
import logo from './tom-clancys-the-division-logo.png';
import './App.css';
import { MainContainer } from "./containers/boxes/MainContainer";
import {Menu} from './containers/menu/Menu';
import * as MyStyledComps from './styledcomponents/MyStyledComps';


class App extends Component {
  render() {
    return (
      <div className="App">
        <MyStyledComps.HeaderImage src={logo}  alt="logo" />
        <MyStyledComps.MenuDiv>
          <Menu />
        </MyStyledComps.MenuDiv>
        <MyStyledComps.BodyDiv>
          <MainContainer />
        </MyStyledComps.BodyDiv>
      </div>
    );
  }
}

export default App;
