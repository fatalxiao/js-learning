import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import classNames from 'classnames';

import Paper from 'alcedo-ui/Paper';
import TextField from 'alcedo-ui/TextField';
import NavPatientList from 'containers/app/nav/patients/NavPatientList';

import 'scss/containers/app/nav/bar/NavSearch.scss';

class NavSearch extends Component {

    constructor(props) {

        super(props);

        this.state = {
            filterValue: ''
        };

    }

    filter = data => {
        return data;
    };

    render() {

        const {visible, onRequestClose} = this.props,
            {filterValue} = this.state,

            data = this.filter(filterValue),

            className = classNames('nav-search-wrapper', {
                hidden: !visible
            });

        return (
            <div className={className}>
                <div className="nav-search-modal"
                     onClick={onRequestClose}></div>
                <Paper className="nav-search"
                       nonRounded={true}
                       depth={6}>
                    <div className="nav-search-content">
                        <TextField className="nav-search-field"
                                   value={filterValue}
                                   placeholder="Search"/>
                        {
                            data && data.length > 0 ?
                                <NavPatientList data={this.filter(filterValue)}/>
                                :
                                <div className="no-patient-found">
                                    No Patient Found
                                </div>
                        }
                    </div>
                </Paper>
            </div>
        );

    }
}

NavSearch.propTypes = {

    visible: PropTypes.bool,

    onRequestClose: PropTypes.func

};

export default connect(state => ({}), dispatch => bindActionCreators({}, dispatch))(NavSearch);
