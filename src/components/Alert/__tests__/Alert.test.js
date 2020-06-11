import renderer from 'react-test-renderer';
import React from 'react';
import Alert from '../Alert';

describe('Alert component renders correctly (info)', () => {
    it('renders correctly', () => { 
        const rendered = renderer.create(
            <Alert
                id="info-alert"
                className="alert alert-info"
                title="Loading..."
                text="Fetching data..."
            />
        );
        expect(rendered.toJSON()).toMatchSnapshot();
    });
});

describe('Alert component renders correctly (error)', () => {
    it('renders correctly', () => { 
        const rendered = renderer.create(
            <Alert
                id="error-alert"
                className="alert alert-danger"
                title="Error!"
                text="oh snap!"
            />
        );
        expect(rendered.toJSON()).toMatchSnapshot();
    });
});