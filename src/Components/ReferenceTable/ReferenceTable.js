import React from "react";
import "./ReferenceTable.css";

const ReferenceTable = ({ referenceText }) => {
	return (
		<div className="reference-table">
			<div className="reference-text">{referenceText}</div>
		</div>
	);
};

export default ReferenceTable;
