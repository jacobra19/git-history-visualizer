import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { BrowserRouter as Router } from 'react-router-dom';
import TopBar from './TopBar';

describe('TopBar', () => {
    it('should render title Hello World', () => {
        const { getByRole } = render(
            <Router>
                <TopBar />
            </Router>,
        );
        const title = getByRole('heading');
        expect(title).toHaveTextContent('Hello World');
    });
    it('should render link to home page', () => {
        const { getByText } = render(
            <Router>
                <TopBar />
            </Router>,
        );
        const link = getByText('Home');
        expect(link).toHaveAttribute('href', '/');
    });
    it('should render link to unknown page', () => {
        const { getByText } = render(
            <Router>
                <TopBar />
            </Router>,
        );
        const link = getByText('Unknown Page');
        expect(link).toHaveAttribute('href', '/non-existaing-page');
    });
});
