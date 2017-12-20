import React, { Component } from "react";
import { ListItem } from "./ListItem";
import * as MyStyledComps from "../../styledcomponents/MyStyledComps";

export class List extends Component {
	constructor(props) {
		super(props);
		if (props.data) {
			const mArray = this.props.data.data;

			const custom = mArray.map((obj, index) => {
				return (
					<MyStyledComps.MenuLink to={"/factions/" + obj.index}>
						<ListItem key={index} obj={obj} />
					</MyStyledComps.MenuLink>
				);
			});

			this.state = {
				data: custom
			};
		}
	}

	render() {
		return <MyStyledComps.UlStyled>{this.state.data}</MyStyledComps.UlStyled>;
	}
}
