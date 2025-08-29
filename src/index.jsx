import React from 'react';
import { createRoot } from 'react-dom/client';

import Application from './components/application';

// TODO: get this from an API
const projects = [
	{
		'id': 1,
		'name': 'Sandbot',
		'body': 'Sandbot is a Half-Life engine multiplayer bot. It is based on <a href="http://hpb-bot.bots-united.com/hpb_bot.html" target="_blank">HPB bot</a> and has been updated with support for more games and mods; unit tests and support for modern versions of Visual C++ and gcc. It is written in C and C++ for Windows and Linux.',
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
		'name': 'foolsgoldsource',
		'body': 'Fool\'s GoldSource is a stub/mock GoldSource engine to allow proper unit testing of GoldSource engine mods and plugins. It is written in C and C++ for Windows and Linux.',
		'source_link': 'https://github.com/tschumann/foolsgoldsource',
		'language': 'cpp'
	},
	{
		'id': 4,
		'name': 'archon',
		'body': 'Archon is a Steam master server and API mock server to allow end to end testing of projects that communicate with Steam. It is written in C#.',
		'source_link': 'https://github.com/tschumann/archon',
		'language': 'cs'
	},
	{
		'id': 5,
		'name': 'ktext',
		'body': 'ktext is a .pdf manipulator. It exposes some of the functionality of <a href="https://itextpdf.com/en" target="_blank">iText</a> through a command line tool. It is written in Kotlin and Java.',
		'source_link': 'https://github.com/tschumann/ktext',
		'language': 'kt'
	},
	{
		'id': 6,
		'name': 'scrape',
		'body': 'scrape a website downloader. It recursively downloads all linked pages of a website. It is written in Python.',
		'source_link': 'https://github.com/tschumann/scrape',
		'language': 'py'
	},
	{
		'id': 7,
		'name': 'tomschumann.com',
		'body': "tomschumann.com is this website. It has a bit of information about me and some projects I've worked on. It is written in Javascript using React.",
		'source_link': 'https://github.com/tschumann/tomschumann',
		'language': 'js'
	}
];

const opensource = [
	{
		'id': 1,
		'title': 'Metamod-p',
		'link': 'https://github.com/Bots-United/metamod-p'
	},
	{
		'id': 2,
		'title': 'Metamod: Source',
		'link': 'https://github.com/alliedmodders/metamod-source'
	},
	{
		'id': 3,
		'title': 'RCBot2',
		'link': 'https://github.com/APGRoboCop/rcbot2'
	},
	{
		'id': 4,
		'title': 'FileDetectionRuleSets',
		'link': 'https://github.com/SteamDatabase/FileDetectionRuleSets'
	},
	{
		'id': 5,
		'title': 'Master Sword Rebirth',
		'link': 'https://github.com/MSRevive/MasterSwordRebirth'
	}
];

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
root.render(<Application projects={projects} opensource={opensource} reading={reading} />);

