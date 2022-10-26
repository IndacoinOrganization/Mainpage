import React, {Component} from 'react';
import styles from './styles.sass';
import Link from '@components/Link';
import {Trans} from 'react-i18next';
import blueArrowRight from '@images/blueArrowRight.svg'
import img404 from '@images/404.svg'

export default class extends Component {
    render() {
        return (
            <div className='wrapper'>
                <main>
                    <div className='imgContainer'>
                        <img src={img404} />
                    </div>
                    <div className='textContainer'>
                        <span className='title'>404</span>
                        <span className='smallTitle'>
                            <Trans i18nKey="404.smallTitle">
                                Looks like you’re lost"
                            </Trans>
                        </span>
                        <span className='text'>
                            <Trans i18nKey="404.text">
                                The page you are looking for not available!
                            </Trans>
                        </span>
                        <div className='btnContainer'>
                            <Link to="" className='button' forceUpdate={true}>
                                <span>
                                    <Trans i18nKey="404.button">
                                        Go to homepage
                                    </Trans>
                                </span>
                                <img src={blueArrowRight} />
                            </Link>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}
