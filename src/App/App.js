import React, { useEffect, useState } from "react";
import "./App.css";

import Editor from "../Components/Editor/Editor.js";
import Previewer from "../Components/Previewer/Previewer.js";
import ReferenceTable from "../Components/ReferenceTable/ReferenceTable.js";

import constants from "../constants.js";

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
				<div className="container">
					<div className="header">
						<h1>Editor</h1>
					</div>
					<Editor input={input} updateInput={updateInput} />
				</div>
				<div className="container">
					<div className="header">
						<h1>Previewer</h1>
					</div>
					<Previewer raw_text={input} />
				</div>
			</div>
		</div>
	);
};

export default App;
