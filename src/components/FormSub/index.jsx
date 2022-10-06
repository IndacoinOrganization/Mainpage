import React, { useState, useEffect } from "react";
// import Link from "@components/Link";
import "./styles.sass";
import { withTranslation, Trans } from 'react-i18next';

const MyForm = () => {
  const intialValues = { email: "" };

  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {
    console.log(formValues);
  };

  // input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmitting(true);
  };

  const talkToUs = () => {
    return(
      <a href="https://indacoin.io/business#partnershipForm" target="_blank">Talk to us</a>
    )
  }

  // form validation handler
  const validate = (values) => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = "Cannot be blank";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid email format";
    }

    return errors;
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitting) {
      submit();
    }
  }, [formErrors]);

  return (
    <div className="wrapper">
      <div className="main_text">
        <h1 className="title_text"><Trans i18nKey="header.menu.titleMain">Buy your first crypto — it’s easy</Trans></h1>
        <span className="info_text"><Trans i18nKey="header.menu.titleMainUndo">Verified by 10M+ purchases per month</Trans></span>
      </div>

      <form className="mainform" action="https://gw.indacoin.io/" target="_blank" onSubmit={handleSubmit} noValidate>
        {/* <div className="form-row">         
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="off"
            value={formValues.email}
            placeholder="Enter your email"
            onChange={handleChange}
            className={formErrors.email && "input-error"}
          />
        
          {Object.keys(formErrors).length === 0 && isSubmitting && (
            <span className="success-msg">Form submitted successfully</span>
          )}
          {formErrors.email && (
            <span className="error">{formErrors.email}</span>
          )}
        </div> */}
            <div className="btn-container" style={{width: 240, margin: '0 auto'}}>                
              <button onClick={() => window.open("https://gw.indacoin.io/")}><Trans i18nKey="header.menu.button">Buy crypto</Trans></button>
            </div>
      </form>
    </div>
  );
};

export default MyForm;
