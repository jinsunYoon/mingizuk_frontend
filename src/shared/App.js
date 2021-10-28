// * basic import
import React from 'react'
import { ConnectedRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { Route } from 'react-router-dom'

// * pages
import Main from '../pages/Main'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import MyRoutine from '../pages/RoutineSetting/MyRoutine'
import RoutineAdd from '../pages/RoutineSetting/RoutineAdd'
import RoutineCount from '../pages/RoutineSetting/RoutineCount'

import { Header } from '../components/index'

// import Counter from '../pages/Counter';

const App = () => {
    return (
        <>
            <Header />
            <ConnectedRouter history={createBrowserHistory()}>
                <Route path="/" exact component={Main}></Route>
                <Route path="/login" exact component={Login}></Route>
                <Route path="/signup" exact component={Signup}></Route>
                <Route path="/routine/mypage" exact component={MyRoutine} />
                <Route path="/routine/add" exact component={RoutineAdd} />
                <Route path="/routine/count" exact component={RoutineCount} />
            </ConnectedRouter>
        </>
    )
}

export default App
