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

const App = () => {
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(loginCheckMD())
    }, [])

    const isAuthenticated = useSelector((state) => state?.user?.isLogin)

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
                    <Header />
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
                            path="/notLoggedIn"
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
                    <NavBar />
                </Suspense>
            </ConnectedRouter>
        </>
    )
}

export default App
