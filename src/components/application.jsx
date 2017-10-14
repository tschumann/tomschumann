import React from 'react';

import Post from './post';

class Application extends React.Component {
	render() {
		return (
			<main>
				{this.props.posts.map(item => <Post title={item.title} time="2016" body={item.body} key={item.id} />)}
			</main>
		);
	}
}

export default Application;

