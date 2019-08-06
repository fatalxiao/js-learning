import React, {Component} from 'react';

import Loading from 'alcedo-ui/CircularLoading';

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

        loadCompleteCallback = () => {
            setTimeout(() => {
                this.setState({
                    isLoading: false
                });
            }, 4000);
        };

        loadComponent = callback => {

            // if (process.env.NODE_ENV === 'development') {
            //     this.setState({
            //         Component: getComponent()
            //     }, () => {
            //         callback && callback();
            //     });
            //     return;
            // }

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
