// * basic import
import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { Route } from 'react-router-dom';

// * pages
import Main from '../pages/Main';
// import Counter from '../pages/Counter';

const App = () => {
    return (
        <>
            <ConnectedRouter history={createBrowserHistory()}>
                <Route path="/" exact component={Main}></Route>
            </ConnectedRouter>
        </>
    );
};

export default App;
