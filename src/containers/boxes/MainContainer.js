import React, {Component} from 'react';
import {List} from '../list/List';
import styled from 'styled-components';


export class MainContainer extends Component{

	constructor(props){
		super(props);
		var dataJson = require('../../datasource/data.json');

		this.state = {
			data:dataJson
		}
	}

	render(){
		
		return (
			
			<div>
				<List data={this.state.data}/>
			</div>	
		);
	}
}