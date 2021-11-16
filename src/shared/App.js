// * basic import
import React, { Suspense, lazy } from 'react'
import { ConnectedRouter } from 'connected-react-router'
import { history } from '../redux/store'
import { Route, Switch, Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loginCheckMD } from '../redux/async/user'

// * pages
import Main from '../pages/Main'
import { NavBar } from '../components'
import NoLogin from '../pages/MyPages/NoLogin'
const Login = lazy(() => import('../pages/Login'))
const Signup = lazy(() => import('../pages/Signup'))
const MyRoutine = lazy(() => import('../pages/RoutineSetting/MyRoutine'))
const RoutineAdd = lazy(() => import('../pages/RoutineSetting/RoutineAdd'))
const RoutineCount = lazy(() => import('../pages/RoutineSetting/RoutineCount'))
const RoutineUpdate = lazy(() =>
    import('../pages/RoutineSetting/RoutineUpdate')
)
const RoutineUpdateCount = lazy(() =>
    import('../pages/RoutineSetting/RoutineUpdateCount')
)
const NotFound = lazy(() => import('../pages/NotFound'))
const Mypage = lazy(() => import('../pages/MyPages/MyPage'))
const MyProfileUpdate = lazy(() => import('../pages/MyPages/MyProfileUpdate'))
const MyCollection = lazy(() => import('../pages/MyPages/MyCollection'))
const History = lazy(() => import('../pages/History'))
const MoimMain = lazy(() => import('../pages/MoimPages/MoimMain'))
const MoimWrite = lazy(() => import('../pages/MoimPages/MoimWrite'))
const MoimDetail = lazy(() => import('../pages/MoimPages/MoimDetail'))
const MyMoim = lazy(() => import('../pages/MyPages/MyMoim'))
const Backend = lazy(() => import('../pages/Backend'))
const MoimUpdate = lazy(() => import('../pages/MoimPages/MoimUpdate'))
const notLoggedIn = lazy(() => import('../pages/notLoggedIn'))

const App = () => {
    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(loginCheckMD())
    }, [])

    // *social login
    if (window.location.pathname.includes('sociallogin')) {
        const refreshToken = window.location.pathname
            .split('=')[1]
            .split('&')[0]
        const accessToken = window.location.pathname.split('=')[2]

        sessionStorage.setItem('refreshToken', refreshToken)
        sessionStorage.setItem('accessToken', accessToken)
        history.replace('/')
    }

    return (
        <>
            <ConnectedRouter history={history}>
                <Suspense fallback={<div>Loading..</div>}>
                    <Switch>
                        <Route path="/" exact component={Main}></Route>
                        <Route path="/login" exact component={Login}></Route>
                        <Route path="/signup" exact component={Signup}></Route>
                        <Route
                            path="/routine/mypage"
                            exact
                            component={MyRoutine}
                        />
                        <Route
                            path="/routine/add"
                            exact
                            component={RoutineAdd}
                        />
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
                        <Route
                            path="/users/moim/nologin"
                            exact
                            component={NoLogin}
                        />
                        <Route path="/moim" exact component={MoimMain} />
                        <Route path="/moim/write" exact component={MoimWrite} />
                        <Route
                            path="/moim/update"
                            exact
                            component={MoimUpdate}
                        />
                        <Route
                            path="/moim/detail/:id"
                            exact
                            component={MoimDetail}
                        />

                        <Route path="/backend" exact component={Backend} />
                        <Route path="/not" exact component={notLoggedIn} />
                        <Route path="*" component={NotFound} />
                    </Switch>
                </Suspense>
            </ConnectedRouter>
            {/* <NavBar /> */}
        </>
    )
}

export default App
