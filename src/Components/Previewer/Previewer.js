import React, { Component } from "react";
import marked from "marked";
import "./Previewer.css";
import "../Toolbar2/Toolbar2";
import Toolbar2 from "../Toolbar2/Toolbar2";

const Previewer = ({ raw_text }) => {
	const getMarkdownText = (text) => {
		var rawMarkup = marked(text, {
			sanitize: true,
			breaks: true,
		});
		return { __html: rawMarkup };
	};

	return (
		<div className="previewer">
			<Toolbar2 />
			<div
				dangerouslySetInnerHTML={
					raw_text ? getMarkdownText(raw_text) : { __html: "" }
				}
				className="preview"
			/>
		</div>
	);
};

export default Previewer;
