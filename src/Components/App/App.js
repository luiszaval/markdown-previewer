import React, { useEffect, useState } from "react";
import "./App.css";

import Editor from "../Editor/Editor.js";
import Previewer from "../Previewer/Previewer.js";
import ReferenceTable from "../ReferenceTable/ReferenceTable.js";

import constants from "./constants.js";

const App = () => {
	const [input, updateInput] = useState("");
	const { PLACEHOLDER } = constants;

	useEffect(() => {
		updateInput(PLACEHOLDER);
	}, []);
	return (
		<div className="app-wrapper">
			<ReferenceTable />
			<div className="editable">
				<Editor input={input} updateInput={updateInput} />
				<Previewer raw_text={input} />
			</div>
		</div>
	);
};

export default App;
