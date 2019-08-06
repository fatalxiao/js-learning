import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import classNames from 'classnames';

import NavPatientCollapsed from './NavPatientsPopover';
import PatientListWrapper from './NavPatientListWrapper';

import 'scss/containers/app/nav/patients/NavPatient.scss';

class NavPatients extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {isCollapsed, isFold} = this.props;

        return (
            <div className={classNames('nav-patient', {
                collapsed: isCollapsed,
                fold: isFold
            })}>
                {
                    isCollapsed ?
                        <NavPatientCollapsed isFold={isFold}/>
                        :
                        <PatientListWrapper/>
                }
            </div>
        );
    }
}

NavPatients.propTypes = {
    isCollapsed: PropTypes.bool,
    isFold: PropTypes.bool
};

export default connect(state => ({}), dispatch => bindActionCreators({}, dispatch))(NavPatients);
