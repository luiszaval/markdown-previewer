import React from "react";
import "./Editor.css";
import "../Toolbar1/Toolbar1";
import Toolbar1 from "../Toolbar1/Toolbar1";

const Editor = ({ input, updateInput }) => {
	const handleChange = (e) => updateInput(e.target.value);

	return (
		<div className="editor">
			<Toolbar1 />
			<textarea
				value={input}
				onChange={handleChange}
				className="editor-textarea"
			/>
		</div>
	);
};

export default Editor;
