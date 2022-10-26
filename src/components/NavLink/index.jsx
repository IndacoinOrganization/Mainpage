import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import {withTranslation} from 'react-i18next';
import { withRouter } from 'react-router'; 

class CustomNavLink extends Component {
    constructor(props) {
        super(props);

        this.state = {
            children: props.children,
        };
    }

    componentDidUpdate() {
        const
        {
            children: childrenProps,
        } = this.props,
        {
            children: childrenState,
        } = this.state;

        if (childrenProps !== childrenState) {
            this.setState({
                children: childrenProps,
            });
        }
    }

    activeClassName() {
        const {
            activeClassName,
            directly,
            includeUrl
        } = this.props;

        return directly && (includeUrl ? (window.location.pathname.includes(includeUrl) ? activeClassName : null) : (this.getUrl() === window.location.pathname ? activeClassName : null));
    }

    /**
     * On click link
     *
     * @param event
     * @returns {null}
     */
    onClick (event) {
        event.preventDefault();

        if (this.getUrl()=== window.location.pathname) {
            return null;
        }

        return this.props.history.push(this.getUrl());
    }

    /**
     * Get url
     *
     * @returns {string}
     */
    getUrl() {
        let path = this.props.to;


        return `/${path}`;
    }

    render () {
        const classes = [
            this.props.className,
        ];

        if (this.activeClassName()) {
            classes.push(this.activeClassName());
        }

        return (
            <NavLink
                to={this.getUrl()}
                className={classes.join(' ')}
                onClick={this.onClick.bind(this)}
            >
                {this.state.children}
            </NavLink>
        );
    }
}

export default withTranslation()(CustomNavLink);
