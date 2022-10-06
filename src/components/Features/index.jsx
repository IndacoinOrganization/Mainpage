import React from "react";
import "./styles.sass";
import icon1 from "../../assets/images/icon1.png"
import icon8 from "../../assets/images/icon8.png"
import icon9 from "../../assets/images/icon9.png"
import icon3 from "../../assets/images/icon3.png"
import icon7 from "../../assets/images/icon7.png"
import icon4 from "../../assets/images/icon4.png"
import icon5 from "../../assets/images/icon5.png"
import icon2 from "../../assets/images/icon2.png"
import icon6 from "../../assets/images/icon6.png"

export const Features = () => {
  return (
    <div className="_container">
      <div className="features _container">
        <div className="features_content">
          <div className="content_box">
            <div className="div-3">
            <img src={icon1}
                alt={'portfolio'}
              />
              <div className="builder-image-sizer image-sizer"/>
            </div>
            <div className="box_text">
              <span>
                Hold it to get passive income from your portfolio
                </span>
            </div>
          </div>
          <div className="content_box">
            <div className="div-6">
            <img src={icon8}
                alt={'Trade it to get'}
              />
              <div className="builder-image-sizer image-sizer" />
            </div>
            <div className="box_text">
            <span>
                Trade it to get a speculative profit bigger than stocks
                </span>
            </div>
          </div>
          <div className="content_box">
            <div className="div-9">
            <img src={icon9}
                alt={'deposit in the bank'}
              />
              <div className="builder-image-sizer image-sizer" />
            </div>
            <div className="box_text">
              <span>
                Stake it as if it’s a deposit in the bank but with higher rate
              </span>
            </div>
          </div>
          <div className="content_box">
            <div className="div-12">  
            <img src={icon3}
                  alet={'global transfers'}   
              />
              <div className="builder-image-sizer image-sizer" />
            </div>
            <div className="box_text">
              <span>
              Make fast global transfers and pay online without extra fees
              </span>
            </div>
          </div>
          <div className="content_box">
            <div className="div-15">
            <img src={icon7}
                  alt={'live support'}
                />
              <div className="builder-image-sizer image-sizer" />
            </div>
            <div className="box_text">
              <span>
                Get help from live support agents 24/7
                </span>
            </div>
          </div>
          <div className="content_box">
            <div className="div-18">
            <img src={icon4}
                  alt={'Visa & Mastercard'}
                />
              <div className="builder-image-sizer image-sizer" />
            </div>
            <div className="box_text">
              <span>
                Buy crypto directly with Visa &amp; Mastercard
                </span>
            </div>
          </div>
          <div className="content_box">
            <div className="div-21">
            <img src={icon5}
            alt={'extra charges'}
                />
              <div className="builder-image-sizer image-sizer" />
            </div>
            <div className="box_text">
              <span>
                Avoid hidden fees and extra charges
                </span>
            </div>
          </div>
          <div className="content_box">
            <div className="div-24">
            <img src={icon2}
                  alt={'bonuses'}
                />
              <div className="builder-image-sizer image-sizer" />
            </div>
            <div className="box_text">
              <span>
                Receive bonuses for every purchase
                </span>
            </div>
          </div>
          <div className="content_box">
            <div className="div-27">
            <img src={icon6}
                  alt={'security system'}
                />
              <div className="builder-image-sizer image-sizer" />
            </div>
            <div className="box_text">
              <span>
                Protect your funds &amp; data with our AI powered security system
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};