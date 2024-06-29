import React from 'react';
import renderer from 'react-test-renderer';
import OpenSource from './opensource';

test('test component renders', () => {
	const component = renderer.create(<OpenSource title="Project" link="http://git.lan/project" key="1"/>);
	const tree = component.toJSON();

	expect(tree).toMatchSnapshot();
});

