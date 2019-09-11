import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {renderRoutes} from 'react-router-config';

import Nav from './nav/Nav';
import NavTitle from './nav/title/NavTitle';
import PageLoading from 'alcedo-ui/PageLoading';

import Dom from 'vendors/Dom';

import 'scss/containers/app/App.scss';

class JSLearning extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        Dom.removeClass(document.querySelector('html'), 'full-size');
    }

    render() {

        const {route, componentLoading} = this.props;

        return (
            <div className="app">

                <Nav/>

                <div className="app-content">

                    <PageLoading visible={componentLoading}
                                 showStripes={false}/>

                    <NavTitle/>

                    {renderRoutes(route.routes)}

                </div>

            </div>
        );

    }
}

JSLearning.propTypes = {
    route: PropTypes.object,
    componentLoading: PropTypes.bool
};

export default connect(state => ({
    componentLoading: state.loadComponent.loading
}), dispatch => bindActionCreators({}, dispatch))(JSLearning);
