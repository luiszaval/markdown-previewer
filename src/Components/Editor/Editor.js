import React from "react";
import "./Editor.css";
import "../Toolbar1/Toolbar1";
import Toolbar1 from "../Toolbar1/Toolbar1";

const Editor = ({ input, onChange }) => {
	return (
		<div className="editor">
			<Toolbar1 />
			<textarea
				value={input}
				onChange={onChange}
				className="editor-textarea"
			/>
		</div>
	);
};

export default Editor;
