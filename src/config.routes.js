import ac from 'components/AsyncComponent';

export function configureRoutes(store) {

    return [{
        path: '/',
        component: ac(() => import('containers/Root'), store),
        routes: [{
            path: '/js-learning',
            component: ac(() => import('containers/app/JSLearning'), store),
            routes: [{
                path: '/js-learning/react-suspense',
                component: ac(() => import('containers/app/modules/ReactSuspense'), store),
                routes: []
            }]
        }]
    }];

}

export const DEFAULT_ROUTE = '/js-learning';
