import React from "react";
import "./features.css";
import { Trans } from 'react-i18next';

import portfolio from "@/images/portfolio_icon.png"
import get from "@/images/get_icon.png"
import icon9 from "@/images/icon9.png"
import icon3 from "@/images/icon3.png"
import icon7 from "@/images/icon7.png"
import icon4 from "@/images/icon4.png"
import icon5 from "@/images/icon5.png"
import icon2 from "@/images/icon2.png"
import protect from "@/images/protect_icon.png"

export const Features = () => {
  return (
    <div className="_container">
      <div className="features _container">
        <div className="features_content">
          <div className="content_box">
            <div className="content_box_inner">
              <img src={"@/images/portfolio_icon.png"}
                alt={'get portfolio'}
              />
              <div className="builder-image-sizer image-sizer" />
            </div>
            <div className="box_text">
              <span>
                Hold it to get passive income from your portfolio
              </span>
            </div>
          </div>
          <div className="content_box">
            <div className="content_box_inner">
              <img src={get}
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
            <div className="content_box_inner">
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
            <div className="content_box_inner">
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
            <div className="content_box_inner">
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
            <div className="content_box_inner">
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
            <div className="content_box_inner">
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
            <div className="content_box_inner">
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
            <div className="content_box_inner">
              <img src={protect}
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
