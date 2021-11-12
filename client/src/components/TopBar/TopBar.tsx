import React from 'react';
import { Link } from 'react-router-dom';

const TopBar = () => {
    return (
        <div>
            <h1>Hello World</h1>
            <Link to="/">Home</Link>
            <Link to="/non-existaing-page">Unknown Page</Link>
        </div>
    );
};

export default TopBar;
