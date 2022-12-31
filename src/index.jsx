import React from 'react';
import { createRoot } from 'react-dom/client';

import Application from './components/application';

// TODO: get this from an API
const posts = [
	{
		'id': 1,
		'title': 'Show hidden files in Ubuntu',
		'time': '2021-12-31 09:21:00',
		'body': 'Ctrl+H in Files.',
		'tags': ['linux']
	},
	{
		'id': 2,
		'title': 'Transferring files to and from an Android phone on Windows',
		'time': '2021-12-31 10:39:00',
		'body': 'On older versions of Android if you slide down the menu, File transfer will be selected by default but may not work unless you select Photo transfer (or some other option) then reselect File transfer. On newer versions of Android No data transfer will be selected by default but you can change to File transfer. The phone will then show up under My Computer/This PC in File Explorer.',
		'tags': ['android']
	},
	{
		'id': 3,
		'title': 'Counting lines of actual code in Visual Studio',
		'time': '2021-12-31 10:43:00',
		// the \\ is actually \ so copy what gets rendered, not what is here
		'body': 'Do a text search using the following regex: ^~(:Wh@//.+)~(:Wh@\\{:Wh@)~(:Wh@\\}:Wh@)~(:Wh@\\#).+',
		'tags': ['visual-studio']
	},
	{
		'id': 4,
		'title': 'Connect to a Windows Shared Folder from Ubuntu',
		'time': '2022-06-18 08:46:00',
		'body': 'In Ubuntu, open the file explorer and go to File -> Connect to Server. Server is the computer\'s IP address, Type is Windows share, Share can be left blank, and Folder is the name of the folder you\'re connecting to. Domain name can be left blank (it can work it out? or is it the workgroup name?), User name is the Windows username and Password is the Windows password.',
		'tags': ['linux']
	},
	{
		'id': 5,
		'title': 'Building a .dll or .so with Fortran Package Manager',
		'time': '2022-10-01 15:34:00',
		'body': 'As at the time of writing at least (latest Fortran Package Manager is v0.6.0), fpm cannot build a .dll or .so file. fpm will build all of the object files, so all that is required is to link the .o files into a binary.<br/>On Windows: gfortran -static -shared build\\*.o -o output.dll<br/>On Linux: gfortran -static -shared build/*.o -o output.so<br/>If you\'re linking 32-bit code also add -m32 to the gfortran parameters.',
		'tags': ['fortran']
	},
	{
		'id': 6,
		'title': 'Debugging a .dll with Visual Studio',
		'time': '2022-10-22 16:58:00',
		'body': 'In Visual Studio go to Debug -> Attach to Process and choose the running process that the .dll has been loaded into.',
		'tags': ['visual-studio']
	},
	{
		'id': 7,
		'title': 'Navigating Google Analytics 4 reports',
		'time': '2022-12-31 10:37:00',
		'body': 'Google Analytics 4 has moved most reports around so it\'s not always easy to find the equivalent from Google Analytics 3.<br/><table><tr><th>Google Analytics 3</th><th>Google Analytics 4</th><th>Notes</th></tr><tr><td>Home -> daily users</td><td>Reports -> Reports snapshot -> daily users</td><td>Neither graph has a name or title</td></tr><tr><td>Home -> How do you acquire users?</td><td>Reports -> Acquisition -> User acquisition -> New users by First user default channel group over time</td><td></td></tr><tr><td>Home -> Where are your users?</td><td>Reports -> Reports snapshot -> Users by Country</td><td></td></tr><tr><td>Home -> When do your users visit?</td><td>-</td><td>No equivalent report</td></tr><tr><td>Acquisition -> All Traffic -> Referrals</td><td>Reports -> Acquisition -> Traffic acquisition</td><td>Change the source in the bottom table to Session source for an approximation of the old report</td></tr><tr><td>Behavior -> Site Content -> All Pages</td><td>All Pages: Reports -> Engagement -> Pages and screens</td><td></td></tr><tr><td>Behavior -> Events -> Overview</td><td>eports -> Engagement -> Events</td><td></td></tr></table>',
		'tags': ['google-analytics']
	}
];

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
root.render(<Application projects={projects} posts={posts} reading={reading} />);

