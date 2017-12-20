import React, { Component } from "react";
import logo from "./tom-clancys-the-division-logo.png";
import "./App.css";
import { Factions } from "./screens/Factions";
import { Menu } from "./containers/menu/Menu";
import * as MyStyledComps from "./styledcomponents/MyStyledComps";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomeScreen } from "./screens/Home";
import { WeaponsScreen } from "./screens/Weapons";
import { ArmorScreen } from "./screens/Armor";
import { FactionsInfo } from "./screens/FactionsInfo";
import { WeatherScreen } from "./screens/WeatherScreen";

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<MyStyledComps.HeaderImage src={logo} alt="logo" />
					<MyStyledComps.MenuDiv>
						<Menu />
					</MyStyledComps.MenuDiv>
					<MyStyledComps.BodyDiv>
						<Switch>
							<Route exact path="/" component={HomeScreen} />
							<Route exact path="/weapons" component={WeaponsScreen} />
							<Route exact path="/armor" component={ArmorScreen} />
							<Route exact path="/factions" component={Factions} />
							<Route exact path="/weather" component={WeatherScreen} />
							<Route
								exact
								path="/factions/:id"
								component={FactionsInfo}
								index={this.props.match}
							/>
						</Switch>
					</MyStyledComps.BodyDiv>
				</div>
			</Router>
		);
	}
}

export default App;
