import React from "react";
import "./ReferenceTable.css";
import marked from "marked";

import constants from "../../constants.js";

const ReferenceTable = ({ referenceText }) => {
	const {
		HEADERS,
		UNORDERED_LIST,
		ORDERED_LIST,
		EMPHASIS,
		IMAGES,
		LINKS,
	} = constants;

	const getMarkdownText = (text) => {
		var rawMarkup = marked(text, {
			sanitize: true,
			breaks: true,
		});
		return { __html: rawMarkup };
	};

	return (
		<div className="reference-table">
			<div
				className="section"
				dangerouslySetInnerHTML={getMarkdownText(HEADERS)}
			/>
			<div
				className="section"
				dangerouslySetInnerHTML={getMarkdownText(UNORDERED_LIST)}
			/>
			<div
				className="section"
				dangerouslySetInnerHTML={getMarkdownText(ORDERED_LIST)}
			/>
			<div
				className="section"
				dangerouslySetInnerHTML={getMarkdownText(EMPHASIS)}
			/>
			<div
				className="section"
				dangerouslySetInnerHTML={getMarkdownText(IMAGES)}
			/>
			<div
				className="section"
				dangerouslySetInnerHTML={getMarkdownText(LINKS)}
			/>
		</div>
	);
};

export default ReferenceTable;
