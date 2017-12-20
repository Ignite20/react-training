import React, { Component } from "react";
import { OpenWeatherAPI } from "../datasource/WeatherAPI";

export class WeatherScreen extends Component {
	constructor(props) {
		super(props);
		this.weather = new OpenWeatherAPI();

		this.state = {
			data: {}
		};
	}

	componentWillMount() {
		var dataJson = this.weather.gatherData("Malaga", "ES").then(response => {
			this.setState({ data: response });
			console.log(this.state.data);
		});
	}

	render() {
		if (this.state.data != {} && this.state.data.main != undefined) {
			console.log(this.state.data.main.temp);
			return (
				<div>
					<h1>Temperatura Málaga: {this.state.data.main.temp}ºC</h1>
					<img src={this.weather.getIcon(this.state.data.weather[0].icon)} />
				</div>
			);
		} else {
			return <h1> </h1>;
		}

		//return <h1>{this.state.data.main.temp}</h1>;
	}
}
