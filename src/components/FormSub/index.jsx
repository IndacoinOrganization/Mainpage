import React, { useState, useEffect } from "react";
// import Link from "@components/Link";
import "./styles.sass";
import { Trans } from 'react-i18next';

const MyForm = () => {
  return (
    <div className="wrapper_">
      <div className="main_text" style={{marginTop: 270}}>
        <h1 className="title_text"><Trans i18nKey="header.menu.titleMain">Buy your first crypto — it’s easy</Trans></h1>
        <span className="info_text"><Trans i18nKey="header.menu.titleMainUndo">Verified by 10M+ purchases per month</Trans></span>
      </div>
      <form className="mainform" action="https://gw.indacoin.io/" target="_blank">
        <div className="btn-container" style={{width: 240, margin: '0 auto'}}>                
          <button onClick={() => window.open("https://gw.indacoin.io/")}><Trans i18nKey="header.menu.button">Buy crypto</Trans></button>
        </div>
      </form>
    </div>
  );
};

export default MyForm;
