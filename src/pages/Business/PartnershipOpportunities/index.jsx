import React, {Component} from 'react';
import './styles.sass';
import SildeUpDownCard from '@/components/SlideUpDownCard';
import {Trans} from 'react-i18next';
import Scroll from 'react-scroll';
import { Link }  from 'react-router-dom';
export default class extends Component {
    constructor (props) {
        super(props);
        this.formId = props.formId || null;
    }
    /**
     * Animated scroll to formId
     * @param {object} event
     */
    scroll (event) {
        if (this.formId == null) return false
        event.preventDefault();
        const offsetTop = document.getElementById(this.formId).offsetTop;
        Scroll.animateScroll.scrollTo(offsetTop, {
            duration: 500,
            delay: 100,
        });
    }
    render () {
        return (
            <section className="wrapper" >
                <span className="title">
                    <Trans i18nKey="partnership.opportunities.title">
                        Opportunities for partners
                    </Trans>
                </span>
                <div className="slidesContainer">
                    <div className="cardContainer">
                        <SildeUpDownCard
                          title={
                            <Trans i18nKey="partnership.opportunities.slides.listToken.title">
                                List your token
                            </Trans>
                          }
                          button={
                            <Trans i18nKey="partnership.opportunities.moreBtn">
                                More details
                            </Trans>
                          }
                          onClick={ this.scroll.bind(this) }
                        >
                            <ul className="cardList">
                                <li>
                                    <Trans i18nKey="partnership.opportunities.slides.listToken.points.first">
                                        Your token will be available for instant purchase on
                                        Visa / Mastercard cards on three platforms: Web, Android and iOS.
                                    </Trans>
                                </li>
                                <li>
                                    <Trans i18nKey="partnership.opportunities.slides.listToken.points.second">
                                        Additional liquidity.
                                    </Trans>
                                </li>
                                <li>
                                    <Trans i18nKey="partnership.opportunities.slides.listToken.points.third">
                                        An information guide for the media and token holders.
                                    </Trans>
                                </li>
                                <li>
                                    <Trans i18nKey="partnership.opportunities.slides.listToken.points.fourth">
                                        Payment for the services of our partners with your token.
                                    </Trans>
                                </li>
                            </ul>
                        </SildeUpDownCard>
                    </div>

                    <div className="cardContainer">
                      <SildeUpDownCard
                          title={
                              <Trans i18nKey="partnership.opportunities.slides.api.title">
                                  API Integration
                              </Trans>
                          }
                          button={
                              <Trans i18nKey="partnership.opportunities.moreBtn">
                                  More details
                              </Trans>
                          }
                          onClick={this.scroll.bind(this)}
                      >
                          <span className="cardTitle">
                              <Trans i18nKey="partnership.opportunities.slides.api.text">
                                  Discover a huge list of features with our flexible API.
                              </Trans>
                          </span>


                          <ul className="cardList">
                              <li>
                                  <Trans i18nKey="partnership.opportunities.slides.api.points.first">
                                      Acceptance of fiat cryptocurrency payments.
                                  </Trans>
                              </li>
                              <li>
                                  <Trans i18nKey="partnership.opportunities.slides.api.points.second">
                                      Resale of tokens.
                                  </Trans>
                              </li>
                              <li>
                                  <Trans i18nKey="partnership.opportunities.slides.api.points.third">
                                      Replenishment of crypto wallets from Visa / MS cards.
                                  </Trans>
                              </li>
                              <li>
                                  <Trans i18nKey="partnership.opportunities.slides.api.points.fourth">
                                      An endless list of your ideas and ideas that you can implement with our API.
                                  </Trans>
                              </li>
                          </ul>
                      </SildeUpDownCard>
                    </div>
                    <div className="cardContainer">
                        <SildeUpDownCard
                            title={
                                <Trans i18nKey="partnership.opportunities.slides.processing.title">
                                    Widget
                                </Trans>
                            }
                            button={
                                <Trans i18nKey="partnership.opportunities.moreBtn">
                                    More details
                                </Trans>
                            }
                            onClick={this.scroll.bind(this)}
                        >
                            <span className="cardTitle">

                                <Trans i18nKey="partnership.opportunities.slides.processing.text">
                                    Do you want to accept payments in rubles, dollars
                                    and euros without loss on exchange commissions?
                                </Trans>
                            </span>

                            <ul className="cardList">
                                <li>
                                    <Trans i18nKey="partnership.opportunities.slides.processing.points.first">
                                        Send a request and receive an offer on the processing of your project.
                                    </Trans>

                                </li>
                            </ul>
                        </SildeUpDownCard>
                    </div>
                </div>
            </section>
        );
    }

}
