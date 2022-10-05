import React, {Component} from 'react';
import styles from './styles.sass';
import {Trans} from 'react-i18next';

export default class extends Component {

    render () {
        return (
            <section className={styles.wrapper}>
                <div className="container">
                    <h1 className={styles.title}>
                       <Trans i18nKey="partnership.secondBlock.title">Business Partnership</Trans>
                    </h1>

                    <h3 className={styles.text}>
                        <Trans i18nKey="partnership.secondBlock.text">
                            There are many ways of collaborating with Indacoin.
                            The Indacoin Partnership Program is for crypto-related companies that are willing to connect the world of
                            cryptocurrencies with traditional fiat money system to increase engagement in the crypto industry.
                        </Trans>
                    </h3>
                </div>
            </section>
        )
    }

}
