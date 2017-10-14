import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

import Application from './components/application';

// TODO: get this from an API
var posts = [
	// key here because React wants it
	{'title': 'post1', 'body': 'lorem ipsum', 'key': 1},
	{'title': 'post2', 'body': 'sit dolor amet', 'key': 2}
];

ReactDOM.render(<Application posts={ posts }/>, document.getElementById('application'));

