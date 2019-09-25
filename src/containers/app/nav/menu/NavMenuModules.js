import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {NavLink} from 'react-router-dom';
import kebabCase from 'lodash/kebabCase';

import * as actions from 'reduxes/actions';

import modules from 'src/config.modules';

import Event from 'vendors/Event';

import 'scss/containers/app/nav/menu/NavMenuModules.scss';

class NavMenuModules extends Component {

    constructor(props) {
        super(props);
    }

    handleClick = () => {
        const {onRequestClose} = this.props;
        onRequestClose && onRequestClose();
    };

    render() {
        return (
            <div className="nav-menu-modules"
                 onWheel={e => Event.preventContainerScroll(e)}>
                {
                    modules && modules.map((module, index) => module ?
                        <NavLink key={index}
                                 className="nav-menu-module"
                                 to={`/js-learning/${kebabCase(module.name)}`}
                                 onClick={this.handleClick}>

                            <div className="module-info">
                                <span className="module-name">{module.name}</span>
                            </div>

                            <div className="module-desc">
                                {module.desc}
                            </div>

                        </NavLink>
                        :
                        null
                    )
                }
            </div>
        );
    }
}

NavMenuModules.propTypes = {

    data: PropTypes.array,

    onRequestClose: PropTypes.func,
    routerPush: PropTypes.func

};

export default connect(state => ({}), dispatch => bindActionCreators({
    routerPush: actions.routerPush
}, dispatch))(NavMenuModules);
