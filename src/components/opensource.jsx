import React from 'react';

function OpenSource(props) {
	return (
		<div>
			<strong>{props.title}</strong>: <a href={props.link} target="_blank">{props.link}</a>
		</div>
	);
}

export default OpenSource;

