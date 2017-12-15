import React,{Component} from 'react';
import styled from 'styled-components';
import * as MyCompos from '../../styledcomponents/MyStyledComps';


export class ListItem extends Component{

	render(){
		return (
			<MyCompos.LiLi >
				<MyCompos.Img  src={this.props.obj.src} alt="" />
				<MyCompos.MDiv>
					<MyCompos.Title>{this.props.obj.title}</MyCompos.Title>
					<MyCompos.Pstyled>{this.props.obj.description}</MyCompos.Pstyled>
				</MyCompos.MDiv>
			</MyCompos.LiLi>

		);
	}
}

