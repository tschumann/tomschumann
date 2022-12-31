import React from 'react';
import renderer from 'react-test-renderer';
import Reading from './reading';

test('test component renders', () => {
	const component = renderer.create(<Reading title="My site" link="http://dev.lan" key="1"/>);
	const tree = component.toJSON();

	expect(tree).toMatchSnapshot();
});

