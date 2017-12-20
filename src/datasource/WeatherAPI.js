const API_KEY = "e6740d0e05cdf5f4d2f9b8a09942539e";
const BASE_SERVER = "https://api.openweathermap.org/data/2.5/weather?q=";
const ICON_LINK = "https://openweathermap.org/img/w/";
export class OpenWeatherAPI {
	constructor() {
		this.data = {};
	}

	get getData() {
		return this.data;
	}

	getIcon(iconName) {
		return ICON_LINK + iconName + ".png";
	}

	async gatherData(city, country) {
		const apiUrl =
			BASE_SERVER +
			city +
			"," +
			country +
			"&units=metric" +
			"&appid=" +
			API_KEY;
		console.log(apiUrl);

		const response = await fetch(apiUrl);
		const responseJson = await response.json();

		return responseJson;
	}
}

/**
 * 
			response.then(responseJson => {
				console.log(responseJson.body);
				return responseJson.body;
			});
 */
