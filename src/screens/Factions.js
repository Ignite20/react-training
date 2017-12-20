import React, { Component } from "react";
import { List } from "../containers/list/List";

export class Factions extends Component {
	constructor(props) {
		super(props);
		var dataJson = require("../datasource/data.json");

		this.state = {
			data: dataJson
		};
	}

	render() {
		return (
			<div>
				<List data={this.state.data} />
			</div>
		);
	}
}
