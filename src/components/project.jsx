import React from 'react';

function Project(props) {
	return (
		<div>
			<h3>{props.name}</h3>
			{/* TODO: is there a better way to do this? need arbitrary inline links in the body */}
			<div className="project-description" dangerouslySetInnerHTML={{__html: props.body}}></div>

			<div>Source code: <a href={props.sourceLink} target="_blank">{props.sourceLink}</a></div>
		</div>
	);
}

export default Project;

