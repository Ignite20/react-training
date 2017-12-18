import React, { Component } from "react";
import * as MyStyledComps from "../../styledcomponents/MyStyledComps";

export class MenuItem extends Component {
	render() {
		console.log(this.props.obj.href);
		return (
			<MyStyledComps.SimpleLi>
				<MyStyledComps.MenuLink to={this.props.obj.href}>
					{this.props.obj.title}
				</MyStyledComps.MenuLink>
			</MyStyledComps.SimpleLi>
		);
	}
}
