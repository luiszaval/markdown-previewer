const initConstants = () => {
	const IMAGES = `
Images

	![GitHub Logo](/images/logo.png)
	Format: ![Alt Text](url)`;

	const LINKS = `
Links
	
	http://github.com - automatic!
	[GitHub](http://github.com)`;

	const UNORDERED_LIST = `
Unordered List

	* Item 1
	* Item 2
		* Item 2a
		* Item 2b`;

	const HEADERS = `
Headers

	# This is an <h1> tag
	## This is an <h2> tag
	###### This is an <h6> tag`;

	const ORDERED_LIST = `
Ordered List 

	1. Item 1
	2. Item 2
	3. Item 3
		* Item 3a
		* Item 3b`;

	const EMPHASIS = `
Emphasis

	*This text will be italic*
	_This will also be italic_
	**This text will be bold**
	__This will also be bold__
	*You **can** combine them*`;

	const PLACEHOLDER = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
	return multiLineCode;
}
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
- Some are bulleted.
	- With different indentation levels.
		- That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

`;

	return {
		IMAGES,
		LINKS,
		UNORDERED_LIST,
		ORDERED_LIST,
		HEADERS,
		EMPHASIS,
		PLACEHOLDER,
	};
};

const constants = initConstants();

export default constants;
