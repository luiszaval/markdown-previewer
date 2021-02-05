import React from "react";
import "./ReferenceTable.css";

const ReferenceTable = ({ input, onChange }) => {
	return (
		<div className="reference-table">
			<textarea
				className="reference-table-editor"
				value={input}
				onChange={onChange}
			/>
		</div>
	);
};

export default ReferenceTable;
