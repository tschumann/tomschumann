import React from 'react';
import { createRoot } from 'react-dom/client';

import Application from './components/application';

// TODO: get this from an API
const projects = [
	{
		'id': 1,
		'name': 'Sandbot',
		'body': 'Sandbot is a Half-Life engine multiplayer bot. It is based on <a href="http://hpb-bot.bots-united.com/hpb_bot.html" target="_blank">HPB bot</a> and has been updated with support for more games and mods; support for modern versions of Visual C++ and gcc and tests. It is written in C and C++ for Windows and Linux.',
		'source_link': 'https://github.com/tschumann/sandbot',
		'language': 'cpp'
	},
	{
		'id': 2,
		'name': 'sandbot-wptgen',
		'body': 'sandbot-wptgen is a Sandbot waypoint generator. It is based on <a href="http://hpb-bot.bots-united.com/bsp_tool.html" target="_blank">BSP_tool</a> and has been updated with support for modern versions of Visual C++ and gcc, 64-bit support, unit tests and with support for more games and mods. It is written in C and C++ for Windows and Linux.',
		'source_link': 'https://github.com/tschumann/sandbot-wptgen',
		'language': 'cpp'
	},
	{
		'id': 3,
		'name': 'ktext',
		'body': 'ktext is a .pdf manipulator. It exposes some of the functionality of <a href="https://itextpdf.com/en" target="_blank">iText</a> through a command line tool. It is written in Kotlin and Java.',
		'source_link': 'https://github.com/tschumann/ktext',
		'language': 'kt'
	},
	{
		'id': 4,
		'name': 'sish',
		'body': 'sish is an Australian share trading simulator. It is written in C#.',
		'source_link': 'https://github.com/tschumann/sish',
		'language': 'cs'
	},
	{
		'id': 5,
		'name': 'scrape',
		'body': 'scrape a website downloader. It recursively downloads all linked pages of a website. It is written in Python.',
		'source_link': 'https://github.com/tschumann/scrape',
		'language': 'py'
	},
	{
		'id': 6,
		'name': 'Capitle',
		'body': 'Capitle is <a href="http://capitle.tomschumann.com/" target="_blank">a capital city guessing game</a>. It is written in pure Javascript.',
		'source_link': 'https://github.com/tschumann/capitle',
		'language': 'js'
	},
	{
		'id': 7,
		'name': 'tomschumann.com',
		'body': "tomschumann.com is this website. It has a bit of information about me and some projects I've worked on. It is written in Javascript using React.",
		'source_link': 'https://github.com/tschumann/tomschumann',
		'language': 'js'
	}
];

// TODO: get this from an API
const reading = [
	{
		'id': 1,
		'title': 'Game Engine Black Book: Wolfenstein 3D',
		'link': 'https://fabiensanglard.net/gebbwolf3d/'
	},
	{
		'id': 2,
		'title': 'Game Engine Black Book DOOM',
		'link': 'https://fabiensanglard.net/gebbdoom/'
	}
];

const root = createRoot(document.getElementById('application'));
root.render(<Application projects={projects} reading={reading} />);

