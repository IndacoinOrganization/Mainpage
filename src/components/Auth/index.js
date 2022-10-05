import React, {Component} from 'react';
import {connect} from "react-redux";
import getUser from "@actions/get-user";
import logout from "@actions/logout";
import {withRouter} from "react-router";
import Redirect from "@components/Redirect";

class Auth extends Component {

    constructor(props) {
        super(props);

        this.initialState = {
            redirectToDashboard: false,
            redirectToLogin: false,
        };

        this.state = this.initialState;
    }

    componentDidMount() {
        if (typeof this.props.onRef === 'function') {
            this.props.onRef(this);
        }
    }

    componentWillUnmount() {
        if (typeof this.props.onRef === 'function') {
            this.props.onRef(undefined);
        }
    }

    /**
     * Login user
     */
    login () {
        this.props.setUser((success) => {
            // TODO; обработать success если пришло false, то редирет с перезагрузкой страницы
            this.setState({
                redirectToDashboard: true,
            }, this.setState(this.initialState));
        })
    }

    /**
     * Logout user
     */
    logout() {
        this.props.logout();
        this.setState({
            redirectToLogin: true,
        }, this.setState(this.initialState));
    }

    render () {
        if (this.state.redirectToDashboard) {
            return <Redirect to='cpanel'/>;
        }

        if (this.state.redirectToLogin) {
            return <Redirect to=''/>;
        }

        return null;
    }

}

export default connect(
    state => ({
        getUser: state.getUser,
    }),
    dispatch => ({
        setUser: (callback) => {
            dispatch(getUser(callback));
        },
        logout: () => {
            dispatch(logout());
        },
    })
)(withRouter(Auth));
