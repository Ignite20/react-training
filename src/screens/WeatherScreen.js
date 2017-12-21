import React, { Component } from "react";
import { OpenWeatherAPI } from "../datasource/WeatherAPI";
import * as StyleComp from "../styledcomponents/MyStyledComps";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

export class WeatherScreen extends Component {
	constructor(props) {
		super(props);
		this.weather = new OpenWeatherAPI();

		this.state = {
			data: {}
		};
	}

	componentWillMount() {
		this.weather.gatherData("Malaga", "ES").then(response => {
			this.setState({ data: response });
			console.log(this.state.data);
		});
	}

	render() {
		if (this.state.data !== {} && this.state.data.main !== undefined) {
			console.log(this.state.data.main.temp);
			return (
				<div>
					<StyleComp.RowDiv>
						<h1>Temperatura Málaga: {this.state.data.main.temp}ºC</h1>
						<StyleComp.Icon
							src={this.weather.getIcon(this.state.data.weather[0].icon)}
							alt="fuck off obligatory alt"
						/>
					</StyleComp.RowDiv>
					<StyleComp.RowDiv>
						<StyleComp.ColumnDiv>
							<h2>Min: {this.state.data.main.temp_min}ºC </h2>
						</StyleComp.ColumnDiv>

						<StyleComp.ColumnDiv>
							<h2>Max: {this.state.data.main.temp_max}ºC </h2>
						</StyleComp.ColumnDiv>
					</StyleComp.RowDiv>
					<StyleComp.RowDiv>
						<h2>Presión: {this.state.data.main.pressure} bar</h2>
					</StyleComp.RowDiv>
					<StyleComp.RowDiv>
						<h2>Humedad: {this.state.data.main.humidity}%</h2>
					</StyleComp.RowDiv>
				</div>
			);
		} else {
			return <h1> </h1>;
		}

		//return <h1>{this.state.data.main.temp}</h1>;
	}
}
