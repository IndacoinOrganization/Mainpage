import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {withRouter} from "react-router";
import {withTranslation} from 'react-i18next';
import {generateLanguageUrl, DEFAULT_LANGUAGE} from '../../../i18n';

class CustomLink extends Component {
    /**
     * On click handler
     *
     * @param event
     * @returns {string}
     */
    onClick (event) {
        if (this.props.forceUpdate) {

            event.preventDefault();


            return window.location.href = this.getUrl();
        }

        if (typeof this.props.onClick !== 'undefined') {
            this.props.onClick(event);
        }
    }

    /**
     * Get url
     *
     * @returns {string}
     */
    getUrl () {

        let path = `/${this.props.to}`;

        if (DEFAULT_LANGUAGE !== this.props.i18n.language) {
            path = `/${generateLanguageUrl(this.props.i18n.language)}${path}`;
        }

        if (!this.props.forceUpdate) {
            return path;
        }

        const searchParams = {} || this.props.searchParams;
        const searchParamsToDelete = [];
        const url = new URL(window.location);

        url.pathname = path;


        // delete all parameters
        url.searchParams.forEach((value, key) => {
            searchParamsToDelete.push(key);
        });

        for (const key of searchParamsToDelete) {
            url.searchParams.delete(key);
        }

        for (const property in searchParams) {
            url.searchParams.append(property, searchParams[property])
        }

        return url.pathname + url.search;
    }

    render () {
        return (
            <Link
                to={this.getUrl()}
                className={this.props.className || ''}
                style={this.props.style || {}}
                onClick={this.onClick.bind(this)}
                target={this.props.target}
            >
                {this.props.children}
            </Link>
        );
    }
}

export default withTranslation()(withRouter(CustomLink));
