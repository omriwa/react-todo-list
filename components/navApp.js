import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

let Component = React.Component;

class NavApp extends Component {
	render() {
		return (
			<div className={'col-md-8 col-md-offset-2'} id="nav">
				<h3>{this.props.title}</h3>
				<h3> number of items: {this.props.numOfItems}</h3>
				<div id='nav-btns'>
					<button className="btn btn-warning" onClick={() => this.props.clearList()}>Clear List <span className="fa fa-trash-o"></span></button>
					<button className="btn btn-primary" onClick={() => this.props.addNewItem()}>Add item <span className="fa fa-plus-square-o"></span></button>
				</div>
			</div>
		);
	}
}

function addNewItem() {
	return {
		type: 'ADD_ITEM',
		payload: {
			title: '',
			description: ''
		}
	}
}

function clearList() {
	return {
		type: 'CLEAR_LIST',
		payload: []
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{
			addNewItem: addNewItem,
			clearList: clearList
		},dispatch);
}

export default connect(null,mapDispatchToProps)(NavApp);