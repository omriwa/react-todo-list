import React from 'react';
import {createStore} from 'redux';
import Navapp from './navApp.js'
import TodoList from './todoList.js'
import {connect} from 'react-redux';


let Component = React.Component;

class App extends Component {
	render() {
		return (
			<div className={'container'} id="app">
			<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossOrigin="anonymous"/>
				<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossOrigin="anonymous"></script>
				<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous"/>
				{/*navbar*/}
				<Navapp title={'Todo list application'} numOfItems={this.props.itemList.length}/>
				{/*list*/}
				<TodoList itemList={this.props.itemList}/>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {itemList: state.itemList};
}

export default connect(mapStateToProps)(App);