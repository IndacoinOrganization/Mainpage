import React, {Component} from 'react';
import styles from './styles.scss';
import Link from '@components/Link';
import {Trans} from 'react-i18next';

export default class extends Component {
    render() {
        return (
            <div className={styles.wrapper}>
                <main>
                    <div className={styles.imgContainer}>
                        <img src={require('@images/404.svg')} />
                    </div>
                    <div className={styles.textContainer}>
                        <span className={styles.title}>404</span>
                        <span className={styles.smallTitle}>
                            <Trans i18nKey="404.smallTitle">
                                Looks like you’re lost"
                            </Trans>
                        </span>
                        <span className={styles.text}>
                            <Trans i18nKey="404.text">
                                The page you are looking for not available!
                            </Trans>
                        </span>
                        <div className={styles.btnContainer}>
                            <Link to="" className={styles.button} forceUpdate={true}>
                                <span>
                                    <Trans i18nKey="404.button">
                                        Go to homepage
                                    </Trans>
                                </span>
                                <img src={require('@images/blueArrowRight.svg')} />
                            </Link>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}
