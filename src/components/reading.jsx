import React from 'react';

function Reading(props) {
	return (
		<div>
			<h3 className="book-title" >{props.title}</h3> <a href={props.link} target="_blank">{props.link}</a>
		</div>
	);
}

export default Reading;

