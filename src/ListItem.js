import React,{Component} from 'react';

export class ListItem extends Component{

	render(){
		return (
			<li>{this.props.title}</li>
		);
	}
}
/*
ListItem.propTypes = {
	title:React.PropTypes.string.isRequired
};
*/