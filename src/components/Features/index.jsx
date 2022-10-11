import React from "react"
import "./styles.sass"
import icon1 from "@images/icon1.png"
import icon8 from "@images/icon8.png"
import icon9 from "@images/icon9.png"
import icon3 from "@images/icon3.png"
import icon7 from "@images/icon7.png"
import icon4 from "@images/icon4.png"
import icon5 from "@images/icon5.png"
import icon2 from "@images/icon2.png"
import icon6 from "@images/icon6.png"

export const Features = () => {
  return (
    <div className="_container">
      <div className="features _container">
        <div className="features_content">
          <div className="content_box">
            <div className="box_items">
            <img src={icon1}
                alt={'portfolio'}
              />
            </div>
            <div className="box_text">
              <span>
                Hold it to get passive income from your portfolio
              </span>
            </div>
          </div>
          <div className="content_box">
            <div className="box_items">
            <img src={icon8}
                alt={'Trade it to get'}
              />
            </div>
            <div className="box_text">
            <span>
                Trade it to get a speculative profit bigger than stocks
            </span>
            </div>
          </div>
          <div className="content_box">
            <div className="box_items">
            <img src={icon9}
                alt={'deposit in the bank'}
              />
            </div>
            <div className="box_text">
              <span>
                Stake it as if it’s a deposit in the bank but with higher rate
              </span>
            </div>
          </div>
          <div className="content_box">
            <div className="box_items">  
            <img src={icon3}
                  alet={'global transfers'}   
              />
            </div>
            <div className="box_text">
              <span>
              Make fast global transfers and pay online without extra fees
              </span>
            </div>
          </div>
          <div className="content_box">
            <div className="box_items">
            <img src={icon7}
                  alt={'live support'}
                />
            </div>
            <div className="box_text">
              <span>
                Get help from live support agents 24/7
              </span>
            </div>
          </div>
          <div className="content_box">
            <div className="box_items">
            <img src={icon4}
                  alt={'Visa & Mastercard'}
                />
            </div>
            <div className="box_text">
              <span>
                Buy crypto directly with Visa &amp; Mastercard
              </span>
            </div>
          </div>
          <div className="content_box">
            <div className="box_items">
            <img src={icon5}
            alt={'extra charges'}
                />
            </div>
            <div className="box_text">
              <span>
                Avoid hidden fees and extra charges
              </span>
            </div>
          </div>
          <div className="content_box">
            <div className="box_items">
            <img src={icon2}
                  alt={'bonuses'}
                />
            </div>
            <div className="box_text">
              <span>
                Receive bonuses for every purchase
              </span>
            </div>
          </div>
          <div className="content_box">
            <div className="box_items">
            <img src={icon6}
                  alt={'security system'}
                />
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
