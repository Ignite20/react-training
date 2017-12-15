import React,{Component} from 'react';
import {ListItem} from './ListItem';



export class List extends Component{
	

	constructor(props){
		super(props);
		this.state = {data:[]};
		console.log(this.props.data);
		
		
	}

	render(){
		const customList = this.props.data.map((value, index) => {
			return <ListItem value={value} key={index} title={value * index} />
		});
		return (
			<ul>
				{customList}
			</ul>
		);
	}
}