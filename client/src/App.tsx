import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Home, NotFoundPage } from '@pages';
import { TopBar } from '@components';

function App() {
    return (
        <div className="App">
            <Router>
                <TopBar/>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route component={NotFoundPage} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
