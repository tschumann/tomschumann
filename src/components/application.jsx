import React from 'react';

import Post from './post';
import Project from './project';

class Application extends React.Component {
	getYear() {
		return (new Date()).getFullYear();
	}

	render() {
		return (
			<React.Fragment>
				<h2>Tom Schumann</h2>

				<h2>About</h2>
				<section id="about">
					I'm a software engineer. In the past I've worked (professionally) on <a href="https://todo.vu/" target="_blank">todo.vu</a> (previously known as Kitovu) and <a href="https://www.jumbointeractive.com/platform" target="_blank">Jumbo Lottery Platform</a> (marketed as Powered by Jumbo).
				</section>

				<hr/>

				<h2>Projects</h2>
				<aside>In my spare time I tinker with different technologies for different projects. All of my public projects can be found on my <a href="https://github.com/tschumann" target="_blank">GitHub</a> but some of the more complete ones are detailed here.</aside>
				<section id="projects">
					{this.props.projects.map(item =>
						<Project name={item.name} body={item.body} sourceLink={item.source_link} key={item.id} />)}
				</section>

				<hr/>

				<h2>Posts</h2>
				<aside>Little bits of know-how.</aside>
				<section id="posts">
					{this.props.posts.map(item =>
						<Post title={item.title} body={item.body} time={item.time} key={item.id} />)}
				</section>

				<hr/>

				<footer id="footer">
					&copy; 2021 - {this.getYear()}
				</footer>
			</React.Fragment>
		);
	}
}

export default Application;

