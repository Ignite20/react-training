import React, {Component} from 'react';
import {List} from './List';


export class MainContainer extends Component{
	render(){
		const items = new Array(5).fill(2);
		console.log(items);
		return (
			
			<div>
				<h1>This is the main container</h1>
				<List data={items}/>
			</div>	
		);
	}
}