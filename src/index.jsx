import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

import Application from './components/application';

// TODO: get this from an API
const posts = [
	{
		'id': 1,
		'title': 'Show hidden files in Ubuntu',
		'body': 'Ctrl+H in Files',
		'time': '2021-12-31 09:21:00'
	}
];

const projects = [
	{
		'id': 1,
		'title': 'Sandbot',
		'body': 'Sandbot is a Half-Life engine multiplayer bot. It is written in C and C++ and is based on HPB bot.',
		'link': 'https://github.com/tschumann/sandbot'
	}
];

ReactDOM.render(<Application posts={posts} projects={projects}/>, document.getElementById('application'));

