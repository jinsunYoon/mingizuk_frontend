// * basic import
import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { Route } from 'react-router-dom';


// * pages
import Main from '../pages/Main';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
// import Counter from '../pages/Counter';

const App = () => {
    return (
        <>
            <ConnectedRouter history={createBrowserHistory()}>
                <Route path="/" exact component={Main}></Route>
                <Route path="/login" exact component={Login}></Route>
                <Route path="/signup" exact component={Signup}></Route>
            </ConnectedRouter>
        </>
    );
};

export default App;
