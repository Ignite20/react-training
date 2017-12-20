import React, { Component } from "react";
import { MenuItem } from "./MenuItem";
import * as MyStyledComps from "../../styledcomponents/MyStyledComps";
import { Link } from "react-router-dom";

export class Menu extends Component {
	constructor(props) {
		super(props);
		var dataJson = require("../../datasource/menu.json");
		const img = dataJson.img;
		const items = dataJson.data.map((obj, index) => {
			return <MenuItem key={index} obj={obj} />;
		});

		this.state = {
			data: items,
			headerImage: img
		};
	}

	render() {
		return (
			<div>
				<Link to="/">
					<MyStyledComps.MenuHeaderImage src={this.state.headerImage} />
				</Link>
				<MyStyledComps.UlStyled>{this.state.data}</MyStyledComps.UlStyled>
			</div>
		);
	}
}
