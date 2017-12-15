import React, {Component} from 'react';
import {List} from './List';


export class MainContainer extends Component{

	constructor(props){
		super(props);
		var dataJson = require('./datasource/data.json');
		console.log(dataJson);

		this.state = {
			data:dataJson
		}

		
		//console.log(this.state.data);
		
	}

	

	componentWillMount(){
		//this.setState({data:dataJson});
	}

	render(){
		
		//console.log(items);
		return (
			
			<div>
				<h1>This is the main container</h1>
				<List data={this.state.data}/>
			</div>	
		);
	}
}