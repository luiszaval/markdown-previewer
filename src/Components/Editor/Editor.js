import React from "react";
import "./Editor.css";

const Editor = ({ input, updateInput }) => {
	const handleChange = (e) => updateInput(e.target.value);

	return (
		<div className="editor">
			<textarea
				value={input}
				onChange={handleChange}
				className="editor-textarea"
			/>
		</div>
	);
};

export default Editor;
