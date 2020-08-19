import React, { Component } from 'react';
import {connect} from 'react-redux';
import Toolbar1 from '../Toolbar1/Toolbar1.js';
import Editor from '../Editor/Editor.js';
import Toolbar2 from '../Toolbar2/Toolbar2.js';
import Previewer from '../Previewer/Previewer.js';

import {changeInput} from './actions.js'

const mapStateToProps = (state)=>({
	input: state.input
});
const mapDispatchToProps = (dispatch) =>({
	onChangeInput: (event) =>dispatch(changeInput(event.target.value)) 
});


class App extends Component{
	render(){
		const {input, onChangeInput} = this.props
		return (
			<div>
				<Toolbar1 />
				<Editor 
				input={input} 
				onChange={onChangeInput}
				/>
				<Toolbar2 />
				<Previewer input={input}/>
			</div>
			)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

