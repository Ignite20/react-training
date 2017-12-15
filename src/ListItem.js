import React,{Component} from 'react';

export class ListItem extends Component{

	render(){
		console.log(this.props.obj);
		return (
			<li>
				<h3>{this.props.obj.title}</h3>
				<p>{this.props.obj.description}</p>
				<img  src={this.props.obj.src} alt="" />
			</li>

		);
	}
}

