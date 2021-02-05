import React, { Component } from "react";
import marked from "marked";
import "./Previewer.css";
import "../Toolbar2/Toolbar2";
import Toolbar2 from "../Toolbar2/Toolbar2";

class Previewer extends Component {
	getMarkdownText() {
		var rawMarkup = marked(this.props.input, {
			sanitize: true,
			breaks: true,
		});
		return { __html: rawMarkup };
	}
	render() {
		return (
			<div className="previewer">
				<Toolbar2 />
				<div
					dangerouslySetInnerHTML={this.getMarkdownText()}
					className="preview"
				/>
			</div>
		);
	}
}

export default Previewer;
