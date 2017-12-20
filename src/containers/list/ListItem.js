import React, { Component } from "react";
import * as MyCompos from "../../styledcomponents/MyStyledComps";

export class ListItem extends Component {
	constructor(props) {
		super(props);

		this.onClickHandle = this.onClickHandle.bind(this);
	}

	onClickHandle(e, key) {
		console.log(key);
	}

	render() {
		return (
			<MyCompos.LiLi
				onClick={() => this.onClickHandle(this, this.props.obj.index)}
			>
				<MyCompos.MDiv>
					<MyCompos.Title>{this.props.obj.title}</MyCompos.Title>
					<MyCompos.Pstyled>{this.props.obj.description}</MyCompos.Pstyled>
				</MyCompos.MDiv>
				<MyCompos.Img src={this.props.obj.src} alt="" />
			</MyCompos.LiLi>
		);
	}
}
