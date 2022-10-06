import React, {Component} from 'react';
import './styles.sass';
import {Trans} from 'react-i18next';

import Slider from "react-slick";
import Slide from './Slide';



export default class extends Component {

    render () {

        const settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 5,
            initialSlide: 0,
            arrows: false,
            responsive: [
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true,
                        initialSlide: 2,
                    }
                },
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true,
                        initialSlide: 2,
                    }
                },
            ]
        };

        return (
            <section className="wrapper">
                <div className="container">
                    <h2 className="title">
                        <Trans i18nKey="partnership.thirdBlock.title">
                            Why partner with Indacoin?
                        </Trans>
                    </h2>

                    <div className="sliderContainer partnershipSlider">

                        <Slider {...settings}>
                            <Slide
                                image={'../../../../src/assets/image/partnershipSecurity.svg'}
                                title="partnership.thirdBlock.slides.security.title"
                                text="partnership.thirdBlock.slides.security.text"
                                aria-labelledby="circle"
                            />

                             <Slide
                          
                                image={'../../../../src/assets/image/partnershipStability.svg'}
                                title="partnership.thirdBlock.slides.stability.title"
                                text="partnership.thirdBlock.slides.stability.text"
                            />

                            <Slide
                                image={'../../../../src/assets/image/partnershipSpeed.svg'}
                                title="partnership.thirdBlock.slides.speed.title"
                                text="partnership.thirdBlock.slides.speed.text"
                                active={true}
                            />

                            <Slide
                                image={'../../../../src/assets/image/partnershipFreedom.svg'}
                                title="partnership.thirdBlock.slides.freedom.title"
                                text="partnership.thirdBlock.slides.freedom.text"
                            />

                            <Slide
                                image={'../../../../src/assets/image/partnershipScale.svg'}
                                title="partnership.thirdBlock.slides.scale.title"
                                text="partnership.thirdBlock.slides.scale.text"
                            /> 
                        </Slider>

                    </div>
                </div>
            </section>
        )
    }

}
