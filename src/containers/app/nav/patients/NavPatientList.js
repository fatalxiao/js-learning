import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions';

import FlatButton from 'alcedo-ui/FlatButton';

import Event from 'vendors/Event';

import 'scss/containers/app/nav/patients/NavPatientList.scss';

class NavPatientList extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {data, routerPush} = this.props;

        return (
            <div className="nav-patient-list"
                 onWheel={e => {
                     Event.preventContainerScroll(e);
                 }}>

                {
                    data && data.map((patient, index) =>
                        <FlatButton key={index}
                                    className="patient"
                                    onClick={() => {
                                        routerPush(`/app/patient/info/${patientId}`);
                                    }}>

                            {/*<div className="patient-info">*/}
                            {/*    <span className="patient-name">{patient.name}</span>*/}
                            {/*</div>*/}

                            {/*<div className="patient-desc">*/}
                            {/*    {`${patientId}  ·  ${groupName}`}*/}
                            {/*</div>*/}

                        </FlatButton>
                    )
                }

            </div>
        );

    }
}

NavPatientList.propTypes = {

    data: PropTypes.array,

    routerPush: PropTypes.func

};

export default connect(state => ({}), dispatch => bindActionCreators({
    routerPush: actions.routerPush
}, dispatch))(NavPatientList);
