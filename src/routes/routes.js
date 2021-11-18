import { lazy } from 'react'

const routes = [
    {
        path: 'main',
        component: lazy(() => import('../pages/Main.js')),
        exact: true,
    },
    {
        path: 'routine/mypage',
        component: lazy(() => import('../pages/RoutineSetting/MyRoutine')),
        exact: true,
    },
]

export default routes
