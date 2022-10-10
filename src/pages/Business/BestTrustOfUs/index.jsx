import React, {Component} from 'react';
import  './styles.sass';
import Slider from "react-slick";
import {Trans} from 'react-i18next';

import rectangleDotActiveGr from '@/assets/image/rectangleDotActiveGr.svg'
import rectangleDotLight from  '@/assets/image/rectangleDotLight.svg'










export default class extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dotIndex: 0
        }
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
            <section className="wrapper">
                <span className="title">
                    <Trans i18nKey="partnership.trust.title">
                        The best trust us
                    </Trans>
                </span>

                <div className="sliderContainer bestTrustSlider">
                    <Slider {...settings}>

                        <div className="slide">
                            <div>
                                <a href="https://www.okex.com/" target="_blank">
                                    <img src={'../../../../src/assets/images/partners/okexlogowebsite.png'} alt={'okex'}/>
                                </a>
                            </div>
                        </div>
                        <div className="slide small">
                            <div>
                                <a href="https://changelly.com/" target="_blank">
                                     <img src={'../../../../src/assets/images/partners/changelly.svg'} alt={'changelly'}/> 
                                </a>
                            </div>
                        </div>
                        <div className="slide small">
                            <div>
                                <a href="https://www.bestchange.com/" target="_blank">
                                    <img src={'../../../../src/assets/images/partners/bestchange.svg'}  alt={'bestchange'}/>
                                </a>
                            </div>
                        </div>
                        <div className="slide">
                            <div>
                                <a href="https://www.cryptodaily.co.uk/" target="_blank">
                               <img src={'../../../../src/assets/images/partners/cryptodaily.png'} alt={'cryptodaily'}/> 
                                </a>
                            </div>
                        </div>
                        <div className="slide">
                            <div>
                                <a href="https://wavesplatform.com/" target="_blank">
                               <img src={'../../../../src/assets/images/partners/waves.svg'} alt={'waves'}/>
                                </a>
                            </div>
                        </div>
                        <div className="slide smallMobile">
                            <div>
                                <a href="https://www.bithumb.com/" target="_blank">
                                   <img src={'../../../../src/assets/images/partners/bithumb.png'} alt={'bithumb'}/>
                                </a>
                            </div>
                        </div>
                        <div className="slide small">
                            <div>
                                <a href="https://coinswitch.co/" target="_blank">
                                    <img src={'../../../../src/assets/images/partners/coinswitch.png'} alt={'coinswitch'} height={10} width={10}/>
                                </a>
                            </div>
                        </div>
                        <div className="slide">
                            <div>
                                <a href="https://latoken.com/" target="_blank">
                                   <img src={'../../../../src/assets/images/partners/latoken.png'} alt={'coinswitch'}/> 
                                </a>
                            </div>
                        </div>
                        <div className="slide smallMobile">
                            <div>
                                <a href="https://magnumwallet.co/" target="_blank">
                               <img src={'../../../../src/assets/images/partners/magnum.png'} alt={'magnum'}/> 
                                </a>
                            </div>
                        </div>
                        <div className="slide huge">
                            <div>
                                <a href="https://www.thundercore.com/" target="_blank">
                            <img src={'../../../../src/assets/images/partners/thunderCore.svg'} alt={'thunderCore'}/>
                                </a>
                            </div>
                        </div>
                        <div className="slide small">
                            <div>
                                <a href="https://finex.cz/" target="_blank">
                            <img src={'../../../../src/assets/images/partners/finex.cz.png'}  alt={'finexcz'}/>
                                </a>
                            </div>
                        </div>
                        <div className="slide small">
                            <div>
                                <a href="https://fortunez.com" target="_blank">
                               <img src={'../../../../src/assets/images/partners/fortunez.com.png'}  alt={'fortunez'}/>
                                </a>
                            </div>
                        </div>
                        <div className="slide small">
                            <div>
                                <a href="https://cryptomood.com" target="_blank">
                                 <img src={'../../../../src/assets/images/partners/cryptoMood.svg'}  alt={'cryptoMood'}/>
                                </a>
                            </div>
                        </div>
                        <div className="slide">
                            <div>
                                <a href="https://fundshing.com/" target="_blank">
                                 <img src={'../../../../src/assets/images/partners/fundshing.png'} alt={'fundshing'} />
                                </a>
                            </div>
                        </div>
                        <div className="slide">
                            <div>
                                <a href="https://obyte.org/" target="_blank">
                               <img src={'../../../../src/assets/images/partners/byteball.svg'} alt={'byteball'} />
                                </a>
                            </div>
                        </div>
                        <div className="slide">
                            <div>
                                <a href="https://genesis.vision/" target="_blank">
                              <img src={'../../../../src/assets/images/partners/genesis-vision.svg'} alt={'genesisvision'} />
                                </a>
                            </div>
                        </div>
                        <div className="slide">
                            <div>
                                <a href="https://coincheckup.com/" target="_blank">
                      <img src={'../../../../src/assets/images/partners/coin-checkup.svg'}  alt={'coincheckup'}/>
                                </a>
                            </div>
                        </div>
                        <div className="slide">
                            <div>
                                <a href="https://trustwallet.com/" target="_blank">
                                     <img src={'../../../../src/assets/images/partners/trust-wallet.svg'} alt={'trustwallet'}/>
                                </a>
                            </div>
                        </div>
                        <div className="slide small">
                            <div>
                                <a href="https://cryptocoin.news/" target="_blank">
                                     <img src={'../../../../src/assets/images/partners/cryptocoins-news.svg'} alt={'cryptocoinsnews'}/>
                                </a>
                            </div>
                        </div>
                        <div className="slide small">
                            <div>
                                <a href="https://coinranking.com/" target="_blank">
                                     <img src={'../../../../src/assets/images/partners/coinranking.svg'} alt={'coinranking'}/>
                                </a>
                            </div>
                        </div>
                        <div className="slide small">
                            <div>
                                <a href="https://www.ewdn.com" target="_blank">
                                     <img src={'../../../../src/assets/images/partners/east-west.svg'} alt={'eastwest'}/>
                                </a>
                            </div>
                        </div>
                        <div className="slide">
                            <div>
                                <a href="https://kryll.io/" target="_blank">
                                <img src={'../../../../src/assets/images/partners/Kryll.svg'} alt={'kryll'}/>
                                </a>
                            </div>
                        </div>
                        <div className="slide">
                            <div>
                                <a href="https://cointelegraph.com/" target="_blank">
                                     <img src={'../../../../src/assets/images/partners/cointelegraph.svg'} alt={'cointelegraph'}/>
                                </a>
                            </div>
                        </div>
                        <div className="slide">
                            <div>
                                <a href="https://guarda.co/" target="_blank">
                                     <img src={'../../../../src/assets/images/partners/guarda-wallet.svg'} alt={'guardawwallet'}/>
                                </a>
                            </div>
                        </div>
                        <div className="slide">
                            <div>
                                <a href="https://phenom.team/" target="_blank">
                                     <img src={'../../../../src/assets/images/partners/phenom.svg'} alt={'phenom'} />
                                </a>
                            </div>
                        </div>
                        <div className="slide">
                            <div>
                                <a href="https://changenow.io/" target="_blank">
                                    <img src={'../../../../src/assets/images/partners/change-now.svg'} alt={'changenow'} />
                                </a>
                            </div>
                        </div>
                        <div className="slide extraSmall">
                            <div>
                                <a href="https://www.cryptopolitan.com/" target="_blank">
                                   <img src={'../../../../src/assets/images/partners/Cryptopolitian.svg'} alt={'cryptopolitian'} />
                                </a>
                            </div>
                        </div>
                        <div className="slide small">
                            <div>
                                <a href="https://coinpedia.org/pro/" target="_blank">
                               <img src={'@/images/partners/coinpedia.png'} alt={'cryptopolitian'} />
                                </a>
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>
        );
    }

}
