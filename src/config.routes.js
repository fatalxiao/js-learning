import ac from 'components/AsyncComponent';

export function configureRoutes(store) {

    return [{
        path: '/',
        component: ac(() => import('containers/Root'), store),
        routes: [{
            path: '/app',
            component: ac(() => import('containers/app/App'), store),
            routes: []
        }]
    }];

}

export const DEFAULT_ROUTE = '/app';
