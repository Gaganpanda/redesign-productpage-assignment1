import { lazy } from 'react'
import type { Routes } from '@/@types/routes'

const sharedRoutes: Routes = [
    {
        key: 'homePage',
        path: `/shared-home`,
        component: lazy(() => import('@/views')),
        authority: [],
    },

]

export default sharedRoutes
