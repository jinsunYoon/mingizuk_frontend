// * basic import
import React from 'react'
import { ConnectedRouter } from 'connected-react-router'
import { history } from '../redux/store'
import { Route, Switch } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

// * pages
import Main from '../pages/Main'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import MyRoutine from '../pages/RoutineSetting/MyRoutine'
import RoutineAdd from '../pages/RoutineSetting/RoutineAdd'
import RoutineCount from '../pages/RoutineSetting/RoutineCount'
import RoutineUpdate from '../pages/RoutineSetting/RoutineUpdate'
import RoutineUpdateCount from '../pages/RoutineSetting/RoutineUpdateCount'
import NotFound from '../pages/NotFound'
import Mypage from '../pages/MyPages/MyPage'
import MyProfileUpdate from '../pages/MyPages/MyProfileUpdate'
import MyCollection from '../pages/MyPages/MyCollection'
import History from '../pages/History'
import MoimMain from '../pages/MoimPages/MoimMain'
import MoimWrite from '../pages/MoimPages/MoimWrite'
import MoimDetail from '../pages/MoimPages/MoimDetail'
import MyMoim from '../pages/MyPages/MyMoim'
import Backend from '../pages/Backend'
import { NavBar } from '../components'
import { loginCheckMD } from '../redux/async/user'

const App = () => {
    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(loginCheckMD())
    }, [])

    return (
        <>
            <ConnectedRouter history={history}>
                <Switch>
                    <Route path="/" exact component={Main}></Route>
                    <Route path="/login" exact component={Login}></Route>
                    <Route path="/signup" exact component={Signup}></Route>
                    <Route path="/routine/mypage" exact component={MyRoutine} />
                    <Route path="/routine/add" exact component={RoutineAdd} />
                    <Route path="/history" exact component={History} />
                    <Route
                        path="/routine/count"
                        exact
                        component={RoutineCount}
                    />
                    <Route
                        path="/routine/update"
                        exact
                        component={RoutineUpdate}
                    />
                    <Route
                        path="/routine/update/count"
                        exact
                        component={RoutineUpdateCount}
                    />
                    <Route path="/users" exact component={Mypage} />
                    <Route
                        path="/users/info"
                        exact
                        component={MyProfileUpdate}
                    />
                    <Route
                        path="/users/collection"
                        exact
                        component={MyCollection}
                    />
                    <Route path="/users/moim" exact component={MyMoim} />

                    <Route path="/moim" exact component={MoimMain} />
                    <Route path="/moim/write" exact component={MoimWrite} />
                    <Route
                        path="/moim/detail/:id"
                        exact
                        component={MoimDetail}
                    />
                    <Route path="/backend" exact component={Backend} />

                    <Route path="*" component={NotFound} />
                </Switch>
            </ConnectedRouter>
            {/* <NavBar /> */}
        </>
    )
}

export default App
