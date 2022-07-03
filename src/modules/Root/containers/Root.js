/**
 * @file Root.js
 */

import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

// Components
import {Redirect} from 'react-router-dom';

// Statics
import {DEFAULT_ROUTE} from 'src/config.route';

// Vendors
import {renderRoutes} from 'react-router-config';

// Styles
import 'assets/font-awesome/css/fontawesome-all.css';
import 'scss/global.scss';

const Root = ({
    route, location
}) => (
    <>

        {/** 路由内容 */}
        {renderRoutes(route.routes)}

        {/** 默认路由的跳转 */}
        {
            location.pathname === '/' ?
                <Redirect from="/"
                          to={`${DEFAULT_ROUTE}${window.location?.search || ''}`}/>
                :
                null
        }

    </>
);

Root.propTypes = {

    // 路由
    route: PropTypes.object,
    location: PropTypes.object

};

export default connect()(Root);
