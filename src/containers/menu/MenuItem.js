import React, { Component } from 'react';
import * as MyStyledComps from '../../styledcomponents/MyStyledComps';



export class MenuItem extends Component{
	render(){
		return (
			<MyStyledComps.SimpleLi>
				<MyStyledComps.MenuLink href={this.props.obj.href}>{this.props.obj.title}</MyStyledComps.MenuLink>
			</MyStyledComps.SimpleLi>
			
		);
	}
}