import React, {Component} from 'react';
import styles from "./styles.scss";
import {Trans} from 'react-i18next';

export default class extends Component {

    render () {
        return (
            <div className={styles.cardContainer + ' ' + (this.props.active ? styles.active : '')}>
                <div className={styles.card}>
                    <div className={styles.image}>
                        <img src={this.props.image}/>
                    </div>

                    <h3 className={styles.cardTitle}>
                        <Trans i18nKey={this.props.title}>title</Trans>
                    </h3>

                    <h4 className={styles.text}>
                        <Trans i18nKey={this.props.text}>text</Trans>
                    </h4>
                </div>
            </div>
        );
    }

}
