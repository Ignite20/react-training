import React, { Component } from "react";
import * as StyledComps from "../styledcomponents/MyStyledComps";

export class FactionsInfo extends Component {
	constructor(props) {
		super(props);

		let contentId = this.props.match.params.id;

		var data = require("../datasource/detailsdata.json")[contentId];
		this.state = {
			data: data
		};
		console.log(data.crews.content);
	}

	render() {
		return (
			<StyledComps.FlexDiv>
				<StyledComps.Header1>{this.state.data.title}</StyledComps.Header1>
				<StyledComps.Image src={this.state.data.img} />
				<StyledComps.Pstyled>{this.state.data.quote}</StyledComps.Pstyled>
				<br />
				<StyledComps.Pstyled>{this.state.data.content}</StyledComps.Pstyled>
				<br />
				<StyledComps.Pstyled>{this.state.data.crews.title}</StyledComps.Pstyled>
				<StyledComps.UlStyled>
					{this.state.data.crews.content.map((obj, index) => {
						return <StyledComps.LiLi key={index}>{obj}</StyledComps.LiLi>;
					})}
				</StyledComps.UlStyled>
				<br />
				<StyledComps.Pstyled>
					{this.state.data.tactics.title}
				</StyledComps.Pstyled>
				<StyledComps.UlStyled>
					{this.state.data.tactics.content}
				</StyledComps.UlStyled>
			</StyledComps.FlexDiv>
		);
	}
}
