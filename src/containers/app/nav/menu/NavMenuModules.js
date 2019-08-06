import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions';

import FlatButton from 'alcedo-ui/FlatButton';

import menu from 'src/config.menu';

import Event from 'vendors/Event';

import 'scss/containers/app/nav/menu/NavMenuModules.scss';

class NavMenuModules extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {routerPush} = this.props;

        return (
            <div className="nav-menu-modules"
                 onWheel={e => Event.preventContainerScroll(e)}>

                {
                    menu && menu.map((module, index) => module ?
                        <FlatButton key={index}
                                    className="nav-menu-module"
                                    onClick={() => routerPush(`/js-learning${module.route}`)}>

                            <div className="module-info">
                                <span className="module-name">{module.name}</span>
                            </div>

                            <div className="module-desc">
                                {module.desc}
                            </div>

                        </FlatButton>
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

    routerPush: PropTypes.func

};

export default connect(state => ({}), dispatch => bindActionCreators({
    routerPush: actions.routerPush
}, dispatch))(NavMenuModules);
