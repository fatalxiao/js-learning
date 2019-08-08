import React, {Component} from 'react';

import Loading from 'alcedo-ui/CircularLoading';

import Util from 'vendors/Util';

function asyncComponent(getComponent) {

    return class AsyncComponent extends Component {

        constructor(props) {

            super(props);

            this.state = {
                Component: null,
                isLoading: false
            };

        }

        loadStartCallback = () => {
            this.setState({
                isLoading: true
            });
        };

        loadCompleteCallback = async () => {
            await Util.delay(2000);
            this.setState({
                isLoading: false
            });
        };

        loadComponent = callback => {
            getComponent().then(component => {
                this.setState({
                    Component: component.default || component
                }, () => {
                    callback && callback();
                });
            });
        };

        componentDidMount() {
            if (!this.state.Component) {
                this.loadStartCallback();
                this.loadComponent(this.loadCompleteCallback);
            }
        }

        render() {

            const {Component, isLoading} = this.state;

            return isLoading ?
                <Loading/>
                :
                Component ?
                    <Component {...this.props}/>
                    :
                    null;

        }

    };

}

export default asyncComponent;
