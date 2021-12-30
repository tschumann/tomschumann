import React from 'react';

import Post from './post';
import Project from './project';

class Application extends React.Component {
	render() {
		return (
			<React.Fragment>
				<section id="projects">
					{this.props.projects.map(item =>
						<Project title={item.title} body={item.body} link={item.link} key={item.id} />)}
				</section>

				<section id="posts">
					{this.props.posts.map(item =>
						<Post title={item.title} body={item.body} time={item.time} key={item.id} />)}
				</section>
			</React.Fragment>
		);
	}
}

export default Application;

