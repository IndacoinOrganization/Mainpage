import React, { useState } from "react";
import styles from "./styles.sass";
import Modal from "react-modal";
import axios from "axios";
import { withTranslation, Trans } from "react-i18next";
import closeVerificationImg from "@/assets/image/closeVerification.svg"
Modal.setAppElement("#root");

const VerificationBlock = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");
  const [isVerification, setIsVerification] = useState(false);

  console.log(value);

  function toggleModal() {
    
    axios
      .get(
        `https://indacoin.io/api/v1/UserVerification/UserVerification?ContactInfo=${value}`
      )
      .then((res) => {
        console.log(res.data.data.userIsVerified);
        setIsVerification(res.data.data.userIsVerified);
        setIsOpen(!isOpen);
      });
  }

  function onInputChange(e) {
    setValue(e.target.value);
  }
  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src={isVerification
                ? "@/assets/image/Verificatied.svg"
                : "@/assets/image/warningIcon.svg"}
            />
            <p
              className={styles.modalTitle}
              style={
                isVerification ? { color: "#3463F8" } : { color: "#FF4444" }
              }
            >
              {isVerification ? <Trans i18nKey="verification.falseModalTitle">Non-Official Channel</Trans> : <Trans i18nKey="verification.trueModalTitle">Official Channel</Trans>}
            </p>
          </div>
          <div>
            {isVerification ? (
              <p className={styles.textBlock}>
                <Trans i18nKey="verification.modalTrueText" values={{value: value}}>
                  The {value} you inquired is the official channel of Indacoin
                </Trans>
              </p>
            ) : (
              <p className={styles.textBlock}>
                <Trans i18nKey="verification.modalFalseText" values={{value: value}}
                components={[
                  <span style={{ color: "#FF4444" }}>{value}</span>,
                  <span style={{ color: "#FF4444" }}>NOT</span>
              ]}>
                The <span style={{ color: "#FF4444" }}>{value}</span> you
                inquired is <span style={{ color: "#FF4444" }}>NOT</span> the
                official channel of Indacoin. Please pay attention to your
                assets and protect your personal information
                <br />
                <br />
                You can verify the content and re-query.
                </Trans>
              </p>
            )}
          </div>
          <div
            style={{ display: "flex", justifyContent: "center", marginTop: 58 }}
          >
            <button onClick={toggleModal} className={styles.buttonModal}>
              <Trans i18nKey="verification.confirm">
                Confirm
              </Trans>
              
            </button>
          </div>
          <img
            onClick={toggleModal}
            style={{
              position: "absolute",
              top: "24px",
              right: "24px",
              cursor: "pointer",
            }}
            src={closeVerificationImg}
          />
        </div>
      </Modal>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "95%",
          margin: "0 auto",
        }}
      >
        <div>
          <div>
            <p className={styles.mainTitle}>
              <Trans i18nKey="verification.mainTitle">
                Indacoin Official Verification
                </Trans></p>
            <p className={styles.subTitle}>
              <Trans i18nKey="verification.subTitle">
                Please make sure that you are visiting{' '}
              </Trans>
              {' '}
              <a
                href="https://indacoin.io/buy-bitcoin-with-card"
                style={{ color: "#3463F8" }}
              >
                https://www.indacoin.io
              </a>
            </p>
          </div>
        </div>
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div className={styles.searchBlock}>
              <input
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    toggleModal();
                  }
                }}
                onChange={onInputChange}
                type="text"
                className={styles.inputSearch}
                placeholder={props.t('verification.placeholder')}
              />
              <img
                onClick={value ? toggleModal : null}
                src={"@/assets/image/searchVerification.svg"}
              />
            </div>

            <p className={styles.subTitleSearch}>
              <Trans i18nKey="verification.text">
                To prevent fraud in the name of Indacoin, you can confirm
                whether the channel is an official channel or not. Including
                Twitter, Telegram, LinkedIn.
              </Trans>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default withTranslation()(VerificationBlock);
