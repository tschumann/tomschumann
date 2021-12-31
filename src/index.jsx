import React from 'react';
import ReactDOM from 'react-dom';

import Application from './components/application';

// TODO: get this from an API
const posts = [
	{
		'id': 1,
		'title': 'Show hidden files in Ubuntu',
		'time': '2021-12-31 09:21:00',
		'body': 'Ctrl+H in Files.'
	},
	{
		'id': 2,
		'title': 'Transferring files to and from an Android phone on Windows',
		'time': '2021-12-31 10:39:00',
		'body': 'On older versions of Android if you slide down the menu, File transfer will be selected by default but may not work unless you select Photo transfer (or some other option) then reselect File transfer. On newer versions of Android No data transfer will be selected by default but you can change to File transfer. The phone will then show up under My Computer/This PC in File Explorer.'
	},
	{
		'id': 3,
		'title': 'Counting lines of actual code in Visual Studio',
		'time': '2021-12-31 10:43:00',
		// the \\ is actually \ so copy what gets rendered, not what is here
		'body': 'Do a text search using the following regex: ^~(:Wh@//.+)~(:Wh@\\{:Wh@)~(:Wh@\\}:Wh@)~(:Wh@\\#).+'
	}
];

// TODO: get this from an API
const projects = [
	{
		'id': 1,
		'name': 'Sandbot',
		'body': 'Sandbot is a Half-Life engine multiplayer bot. It is based on <a href="http://hpb-bot.bots-united.com/hpb_bot.html" target="_blank">HPB bot</a> and has been updated with support for more games and mods and to compile with modern versions of Visual C++ and gcc. It is written in C and C++ for Windows and Linux.',
		'source_link': 'https://github.com/tschumann/sandbot'
	},
	{
		'id': 2,
		'name': 'ktext',
		'body': 'ktext is a .pdf manipulator. It exposes some of the functionality of <a href="https://itextpdf.com/en" target="_blank">iText</a> through a command line tool. It is written in Kotlin and Java.',
		'source_link': 'https://github.com/tschumann/sandbot'
	},
	{
		'id': 3,
		'name': 'tomschumann.com',
		'body': "tomschumann.com is this website. It has a bit of information about me and some projects I've worked on. It is written in Javascript using React.",
		'source_link': 'https://github.com/tschumann/tomschumann'
	}
];

ReactDOM.render(<Application projects={projects} posts={posts.reverse()}/>, document.getElementById('application'));

