import React from 'react';

class Post extends React.Component {
	getPostTime() {
		const time = new Date(this.props.time);

		return time.toISOString();
	}

	render() {
		return (
			<article>
				<h3>{this.props.title}</h3>
				<div className="post-time">
					Posted at <time dateTime={this.props.time}>{this.getPostTime()}</time>
				</div>
				<div className="post-content" dangerouslySetInnerHTML={{__html: this.props.body}}>
				</div>
			</article>
		);
	}
}

export default Post;

