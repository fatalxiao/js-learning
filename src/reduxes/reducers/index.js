import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';

import loadComponent from './common/LoadComponentReducer';
import appToaster from './common/ToasterReducer';
import appNotifier from './common/NotifierReducer';
import fullScreen from './common/FullScreenReducer';

export default history => combineReducers({

    router: connectRouter(history),

    loadComponent,
    appToaster,
    appNotifier,
    fullScreen

});
