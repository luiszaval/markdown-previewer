import React, {Component} from 'react';
import marked from 'marked';
import './Previewer.css'


class Previewer extends Component{
	getMarkdownText() {
    var rawMarkup = marked(this.props.input, {sanitize: true, breaks:true});
    return { __html: rawMarkup };
  }
  render() {
    return (
    	<div 
    	dangerouslySetInnerHTML={this.getMarkdownText()} 
    	id="preview"
    	/>
    )
  }
}

export default Previewer;


 