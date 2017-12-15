import React, {Component} from 'react';
import bootstrap from 'react-bootstrap';
import {MenuItem} from './MenuItem';
import {List} from '../list/List';
import * as MyStyledComps from '../../styledcomponents/MyStyledComps';

export class Menu extends Component{

	constructor(props){
		super(props);
		var dataJson = require('../../datasource/menu.json');
		console.log(dataJson);
		const img = dataJson.img;
		console.log(img);
		const items = dataJson.data.map((obj,index) => {
			return <MenuItem obj={obj} />
		});

		this.state = {
			data:items,
			headerImage:img
		}
	}

	render(){
		
		return (
			<div>
				<MyStyledComps.HeaderImage src={this.state.headerImage} />
				<MyStyledComps.UlStyled>
					{this.state.data}
				</MyStyledComps.UlStyled>
			</div>
			
		);
	}
} 