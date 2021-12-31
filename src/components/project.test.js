import React from 'react';
import renderer from 'react-test-renderer';
import Project from './project';

test('test component renders', () => {
	const component = renderer.create(<Project name="Name" body="Body" sourceLink="https://dev.lan" key="1"/>);
	const tree = component.toJSON();

	expect(tree).toMatchSnapshot();
});

