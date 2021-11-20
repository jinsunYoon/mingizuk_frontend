// * basic import for route
import React, { Suspense, lazy } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import ProtectedRoutes from './routes/ProtectedRoutes' //Authenticated routes
import PublicRoute from './routes/PublicRoute'
import PrivateRoute from './routes/PrivateRoute'

import { history } from './redux/store'
import { useDispatch, useSelector } from 'react-redux'
import { loginCheckMD } from './redux/async/user'

// * pages
const Login = lazy(() => import('./pages/Login'))
const Signup = lazy(() => import('./pages/Signup'))
const NotFound = lazy(() => import('./pages/NotFound'))
const notLoggedIn = lazy(() => import('./pages/notLoggedIn'))
const Onboarding = lazy(() => import('./pages/Onboarding'))
const Header = lazy(() => import('./components/Header.js'))
const NavBar = lazy(() => import('./components/NavBar.js'))
const ReLogin = lazy(() => import('./pages/ReLogin'))

const App = () => {
    const dispatch = useDispatch()

    const isAuthenticated = useSelector((state) => state?.user?.isLogin)
    React.useEffect(() => {
        if (!isAuthenticated) {
            dispatch(loginCheckMD())
        }
    }, [])
    const nav = [
        '/moim',
        '/main',
        '/history',
        'routine/mypage',
        '/users',
        '/users/info',
        '/users/collection',
        '/users/moim',
    ]

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
                    <Route path={'/signup'} exact>
                        <Header type="none" name="회원가입" />
                    </Route>
                    <Route path={'/main'} exact>
                        <Header type="menu" />
                    </Route>
                    <Route path={'/history'} exact>
                        <Header type="menu" name="통계" />
                    </Route>
                    <Route path={'/routine/mypage'} exact>
                        <Header name="루틴" type="back" />
                    </Route>
                    <Route path={'/routine/update'} exact>
                        <Header name="내 루틴 수정하기 ( 1 / 2 )" type="back" />
                    </Route>
                    <Route path={'/routine/update/count'} exact>
                        <Header name="내 루틴 수정하기 ( 2 / 2 )" type="back" />
                    </Route>
                    <Route path={'/routine/add'} exact>
                        <Header name="내 루틴 추가하기 ( 1 / 2 )" type="back" />
                    </Route>
                    <Route path={'/routine/count'} exact>
                        <Header name="내 루틴 추가하기 ( 2 / 2 )" type="back" />
                    </Route>
                    <Route path={'/moim'} exact>
                        <Header type="back" name="모임" />
                    </Route>
                    <Route path={'/moim/detail/:id'} exact>
                        <Header type="back" name="모임" />
                    </Route>
                    <Route path={'/moim/write'} exact>
                        <Header type="back" name="모임 글쓰기" />
                    </Route>
                    <Route path={'/moim/update'} exact>
                        <Header type="back" name="모임 수정하기" />
                    </Route>
                    <Route path={'/users'} exact>
                        <Header type="back" name="마이페이지" />
                    </Route>
                    <Route path={'/users/info'} exact>
                        <Header type="back" name="프로필 수정" />
                    </Route>
                    <Route path={'/users/collection'} exact>
                        <Header type="back" name="내 캐릭터" />
                    </Route>
                    <Route path={'/users/moim'} exact>
                        <Header type="back" name="내 모임" />
                    </Route>

                    <Switch>
                        <PublicRoute
                            path="/"
                            exact
                            isAuthenticated={isAuthenticated}
                        >
                            <Onboarding />
                        </PublicRoute>
                        <PublicRoute
                            path="/login"
                            exact
                            isAuthenticated={isAuthenticated}
                        >
                            <Login />
                        </PublicRoute>
                        <PublicRoute
                            path="/signup"
                            exact
                            isAuthenticated={isAuthenticated}
                        >
                            <Signup />
                        </PublicRoute>
                        <PublicRoute
                            path="/ReLogin"
                            exact
                            isAuthenticated={isAuthenticated}
                        >
                            <notLoggedIn />
                        </PublicRoute>
                        <PrivateRoute
                            path="/"
                            isAuthenticated={isAuthenticated}
                        >
                            <ProtectedRoutes />
                        </PrivateRoute>
                        <Route path="*">
                            <NotFound />
                        </Route>
                    </Switch>
                    <Route path={nav} exact component={NavBar} />
                </Suspense>
            </ConnectedRouter>
        </>
    )
}

export default App
