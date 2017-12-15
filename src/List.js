import React,{Component} from 'react';
import {ListItem} from './ListItem';

export class List extends Component{
	

	constructor(props){
		super(props);
		
		const mArray = new Array(this.props.data.data);
		console.log(mArray);	

		const custom = mArray[0].map((obj,index) => {
			//console.log(obj.src);
			return <ListItem key={index} obj={obj} />
		});

		this.state = {
			data:custom
		}
	}

	componentWillMount(){
		
		//const custom = this.mArray.map((object, index) => {
			//
		//});
		
	}

	render(){
		console.log(this.state.data);
		return (
			<ul>
				{this.state.data}
			</ul>
		);
	}
}