import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.css";

import Editor from "../Editor/Editor.js";
import Previewer from "../Previewer/Previewer.js";
import ReferenceTable from "../ReferenceTable/ReferenceTable.js";

import { changeInput } from "./actions.js";

const mapStateToProps = (state) => ({
	input: state.input,
});
const mapDispatchToProps = (dispatch) => ({
	onChangeInput: (event) => dispatch(changeInput(event.target.value)),
});

class App extends Component {
	render() {
		const { input, onChangeInput } = this.props;
		return (
			<div className="app-wrapper">
				<ReferenceTable />
				<div className="editable">
					<Editor input={input} onChange={onChangeInput} />
					<Previewer input={input} />
				</div>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
