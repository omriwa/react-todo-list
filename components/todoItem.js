import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

let Component = React.Component;

class TodoItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			edit: false,
			itemTitle: props.title,
			itemDescription: props.description
		};
		//deleteHandlers binding
		this.onToggleEdit = this.onToggleEdit.bind(this);
		this.onEditItemInfo = this.onEditItemInfo.bind(this);
	}

	//edit the item field deleteHandler
	onToggleEdit() {
		let newState = this.state;
		newState.edit = !newState.edit;
		this.setState(newState);
	}
	//deleteHandler for changing the item info
	onEditItemInfo(event) {
		let newState = Object.assign({} , this.state);
		newState[event.target.name] = event.target.value;
		this.setState(newState);
	}

	render() {
		let itemId = this.props.itemId;
		let classes = 'todo-item col-md-6 col-md-offset-3';
		if(!this.state.edit)//show info item
			return (
				<div  className={classes}>
					<h3 onClick={this.onToggleEdit}>Title: {this.props.title}</h3>
					<p onClick={this.onToggleEdit}>Desicription: {this.props.description}</p>
					<button className="btn btn-danger col-md-8 col-md-offset-2" onClick={() => this.props.deleteHandler(itemId)}>Delete</button>
				</div>
			);
		else //edit item
			return (
				<div className="todo-item">
					<input onChange={this.onEditItemInfo} type="text" defaultValue={this.state.itemTitle} name='itemTitle'/>
					<input onChange={this.onEditItemInfo} type="text" defaultValue={this.state.itemDescription} name='itemDescription'/>
					<button className="btn btn-success col-md-8 col-md-offset-2"
					onClick={() => 
						{
							this.onToggleEdit();
							let itemInfo = {
								id: itemId,
								title: this.state.itemTitle,
								description: this.state.itemDescription
							};
							this.props.updateHandler(itemInfo);
						}
					}>Save!</button>
				</div>
			);
	}
}

function onDeleteItem(itemId) {
	return {
		type: 'DELETE_ITEM',
		payload: itemId
	}
}

function onUpdateItem(updateItem) {
	return {
		type: 'EDIT_ITEM',
		payload: updateItem
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{
			deleteHandler: onDeleteItem,
			updateHandler: onUpdateItem
		}
	,dispatch);
}

export default connect(null,mapDispatchToProps)(TodoItem);