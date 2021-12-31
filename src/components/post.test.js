import React from 'react';
import renderer from 'react-test-renderer';
import Post from './post';

test('test component renders', () => {
	const component = renderer.create(<Post title="Title" body="Body" time="2021-12-31 11:08:00" key="1"/>);
	const tree = component.toJSON();

	expect(tree).toMatchSnapshot();
});

