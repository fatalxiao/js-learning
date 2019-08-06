import React, {Component} from 'react';

import 'scss/containers/app/nav/patients/NavNoPatient.scss';

class NavNoPatient extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="nav-no-patient">

                <i className="icon-plus add-patient-icon"
                   onClick={this.showAddPatient}></i>

                You have no patient now.<br/>
                Would you <span className="add-patient-button"
                                onClick={this.showAddPatient}>Create new Patient</span> ?

            </div>
        );
    }
}

export default NavNoPatient;
