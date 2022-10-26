import React from "react";
import "./styles.sass";
import { withTranslation, Trans } from 'react-i18next';
import portfolio from "@images/portfolio.png"
import trade from "@images/trade.png"
import deposit from "@images/deposit.png"
import transfers from "@images/transfers.png"
import support from "@images/support.png"
import cards from "@images/cards.png"
import charges from "@images/charges.png"
import bonuses from "@images/bonuses.png"
import security from "@images/security.png"

export const Features = () => {
  return (
    <div className="_container">
      <div className="features _container">
        <div className="features_content">
          <div className="content_box">
            <div className="div-3">
            <img src={portfolio}
                alt={'portfolio'}
              />
              <div className="builder-image-sizer image-sizer"/>
            </div>
            <div className="box_text">
              <span>
              <Trans i18nKey="home.features.featurestext.feature0">
                Hold it to get passive income from your portfolio
                </Trans>
                </span>
            </div>
          </div>
          <div className="content_box">
            <div className="div-6">
            <img src={trade}
                alt={'Trade it to get'}
              />
              <div className="builder-image-sizer image-sizer" />
            </div>
            <div className="box_text">
            <span>
            <Trans i18nKey="home.features.featurestext.feature1">
                Trade it to get a speculative profit bigger than stocks
                </Trans>
                </span>
            </div>
          </div>
          <div className="content_box">
            <div className="div-9">
            <img src={deposit}
                alt={'deposit in the bank'}
              />
              <div className="builder-image-sizer image-sizer" />
            </div>
            <div className="box_text">
              <span>
              <Trans i18nKey="home.features.featurestext.feature2">
                Stake it as if it’s a deposit in the bank but with higher rate
                </Trans>
              </span>
            </div>
          </div>
          <div className="content_box">
            <div className="div-12">  
            <img src={transfers}
                  alt={'global transfers'}   
              />
              <div className="builder-image-sizer image-sizer" />
            </div>
            <div className="box_text">
              <span>
              <Trans i18nKey="home.features.featurestext.feature3">
              Make fast global transfers and pay online without extra fees
              </Trans>
              </span>
            </div>
          </div>
          <div className="content_box">
            <div className="div-15">
            <img src={support}
                  alt={'live support'}
                />
              <div className="builder-image-sizer image-sizer" />
            </div>
            <div className="box_text">
              <span>
              <Trans i18nKey="home.features.featurestext.feature4">
                Get help from live support agents 24/7
                </Trans>
                </span>
            </div>
          </div>
          <div className="content_box">
            <div className="div-18">
            <img src={cards}
                  alt={'Visa & Mastercard'}
                />
              <div className="builder-image-sizer image-sizer" />
            </div>
            <div className="box_text">
              <span>
              <Trans i18nKey="home.features.featurestext.feature5">
                Buy crypto directly with Visa &amp; Mastercard
                </Trans>
                </span>
            </div>
          </div>
          <div className="content_box">
            <div className="div-21">
            <img src={charges}
            alt={'extra charges'}
                />
              <div className="builder-image-sizer image-sizer" />
            </div>
            <div className="box_text">
              <span>
              <Trans i18nKey="home.features.featurestext.feature6">
                Avoid hidden fees and extra charges
                </Trans>
                </span>
            </div>
          </div>
          <div className="content_box">
            <div className="div-24">
            <img src={bonuses}
                  alt={'bonuses'}
                />
              <div className="builder-image-sizer image-sizer" />
            </div>
            <div className="box_text">
              <span>
              <Trans i18nKey="home.features.featurestext.feature7">
                Receive bonuses for every purchase
                </Trans>
                </span>
            </div>
          </div>
          <div className="content_box">
            <div className="div-27">
            <img src={security}
                  alt={'security system'}
                />
              <div className="builder-image-sizer image-sizer" />
            </div>
            <div className="box_text">
              <span>
              <Trans i18nKey="home.features.featurestext.feature8">
                Protect your funds &amp; data with our AI powered security system
                </Trans>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
