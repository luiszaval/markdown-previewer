import React from 'react';
import './Editor.css'

const Editor = ({input, onChange})=>{
	return(
		<div>
			<textarea id="editor" value={input} onChange={onChange}/>
		</div>
		)
}

export default Editor;