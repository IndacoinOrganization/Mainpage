import React, {Component} from 'react';
import './styles.sass';
import Background from '@/images/partnershipFirstBlock.svg';
import {Trans} from 'react-i18next';
import Scroll from 'react-scroll';

const background = {
    backgroundImage: 'url(' + Background + ')',
};

export default class extends Component
{

    constructor (props) {
        super(props);

        this.formId = props.formId || null;
    }
    
    /**
     * Animated scroll to formId
     * @param {object} event
     */
    scroll (event) {
        if (this.formId == null) {
            return false;
        }

        event.preventDefault();

        const offsetTop = document.getElementById(this.formId).offsetTop;

        Scroll.animateScroll.scrollTo(offsetTop, {
            duration: 200,
            delay: 20,
        });
    }

    render () {
        return (
            <section className="wrapper" style={background}>
                <div className="titleContainer">
                    <span>
                        <Trans i18nKey="partnership.firstBlock.title">
                            Grow and scale your <br/> business with us
                        </Trans>
                    </span>

                    <ul>
                        <li>
                            <Trans i18nKey="partnership.firstBlock.firstPoint">
                                Do best service for 5 years
                             </Trans>
                        </li>
                        <li>
                            <Trans i18nKey="partnership.firstBlock.secondPoint">
                                3-day integration with a full technical support
                            </Trans>
                        </li>
                        <li>
                            <Trans i18nKey="partnership.firstBlock.thirdPoint">
                                Best rates - best conditions
                            </Trans>
                        </li>
                    </ul>

                    <button id="BecomeAPartner" onClick={this.scroll.bind(this)}>
                        <Trans i18nKey="partnership.firstBlock.button">
                            Become a partner
                        </Trans>
                    </button>

                </div>
            </section>
        );
    }
}
