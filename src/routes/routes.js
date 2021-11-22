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
    {
        path: 'routine/add',
        component: lazy(() => import('../pages/RoutineSetting/RoutineAdd')),
        exact: true,
    },
    {
        path: 'routine/count',
        component: lazy(() => import('../pages/RoutineSetting/RoutineCount')),
        exact: true,
    },
    {
        path: 'routine/update',
        component: lazy(() => import('../pages/RoutineSetting/RoutineUpdate')),
        exact: true,
    },
    {
        path: 'routine/update/count',
        component: lazy(() =>
            import('../pages/RoutineSetting/RoutineUpdateCount')
        ),
        exact: true,
    },
    {
        path: 'history',
        component: lazy(() => import('../pages/History')),
        exact: true,
    },
    {
        path: 'users',
        component: lazy(() => import('../pages/MyPages/MyPage')),
        exact: true,
    },
    {
        path: 'users/info',
        component: lazy(() => import('../pages/MyPages/MyProfileUpdate')),
        exact: true,
    },
    {
        path: 'users/collection',
        component: lazy(() => import('../pages/MyCollection')),
        exact: true,
    },
    {
        path: 'users/moim',
        component: lazy(() => import('../pages/MyPages/MyMoim')),
        exact: true,
    },
    {
        path: 'moim',
        component: lazy(() => import('../pages/MoimPages/MoimMain')),
        exact: true,
    },
    {
        path: 'moim/write',
        component: lazy(() => import('../pages/MoimPages/MoimWrite')),
        exact: true,
    },
    {
        path: 'moim/update',
        component: lazy(() => import('../pages/MoimPages/MoimUpdate')),
        exact: true,
    },
    {
        path: 'moim/detail/:id',
        component: lazy(() => import('../pages/MoimPages/MoimDetail')),
        exact: true,
    },
    {
        path: 'backend',
        component: lazy(() => import('../pages/Backend')),
        exact: true,
    },
    {
        path: 'chat/:id',
        component: lazy(() => import('../pages/Chat')),
        exact: true,
    },
]

export default routes
