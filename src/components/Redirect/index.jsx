import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from "react-router";
import {withTranslation} from "react-i18next";

class CustomRedirect extends Component {

    constructor(props) {
        super(props);

        this._path = '/' + props.to;
    }

    render() {
        return (
            <Link
                to={this._path}
            >
                {this.props.children}
            </Link>
        );
    }
}

export default withTranslation()(withRouter(CustomRedirect));
