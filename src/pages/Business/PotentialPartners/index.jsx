import React, {Component} from 'react';
import "./styles.sass";
import {Trans} from 'react-i18next';

import massMedia from '@images/massMedia.svg'
import cryptoCurrencyIssuer from '@images/cryptoCurrencyIssuer.svg'

import ImageTitleCard from '@components/ImageTitleCard';

export default class extends Component {
    render () {
        return (
            <section className={'PotentialPartners'}>
                <span className={'title'}>
                    <Trans i18nKey="partnership.potential.title">
                        Potential partners
                    </Trans>
                </span>

                <div className={'contentWrapper'}>
                    <div className={'raw'}>
                        <ImageTitleCard
                            className={'card'}
                            image={massMedia}
                            title={
                                <Trans i18nKey="partnership.potential.cards.media.title">
                                    Mass media
                                </Trans>
                            }
                        >
                            <span className={'cardText'}>
                                <Trans i18nKey="partnership.potential.cards.media.text">
                                    Monetize your traffic with the reliable and recognizable Indacoin brand.
                                    High payouts in 3 currencies to choose from. Quick installation.
                                    Individual conditions for large volumes.
                                </Trans>
                            </span>
                        </ImageTitleCard>

                        <ImageTitleCard
                            className={'card'}
                            image={cryptoCurrencyIssuer}
                            title={
                                <Trans i18nKey="partnership.potential.cards.cryptocurrency.title">
                                    Cryptocurrency Issuer (ICO, IEO)
                                </Trans>
                            }
                        > 
                            <span className={'cardText'}>
                                <Trans i18nKey="partnership.potential.cards.cryptocurrency.text">
                                    Increase token liquidity. <br/>
                                    The easiest and fastest way to buy your token with the ability to compensate 100%
                                    of the commission when making a payment.
                                </Trans>
                            </span>
                        </ImageTitleCard>
                    </div>
                </div>
            </section>
        );
    }
}
