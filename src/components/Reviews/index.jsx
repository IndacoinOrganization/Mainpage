import React from "react";
import './styles.sass';
import { Trans } from 'react-i18next';
import Alexandro from "@images/Alexandro.png"
import locationReview from "@images/locationReview.png"
import blueStar from "@images/blueStar.png"
import Arnold from "@images/Arnold.png"
import Erik from "@images/Erik.png"
import Sofia from "@images/Sofia.png"

export const ReviewMy = () => {
  return (
    <div className="_container">
      <div className="reviewRow">
        <div className="reviewBlock">
          <div className="reviewTop" style={{ paddingBottom: 5 }}>
            <div>
              <img className="reviewImg" style={{ width: "66px", height: "66px", marginBottom: "1rem" }} src={Alexandro} />
            </div>
            <div style={{ padding: "0.5rem" }}>
              <div className="main__text" style={{ marginLeft: 10, marginBottom: 1 }}>Alexandro A</div>
              <div className="infoTop">
                <div style={{ display: "flex", marginLeft: 10 }}>
                  <img src={locationReview} style={{ marginRight: 5, marginTop: 2 }} width={13} height={13} />
                  <div className="main__text_data">IT</div>
                </div>
              </div>
            </div>
          </div>
          <div className="reviewRating">
            <div className="starsBlock">
              <img src={blueStar} width={21} />
              <img src={blueStar} width={21} />
              <img src={blueStar} width={21} />
              <img src={blueStar} width={21} />
              <img src={blueStar} width={21} />
            </div>
            <div className="main__text_data">6 days ago</div>
          </div>
              <div className="main__text"> <Trans i18nKey="header.menu.reviews1">The process was smooth and fast. I had to pass KYC process and I must say it was one of the simplest KYC I've ever seen. In the end, verification took about 5 minutes and then I immediately got my coins. Totally recommend</Trans></div>
        </div>
        <div className="reviewBlock">
          <div className="reviewTop">
            <div>
              <img className="reviewImg" src={Arnold} alt='avatar'/>
            </div>
            <div style={{ padding: "0.5rem" }}>
              <div className="main__text" style={{ marginLeft: 10, marginBottom: 1 }}>Arnold M</div>
              <div className="infoTop">
                <div style={{ display: "flex", marginLeft: 10 }}>
                  <img src={locationReview} style={{ marginRight: 5, marginTop: 2 }} width={13} height={13} />
                  <div className="main__text_data">UA</div>
                </div>
              </div>
            </div>
          </div>
          <div className="reviewRating">
            <div className="starsBlock">
              <div className="stars__block">
                <img src={blueStar} width={21} />
                <img src={blueStar} width={21} />
                <img src={blueStar} width={21} />
                <img src={blueStar} width={21} />
                <img src={blueStar} width={21} />
              </div>
            </div>
            <div className="main__text_data">Nov 25, 2021</div>
          </div>
              <div className="main__text"><Trans i18nKey="header.menu.reviews2">I received coins relatively fast, must admit that auto updates on the transaction status in TG were very helpful. Appreciate the efforts, hope they'll add more rare coins soon</Trans></div>
        </div>
      </div>
      <div className="reviewRow">
        <div className="reviewBlock">
          <div className="reviewTop" style={{ paddingBottom: 5 }}>
            <div>
              <img className="reviewImg" style={{ width: "66px", height: "66px", marginBottom: "1rem" }} src={Sofia} alt='avatar'/>
            </div>
            <div style={{ padding: "0.5rem" }}>
              <div className="main__text" style={{ marginLeft: 10, marginBottom: 1 }}>Eva Green</div>
              <div className="infoTop">
                <div style={{ display: "flex", marginLeft: 10 }}>
                  <img src={locationReview} style={{ marginRight: 5, marginTop: 2 }} width={13} height={13} />
                  <div className="main__text_data">BE</div>
                </div>
              </div>
            </div>
          </div>
          <div className="reviewRating">
            <div className="starsBlock" style={{ display: 'flex' }}>
              <img src={blueStar} width={21} />
              <img src={blueStar} width={21} />
              <img src={blueStar} width={21} />
              <img src={blueStar} width={21} />
              <div className="starsBlockB" style={{ width: 11, height: 22 }} />
            </div>
            <div className="main__text_data">Feb 7, 2022</div>
          </div>
              <div className="main__text"><Trans i18nKey="header.menu.reviews3">I had a very pleasant experience. I had troubles with verification, support was very polite and helpful. That's how all crypto services should operate!</Trans></div>
        </div>
        <div className="reviewBlock">
          <div className="reviewTop" style={{ paddingBottom: 5 }}>
            <div>
              <img className="reviewImg" style={{ width: "66px", height: "66px", marginBottom: "1rem" }} src={Erik} alt='avatar'/>
            </div>
            <div style={{ padding: "0.5rem" }}>
              <div className="main__text" style={{ marginLeft: 10, marginBottom: 1 }}>Erik Jok</div>
              <div className="infoTop">
                <div style={{ display: "flex", marginLeft: 10 }}>
                  <img src={locationReview} style={{ marginRight: 5, marginTop: 2 }} width={13} height={13} />
                  <div className="main__text_data">FI</div>
                </div>
              </div>
            </div>
          </div>
          <div className="reviewRating">
            <div className="starsBlock">
              <img src={blueStar} />
              <img src={blueStar} />
              <img src={blueStar} />
              <img src={blueStar} />
              <img src={blueStar} />
            </div>
            <div className="main__text_data">4 days ago</div>
          </div>
              <div className="main__text"><Trans i18nKey="header.menu.reviews4">I tried this services and was very glad about it. Unfortunately, there was a bit of delay but when I contacted support they resolved the issue and compensated for the delay. That means something. I will try this again when I need to load on crypto!</Trans></div>
        </div>
      </div>
    </div>
  );
};

