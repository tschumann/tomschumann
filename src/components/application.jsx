import React from 'react';
import yaml from 'js-yaml';

import OpenSource from './opensource';
import Post from './post';
import Project from './project';
import Reading from './reading';

class Application extends React.Component {
	constructor(props) {
		super(props);
		this.state = { posts: [] };
	}

	componentDidMount() {
		fetch('/posts.yaml?_=2105')
			.then((response) => {
				return response.text();
			})
			.then((response) => {
				this.setState({ posts: yaml.load(response) });
			});
	}

	getYear() {
		return (new Date()).getFullYear();
	}

	render() {
		// sort posts by date posted, then reverse to that newest is first
		const posts = this.state.posts.sort((a, b) => {
			return new Date(a.time) - new Date(b.time);
		}).reverse();

		return (
			<React.Fragment>
				<h2>Tom Schumann</h2>

				<h2>About</h2>
				<section id="about">
					I'm a senior software engineer. In the past I've worked (professionally) on <a href="https://todo.vu/" target="_blank">todo.vu</a> (previously known as Kitovu) and <a href="https://www.jumbointeractive.com/platform" target="_blank">Jumbo Lottery Platform</a> (marketed as Powered by Jumbo).
				</section>

				<hr/>

				<h2>Projects</h2>
				<aside>In my spare time I tinker with different software technologies. All of my public projects can be found on my <a href="https://github.com/tschumann" target="_blank">GitHub</a> but some of the more complete ones are detailed here.</aside>
				<section id="projects">
					{this.props.projects.map(item =>
						<Project name={item.name} body={item.body} sourceLink={item.source_link} language={item.language} key={item.id} />)}
				</section>

				<hr/>

				<h2>Open Source Contributions</h2>
				<aside>
					I've also contributed to open source projects:
				</aside>
				<section id="opensource">
					{this.props.opensource.map(item =>
						<OpenSource title={item.title} link={item.link} key={item.id} />)}
				</section>

				<hr/>

				<h2>Posts</h2>
				<aside>Little bits of tech know-how.</aside>
				<section id="posts">
					{posts.map(item =>
						<Post title={item.title} body={item.body} time={item.time} key={item.id} />)}
				</section>

				<hr/>
				
				<h2>Other reading</h2>
				<aside>Programming books and resources by others that are worth a look.</aside>
				<section id="reading">
					{this.props.reading.map(item =>
						<Reading title={item.title} link={item.link} key={item.id} />)}
				</section>

				<hr/>

				<h3>Other links (recommended but unread)</h3>
				<section className="link-list">
					<a href="https://all-things-andy-gavin.com/" target="_blank">https://all-things-andy-gavin.com/</a>
					<a href="https://www.copetti.org/writings/consoles/materials/ebook/" target="_blank">https://www.copetti.org/writings/consoles/materials/ebook/</a>
					<a href="https://fgiesen.wordpress.com/2011/07/09/a-trip-through-the-graphics-pipeline-2011-index/" target="_blank">https://fgiesen.wordpress.com/2011/07/09/a-trip-through-the-graphics-pipeline-2011-index/</a>
					<a href="https://nicole.express/" target="_blank">https://nicole.express/</a>
					<a href="https://nothings.org/" target="_blank">https://nothings.org/</a>
					<a href="https://sudden-desu.net/" target="_blank">https://sudden-desu.net/</a>
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

