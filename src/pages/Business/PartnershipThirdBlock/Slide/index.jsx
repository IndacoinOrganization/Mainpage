import React, {Component} from 'react';
import "./styles.sass";
import {Trans} from 'react-i18next';

export default class extends Component {

    render () {
        return (
            <div className={`cardContainer ${(this.props.active ? 'active' : '')}`}>
                <div className={'card'}>
                    <div className={'image'}>
                        <img src={this.props.image}/>
                    </div>

                    <h3 className={'cardTitle'}>
                        <Trans i18nKey={this.props.title}>title</Trans>
                    </h3>

                    <h4 className={'text'}>
                        <Trans i18nKey={this.props.text}>text</Trans>
                    </h4>
                </div>
            </div>
        );
    }

}
