import React from 'react';

function Project(props) {
	return (
		<div>
			<h3>{props.title}</h3>
			<div className="project-content">
				{props.body}
			</div>
		</div>
	);
}

export default Project;

