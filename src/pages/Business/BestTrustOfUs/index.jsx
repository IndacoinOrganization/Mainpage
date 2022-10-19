import React, {Component} from 'react';
import './styles.sass';
import Slider from "react-slick";
import {Trans} from 'react-i18next';

import rectangleDotActiveGr from '@images/partners/rectangleDotActiveGr.svg'
import rectangleDotLight from '@images/partners/rectangleDotLight.svg'

export default class extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dotIndex: 0
        }
    }

    getImgPNG (name) {
        const img = new URL(`../../../assets/images/partners/${name}.png`, import.meta.url).href
        return img || null 
    }
    getImgSVG (name) {
        const img = new URL(`../../../assets/images/partners/${name}.svg`, import.meta.url).href
        return img || null 
    }

    render() {

        const state = this.state;
        const settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 5,
            arrows: true,
            beforeChange: (prev, next) => {
                this.setState({
                    dotIndex: next / 5
                });
            },
            customPaging: function(i) {
                if(i === state.dotIndex)
                    return (
                        <img src={rectangleDotActiveGr} width={20} height={15} />
                    );
                else
                    return (
                        <img src={rectangleDotLight} width={20} height={15} />
                    );
            },
            dotsClass: "slick-dots slick-thumb",
            responsive: [
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true,
                        arrows: false,
                        beforeChange: (prev, next) => {
                            this.setState({
                                dotIndex: next / 3
                            });
                        },
                    }
                },
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true,
                        initialSlide: 2,
                        beforeChange: (prev, next) => {
                            this.setState({
                                dotIndex: next / 3
                            });
                        },
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true,
                        initialSlide: 2,
                        beforeChange: (prev, next) => {
                            this.setState({
                                dotIndex: next / 3
                            });
                        },
                    }
                }
            ],
        };

        return (
            <section className={'BestTrustOfUs'}>
                <span className={'title'}>
                    <Trans i18nKey="partnership.trust.title">
                        The best trust us
                    </Trans>
                </span>

                <div className={'sliderContainer bestTrustSlider'}>
                    <Slider {...settings}>

                        <div className={'slide'}>
                            <div>
                                <a href="https://www.okex.com/" target="_blank">
                                    <img src={this.getImgPNG('okexlogowebsite')} alt={'okex'} />
                                </a>
                            </div>
                        </div>
                        <div className={'slide small'}>
                            <div>
                                <a href="https://changelly.com/" target="_blank">
                                    <img src={this.getImgSVG('changelly')} alt={'changelly'}/>
                                </a>
                            </div>
                        </div>
                        <div className={'slide small'}>
                            <div>
                                <a href="https://www.bestchange.com/" target="_blank">
                                    <img src={this.getImgSVG('bestchange')}  alt={'bestchange'}/>
                                </a>
                            </div>
                        </div>
                        <div className={'slide'}>
                            <div>
                                <a href="https://www.cryptodaily.co.uk/" target="_blank">
                                    <img src={this.getImgPNG('cryptodaily')} alt={'cryptodaily'}/>
                                </a>
                            </div>
                        </div>
                        <div className={'slide'}>
                            <div>
                                <a href="https://wavesplatform.com/" target="_blank">
                                    <img src={this.getImgSVG('waves')} alt={'waves'}/>
                                </a>
                            </div>
                        </div>
                        <div className={'slide smallMobile'}>
                            <div>
                                <a href="https://www.bithumb.com/" target="_blank">
                                    <img src={this.getImgPNG('bithumb')} alt={'bithumb'}/>
                                </a>
                            </div>
                        </div>
                        <div className={'slide small'}>
                            <div>
                                <a href="https://coinswitch.co/" target="_blank">
                                    <img src={this.getImgPNG('coinswitch')} alt={'coinswitch'}/>
                                </a>
                            </div>
                        </div>
                        <div className={'slide'}>
                            <div>
                                <a href="https://latoken.com/" target="_blank">
                                    <img src={this.getImgPNG('latoken')} alt={'coinswitch'}/>
                                </a>
                            </div>
                        </div>
                        <div className={'slide huge smallMobile'}>
                            <div>
                                <a href="https://magnumwallet.co/" target="_blank">
                                    <img src={this.getImgPNG('magnum')} alt={'magnum'}/>
                                </a>
                            </div>
                        </div>
                        <div className={'slide huge'}>
                            <div>
                                <a href="https://www.thundercore.com/" target="_blank">
                                    <img src={this.getImgSVG('thunderCore')} alt={'thunderCore'}/>
                                </a>
                            </div>
                        </div>
                        <div className={'slide small'}>
                            <div>
                                <a href="https://finex.cz/" target="_blank">
                                    <img src={this.getImgPNG('finex.cz')}  alt={'finexcz'}/>
                                </a>
                            </div>
                        </div>
                        <div className={'slide small'}>
                            <div>
                                <a href="https://fortunez.com" target="_blank">
                                    <img src={this.getImgPNG('fortunez.com')}  alt={'fortunez'}/>
                                </a>
                            </div>
                        </div>
                        <div className={'slide small'}>
                            <div>
                                <a href="https://cryptomood.com" target="_blank">
                                    <img src={this.getImgSVG('cryptoMood')}  alt={'cryptoMood'}/>
                                </a>
                            </div>
                        </div>
                        <div className={'slide'}>
                            <div>
                                <a href="https://fundshing.com/" target="_blank">
                                    <img src={this.getImgPNG('fundshing')} alt={'fundshing'} />
                                </a>
                            </div>
                        </div>
                        <div className={'slide'}>
                            <div>
                                <a href="https://obyte.org/" target="_blank">
                                    <img src={this.getImgSVG('byteball')} alt={'byteball'} />
                                </a>
                            </div>
                        </div>
                        <div className={'slide'}>
                            <div>
                                <a href="https://genesis.vision/" target="_blank">
                                    <img src={this.getImgSVG('genesis-vision')} alt={'genesisvision'} />
                                </a>
                            </div>
                        </div>
                        <div className={'slide'}>
                            <div>
                                <a href="https://coincheckup.com/" target="_blank">
                                    <img src={this.getImgSVG('coin-checkup')}  alt={'coincheckup'}/>
                                </a>
                            </div>
                        </div>
                        <div className={'slide'}>
                            <div>
                                <a href="https://trustwallet.com/" target="_blank">
                                    <img src={this.getImgSVG('trust-wallet')} alt={'trustwallet'}/>
                                </a>
                            </div>
                        </div>
                        <div className={'slide small'}>
                            <div>
                                <a href="https://cryptocoin.news/" target="_blank">
                                    <img src={this.getImgSVG('cryptocoins-news')} alt={'cryptocoinsnews'}/>
                                </a>
                            </div>
                        </div>
                        <div className={'slide small'}>
                            <div>
                                <a href="https://coinranking.com/" target="_blank">
                                    <img src={this.getImgSVG('coinranking')} alt={'coinranking'}/>
                                </a>
                            </div>
                        </div>
                        <div className={'slide small'}>
                            <div>
                                <a href="https://www.ewdn.com" target="_blank">
                                    <img src={this.getImgSVG('east-west')} alt={'eastwest'}/>
                                </a>
                            </div>
                        </div>
                        <div className={'slide'}>
                            <div>
                                <a href="https://kryll.io/" target="_blank">
                                    <img src={this.getImgSVG('Kryll')} alt={'kryll'}/>
                                </a>
                            </div>
                        </div>
                        <div className={'slide'}>
                            <div>
                                <a href="https://cointelegraph.com/" target="_blank">
                                    <img src={this.getImgSVG('cointelegraph')} alt={'cointelegraph'}/>
                                </a>
                            </div>
                        </div>
                        <div className={'slide'}>
                            <div>
                                <a href="https://guarda.co/" target="_blank">
                                    <img src={this.getImgSVG('guarda-wallet')} alt={'guardawwallet'}/>
                                </a>
                            </div>
                        </div>
                        <div className={'slide'}>
                            <div>
                                <a href="https://phenom.team/" target="_blank">
                                    <img src={this.getImgSVG('phenom')} alt={'phenom'} />
                                </a>
                            </div>
                        </div>
                        <div className={'slide'}>
                            <div>
                                <a href="https://changenow.io/" target="_blank">
                                    <img src={this.getImgSVG('change-now')} alt={'changenow'} />
                                </a>
                            </div>
                        </div>
                        <div className={'slide extraSmall'}>
                            <div>
                                <a href="https://www.cryptopolitan.com/" target="_blank">
                                    <img src={this.getImgSVG('Cryptopolitian')} alt={'cryptopolitian'} />
                                </a>
                            </div>
                        </div>
                        <div className={'slide small'}>
                            <div>
                                <a href="https://coinpedia.org/pro/" target="_blank">
                                    <img src={this.getImgPNG('coinpedia')} alt={'cryptopolitian'} />
                                </a>
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>
        );
    }

}
