import React from 'react';
import renderer from 'react-test-renderer';
import Project from './project';

test('test component renders with language', () => {
	const component = renderer.create(<Project name="Name" body="Body" sourceLink="https://dev.lan" language="cpp" key="1"/>);
	const tree = component.toJSON();

	expect(tree).toMatchSnapshot();
});

test('test component renders without language', () => {
	const component = renderer.create(<Project name="Name" body="Body" sourceLink="https://dev.lan" language="" key="1"/>);
	const tree = component.toJSON();

	expect(tree).toMatchSnapshot();
});

