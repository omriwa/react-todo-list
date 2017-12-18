import React from 'react';
import TodoItem from './todoItem.js'
import {connect} from 'react-redux';

let Component = React.Component;

class TodoList extends Component {


	renderItemList() {
		return this.props.itemList.map((item,index) => {
			return <TodoItem itemId={index}  key={index} title={item.title} description={item.description} />
		});
	}

	render() {
		return (
			<div className={'col-md-8 col-md-offset-2'} id="todo-list">
				{this.renderItemList()}
			</div>
		);
	}
}

export default TodoList;