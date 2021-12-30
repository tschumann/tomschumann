import React from 'react';

class Post extends React.Component {
	render() {
		return (
			<article>
				<h3>{this.props.title}</h3>
				<div className="post-time">
					<time dateTime={this.props.time}>{this.props.time}</time>
				</div>
				<div className="post-content">
					{this.props.body}
				</div>
			</article>
		);
	}
}

export default Post;

