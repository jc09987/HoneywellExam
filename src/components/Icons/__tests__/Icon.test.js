import renderer from 'react-test-renderer';
import React from 'react';
import ActionIcon from '../ActionIcon';

describe('ActionIcon component renders correctly', () => {
    it('renders correctly', () => { 
        const rendered = renderer.create(
        <ActionIcon handleAction={() => { return true }} />
        );
        expect(rendered.toJSON()).toMatchSnapshot();
    });
});