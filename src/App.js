import React, { Component } from "react";
import logo from "./tom-clancys-the-division-logo.png";
import "./App.css";
import { MainContainer } from "./containers/boxes/MainContainer";
import { Menu } from "./containers/menu/Menu";
import * as MyStyledComps from "./styledcomponents/MyStyledComps";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { HomeScreen } from "./screens/Home";
import { WeaponsScreen } from "./screens/Weapons";
import { ArmorScreen } from "./screens/Armor";

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<MyStyledComps.HeaderImage src={logo} alt="logo" />
					<MyStyledComps.MenuDiv>
						<Menu />
					</MyStyledComps.MenuDiv>
					<Switch style={{ marginLeft: "200px" }}>
						<Route exact path="/" component={HomeScreen} />
						<Route exact path="/weapons" component={WeaponsScreen} />
						<Route exact path="/armor" component={ArmorScreen} />
						<Route exact path="/factions" component={MainContainer} />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
