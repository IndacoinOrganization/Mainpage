import React, { Component } from 'react';
import './styles.sass';
import { ToastContainer, toast } from 'react-toastify';
import {withTranslation} from 'react-i18next';

class AmlPolicy extends Component {
    copyLink(event) {
        const language = this.props.i18n.language === 'en' ? '' : `${this.props.i18n.language}/`;
        let copy = `${window.location.host}/${language}terms/amlpolicy#${encodeURIComponent(event.target.id)}`;
        this.copyStringToClipboard(copy);
        this.toast();
    }

    copyStringToClipboard(string) {
        const el = document.createElement('textarea');
        el.value = string;
        el.setAttribute('readonly', '');
        el.style = {position: 'absolute', left: '-9999px'};
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    }

    toast() {
        toast.success(this.props.t('CPanel.referral.link.copyMessage'), {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
        });
    }

    render() {
        return (
            <div className="wrapperAML">
                <ToastContainer/>
                <spanc style={{width: "95%"}}>Revised on 13.06.2022.</spanc>
                <ol className='containerOl'>
                    <li>
                        <span
                            className='titleAml'
                            id="INTRODUCTION"
                            onClick={this.copyLink.bind(this)}
                        >1. INTRODUCTION</span>
                    </li>
                    <li>
                        <p>1.1. Please read this KYC/AML Policy carefully before using indacoin.io website, APIs, or mobile applications. You are required to read and understand it before using the Services. If you are in any doubt about any of the contents of this document, you should obtain independent professional advice.</p>
                    </li>
                    <li>
                        <p>1.2. OUR SERVICES ARE NOT BEING OFFERED TO ANY RESIDENT OF OR ANY PERSON LOCATED OR DOMICILED IN THE RESTRICTED JURISDICTIONS AS DEFINED HEREIN AS WELL AS ANY REGION OR ANY COUNTRY OR TERRITORY THAT IS SUBJECT OF COUNTRY-WIDE OR TERRITORY-WIDE SANCTIONS.</p>
                    </li>
                    <li>
                        <p>1.3. Agreement with this KYC/AML Policy. By accessing, browsing and using our Website through whatever platform and/or by completing an Account registration, you acknowledge and agree to have read, understood and agreed to this KYC/AML Policy set out below. If you do not accept this KYC/AML Policy, you shall not use the Services.</p>
                    </li>
                    <li>
                        <p>1.4. Best Effort. As a responsible and liable member of crypto community we put all possible efforts in place to protect our Users and maintain our impeccable reputation when it comes to AML/CTF and international financial sanctions measures.</p>
                    </li>
                    <li>
                        <p>1.5. Internal KYC/AML Policy. This document is a short public version of our Internal KYC/AML Policy to give our Users a brief understanding of the mechanisms we use to comply with the above mentioned regulations and different sanction regimes in order to prevent people engaged in ML/TF, fraud, and other illicit activities from using our Services. It is the policy of Indacoin to prohibit and actively prevent money laundering and any activity that facilitates money laundering or the financing of terrorist or criminal activities. We will comply with all applicable requirements and regulations. Money laundering is generally defined as engaging in acts designed to conceal or disguise the true origins of criminally derived proceeds so that the proceeds appear to have derived from legitimate origins or constitute legitimate assets. Indacoin has zerotolerance policy for money laundering activities. Our AML/CFT policies, procedures and internal controls are designed to ensure compliance with all applicable regulations and will be reviewed and updated on a regular basis to ensure appropriate policies, procedures and internal controls are in place to account for both changes in regulations and changes in our business.</p>
                    </li>
                    <li>
                        <p>1.6. Purposes. This AML Policy aims to prevent the use of Indacoin’s services by criminal entities for the purposes of money laundering, financing of terrorism, fraud, corruption, or any other criminal activity. To this end, the company has established strict money laundering detection and prevention policy. Also, to counter money laundering, the company has implemented a sophisticated electronic customer verification system and introduced detailed statistics logging for all customer transactions. Furthermore, Indacoin, under no circumstances, accepts cash from or pays cash to its customers. The company reserves the right to suspend any transaction of its customer that may be considered illegal or, in Indacoin employees’ opinion, may be related to money laundering.</p>
                    </li>
                    <li>
                        <p>1.7. Regulatory Framework. The principal requirements, obligations and penalties, on which Indacoin AML policy is based, are contained in:</p>
                        <ul>
                            <li>
                                <p>- The Proceeds of Crime Act 2002 (POCA), as amended by the: Serious Organized Crime and Police Act 2005 (SOCPA); and the Proceeds of Crime Act (Amendment) Regulations 2007;</p>
                            </li>
                            <li>
                                <p>- The Terrorism Act 2000, as amended by the: The Anti Terrorism, Crime & Security Act 2001; and the Terrorism Act (Amendment) Regulations 2007;</p>
                            </li>
                            <li>
                                <p>- The Terrorism Act 2006;</p>
                            </li>
                            <li>
                                <p>- The Bribery Act 2010;</p>
                            </li>
                            <li>
                                <p>- Terrorist Asset-Freezing etc. Act 2010;</p>
                            </li>
                            <li>
                                <p>- Anti-terrorism, Crime and Security Act 2001;</p>
                            </li>
                            <li>
                                <p>- Money Laundering, Terrorist Financing and Transfer of Funds (Information on the Payer) Regulations 2017;</p>
                            </li>
                            <li>
                                <p>- Counter-terrorism Act 2008, Schedule 7;</p>
                            </li>
                            <li>
                                <p>- Sanctions and Anti-Money Laundering Act 2018;</p>
                            </li>
                            <li>
                                <p>- Directive 2015/849/EU of the European Parliament and of the Council of 20th May 2015 on the prevention of the use of the financial system for the purposes of money laundering or terrorist financing, as amended by Directive 2018/843 of the European Parliament and of the Council of 30th May 2018;</p>
                            </li>
                            <li>
                                <p>- Revised Wire Transfer Regulation (EU) 2015/847;</p>
                            </li>
                            <li>
                                <p>- Revised FATF Recommendations 2012;</p>
                            </li>
                            <li>
                                <p>- BCBS Guidelines: Sound management of risks related to money laundering and financing of terrorism;</p>
                            </li>
                            <li>
                                <p>- Joint Money Laundering Steering Group Guidance;</p>
                            </li>
                            <li>
                                <p>- the Wolfsberg Statement Guidance on a Risk Based Approach for Managing Money Laundering Risks and other Guidances; The Joint Money Laundering Steering Group (JMLSG) Guidance for the UK Financial Sector on the prevention of money laundering/combating terrorist financing.</p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <span
                        className='titleAml'
                            id="AMENDMENTS TO THIS POLICY"
                            onClick={this.copyLink.bind(this)}
                        >2. AMENDMENTS TO THIS POLICY</span>
                    </li>
                    <li>
                        <p>2.1. Coming into Force. We reserve the right to update this KYC/AML Policy at any time with immediate effect by publishing the updated KYC/AML Policy on the Website. All such changes will take effect once they have been posted on the Website and you will be deemed to have accepted any such changes by using the Website and the Services from such time, or, where possible, giving notice to you by email to the your last known email address, such notice to be effective immediately.</p>
                    </li>
                    <li>
                        <p>2.2. If You Do Not Agree with the KYC/AML Policy. It is important that you review this KYC/AML Policy on a regular basis to ensure that you are familiar with the terms in force from time to time and/or any changes made to them. If you do not agree to any amendments, you must discontinue using our Services and contact us to cancel your Account.</p>
                    </li>
                    <li>
                        <span
                            id="POLICIES AND CONTROLS"
                            onClick={this.copyLink.bind(this)}
                        >3. POLICIES AND CONTROLS</span>
                    </li>
                    <li>
                        <p>3.1. We have implemented measures, which protect and prevent us and our Users from involvement in money laundering and terrorist financing activities, sanctions programs, fraud and other illicit activities by:</p>
                        <ul>
                            <li>
                                <p>- Establishing and maintaining risk-based CDD, identification and verification procedures including KYC procedures;</p>
                            </li>
                            <li>
                                <p>- Establishing and performing risk-based approach to the assessment and management of money laundering and terrorist financing risks faced by us and our Users;</p>
                            </li>
                            <li>
                                <p>- Providing ongoing transactions monitoring and suspicious transactions analysis and reporting internally and to the relevant authorities;</p>
                            </li>
                            <li>
                                <p>- Maintaining appropriate records;</p>
                            </li>
                            <li>
                                <p>- Providing AML/CFT training for and raising awareness among all relevant employees.</p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <p>3.2. We have a designated Money Laundering Reporting Officer (Nominated Officer) (“MLRO”). The MLRO has full responsibility for our AML/CFT program. The duties of the MLRO will include monitoring our compliance with AML/CFT obligations, overseeing communication and training for employees and overseeing software modifications to ensure they comply with AML/CFT obligations. The MLRO will also ensure that we keep and maintain all of the required AML/CFT records.</p>
                    </li>
                    <li>
                        <span
                        className='titleAml'
                            id="USER IDENTIFICATION AND VERIFICATION (KYC and CDD)"
                            onClick={this.copyLink.bind(this)}
                        >4. USER IDENTIFICATION AND VERIFICATION (KYC and CDD)</span>
                    </li>
                    <li>
                        <p>4.1. General. The objective of KYC and CDD is to identify Users and verify their identity. We may ask you either at the time of registering as a User or upon execution of any transactions, while requesting access to different Services or periodically for purposes of updating records and on-going CDD and procedures to provide ID Information and certain documents.</p>
                    </li>
                    <li>
                        <p>4.2. Information and Documents Required for Services access. In order to use the Services provided by the Company you will need to register an Account and, where necessary, perform KYC procedures, so you will be required to provide certain ID Information and documents.</p>
                    </li>
                    <li>
                        <p>4.3. KYC - identification and verification of new customers, deposits, transfers and withdrawals. In order to verify the account (confirm the customers’ identity), the user must provide the following information:</p>
                        <ul>
                            <li>
                                <p>- Full name;</p>
                            </li>
                            <li>
                                <p>- Date of birth;</p>
                            </li>
                            <li>
                                <p>- Country of residence and residential address;</p>
                            </li>
                            <li>
                                <p>- Phone number, which Indacoin will send test message or call to verify the identity;</p>
                            </li>
                            <li>
                                <p>- Email with which account is registered. This is followed by verification of the customer’s phone number in all kinds of databases, such as yellow/white pages. In case of suspicion, our employee will also call the bank and request a bank clerk to contact the customer to verify that the user did use his or her debit/credit card to purchase bitcoins on Indacoin;</p>
                            </li>
                            <li>
                                <p>- Verified proof of ID (Color copy of Passport, or National ID, or International Driving License) & Verified proof of residence (Utility Bill, Bank Statement with transactions, Bank reference letter no more than 3 months old) and a selfie taken live during verification procedure.</p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <p>4.4. Third-Party Authentication. As a part of the verification process, Indacoin reserves the right to request one or more appropriate third-party service provider to assist us in authentication and/or verification of the valid documents and other incidental details provided by you.</p>
                    </li>
                    <li>
                        <p>4.5. Indacoin will perform AML checks within the following, but not limited to, databases: the Office of Foreign Assets Control (OFAC), Her Majesty’s Treasury Department – UK (HMT), European Union sanctions (EU), United Nations sanctions (UN).</p>
                    </li>
                    <li>
                        <p>4.6. Indacoin will be monitoring customer transactions on a daily basis in real-time for risk within abovementioned databases. Furthermore, all existing clients will be screened against the updated databases every day.</p>
                    </li>
                    <li>
                        <p>4.7. The usage of Indacoin is prohibited for the citizens of the following countries: Afghanistan, American Samoa, Albania, Algeria, The Bahamas, Bangladesh, Barbados, Bolivia, Botswana, Cambodia, China, Colombia, Democratic Republic of the Congo, Ecuador, Egypt, Eritrea, Gambia, Ghana, GuineaBissau, Guyana, Iran, Iraq, Ivory Coast, Jamaica, Laos, Lesotho, Liberia, Mali, Mauritius, Mongolia, Morocco, Myanmar, Namibia, Nepal, Nicaragua, Niger, Nigeria, North Korea, Pakistan, Panama, Papua New Guinea, Qatar, Saudi Arabia, Somalia, Sudan, Syria, Tanzania, Trinidad and Tobago, Uganda, United States of America, Vanuatu, Yemen, Zambia, Zimbabwe.</p>
                    </li>
                    <li>
                        <p>4.8. If a potential or existing customer either refuses to provide the information described above when requested, or appears to have intentionally provided misleading information, we will deactivate the account and, after considering the risks involved, consider closing any existing account. In either case, our MLRO will be notified so that we can determine whether we should report the situation to the authorities.</p>
                    </li>
                    <li>
                        <p>4.9. If the amount of funds deposited in/withdrawn from an account every month exceeds EUR 5,000 a video is required, of the customer showing his or her passport or driver’s license, as well as the front of his or her bankcard so that the first and last name can be read easily. The card number should be covered for security reasons.</p>
                    </li>
                    <li>
                        <p>4.10. If the amount of funds deposited in/withdrawn from an account exceeds EUR 50,000, Indacoin may request the account user to provide some additional information, including to answer questions about how he or she developed an interest in bitcoins, the purpose of his or her transactions, his or her trading strategy, the user’s biography, and the origins of the funds operated on the Website of the Service, including documentary evidence (e.g., a bank statement showing the receipt of a salary, a contract for the sale of an interest in a business, etc.)</p>
                    </li>
                    <li>
                        <p>4.11. Based on the risk, and to the extent reasonable and practicable, we will ensure that we have a reasonable belief that we know the true identity of our customers by using risk-based procedures to verify and document the accuracy of the information we get about our customers, but in any case complying with the statutory requirements. The MLRO will analyze the information we obtain to determine whether the information is sufficient to form a reasonable belief that we know the true identity of the customer (e.g., whether the information is logical or contains inconsistencies). We will verify customer identity through documentary means, non-documentary means or both.</p>
                    </li>
                    <li>
                        <p>4.12. Enhanced KYC/CDD. In addition to standard KYC/CDD procedures we also reserve the right to apply additional KYC/CDD measures set forth in this KYC/AML Policy when:</p>
                        <ul>
                            <li>
                                <p>- there is a suspicion of ML/TF, regardless of any derogation, exemption or threshold;</p>
                            </li>
                            <li>
                                <p>- there are doubts about the veracity or adequacy of previously obtained ID Information and documents;</p>
                            </li>
                            <li>
                                <p>- new ID Information or documents has been provided by you;</p>
                            </li>
                            <li>
                                <p>- higher than average risk or substantial transactions volumes are observed on your Account.</p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <p>4.13. Right to Request Additional Documents. We reserve a right to request any additional documents, including but not limited to, verification of the source of funds involved in the transaction, and/or information to complete the Account registration or to complete a pending transaction as we deem necessary, as well as to refuse registration or transaction processing altogether as a result of the KYC and CDD procedures. Such refusals and requests are done via email or push-notifications and do not need to be justified or explained by us in any manner.</p>
                    </li>
                    <li>
                        <p>4.14. We will monitor account activity for unusual size, volume, pattern or type of transactions, taking into account risk factors and red flags that are appropriate to our business. The MLRO or his or her designee will be responsible for this monitoring, will review any activity that our monitoring system detects, will determine whether any additional steps are required, will document when and how this monitoring is carried out, and will report suspicious activities to the appropriate authorities. The MLRO or his or her designee will conduct an appropriate investigation and review relevant information from internal or third-party sources before the authorities are notified. We monitor possible insufficient or suspicious information provided by the customer, particularly when the customer:</p>
                        <ul>
                            <li>
                                <p>- Provides unusual or suspicious identification documents that cannot be readily verified;</p>
                            </li>
                            <li>
                                <p>- Reluctant to provide complete information about nature and purpose of transaction, anticipated account activity etc;</p>
                            </li>
                            <li>
                                <p>- Refuses to identify a legitimate source for funds or information is false, misleading or substantially incorrect;</p>
                            </li>
                            <li>
                                <p>- Background is questionable or differs from expectations based on business activities.</p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <p>4.15. Information Update. For the purposes of the implementation of this KYC/AML Policy and ML/TF risk mitigation and to ensure that the information that we hold on you is always accurate and up to date you shall provide us with updated ID Information and applicable documents in order to continue using our Services in any of the following cases:</p>
                        <ul>
                            <li>
                                <p>- at any time you obtain a new ID document or renew the previous one;</p>
                            </li>
                            <li>
                                <p>- at any time the you change personal identity number (if applicable);</p>
                            </li>
                            <li>
                                <p>- at any time you change your name or surname;</p>
                            </li>
                            <li>
                                <p>- at any time the you change phone number, email address or residential address. In the course of using our Services you will also be asked to update your ID Information:</p>
                            </li>
                            <li>
                                <p>- For Low and Medium Risk Profile Users once every 12 months;</p>
                            </li>
                            <li>
                                <p>- For High Risk Profile Users once every 6 months.</p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <p>4.16. Data Protection. We do our best to protect your ID Information and provided documents in accordance with the applicable laws and regulations. For further information about our rules on privacy please refer our Privacy Policy at https://indacoin.io/terms</p>
                    </li>
                    <li>
                        <span
                        className='titleAml'
                            id="RISK CONSIDERATION"
                            onClick={this.copyLink.bind(this)}
                        >5. RISK CONSIDERATION</span>
                    </li>
                    <li>
                        <p>5.1. Risk-Based Approach. In conducting KYC/CDD and ongoing monitoring we implement a risk based approach, meaning that the standards of due diligence, filtering and monitoring vary in view of the specific risks a (prospective) User may pose. This approach allows for the possibility to use different measures and controls in different situations and risk levels, depending on: the users, their background, their transaction activities, the source and nature of funds, and the geographies involved.</p>
                    </li>
                    <li>
                        <p>5.2. We will conduct our KYC/CDD and activities monitoring based on a risk-based approach:</p>
                        <ul>
                            <li>
                                <p>- for Users, determined by us to present medium risk of ML/TF, standard KYC/CDD measures set forth in this policy shall apply;</p>
                            </li>
                            <li>
                                <p>- for some users, determined by us to present a low risk of ML/TF, simplified KYC/CDD and monitoring may be applied;</p>
                            </li>
                            <li>
                                <p>- in the case of high risk profile enhanced KYC/ CDD measures (including but not limited to additional verification details or proof of sources of funds, additional information on the nature of the transaction) and enhanced monitoring will be applied.</p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <span
                        className='titleAml'
                            id="DETECTION OF SUSPICIOUS TRANSACTIONS AND REPORTING REQUIREMENTS"
                            onClick={this.copyLink.bind(this)}
                        >6. DETECTION OF SUSPICIOUS TRANSACTIONS AND REPORTING REQUIREMENTS</span>
                    </li>
                    <li>
                        <p>6.1. Determining Suspicious Transactions. We reserve the right to apply this KYC/AML Policy, Terms of Use and other operating rules, and internal controls to mitigate ML/TF risks by monitoring your transactions for suspicious activity. We may use manual screening or software-based solutions to determine whether transaction is deemed to be suspicious according to local and/or applicable international legislation, official guidelines, industry best practices, our internal policies.</p>
                    </li>
                    <li>
                        <p>6.2. Reporting. We reserve the right to take appropriate action, including, but not limited to inform relevant competent or law enforcement authorities about identified suspicious transactions in accordance with local regulation without any prior notification to you.</p>
                    </li>
                    <li>
                        <span
                        className='titleAml'
                            id="RETENTION AND RECORD KEEPING"
                            onClick={this.copyLink.bind(this)}
                        >7. RETENTION AND RECORD KEEPING</span>
                    </li>
                    <li>
                        <p>7.1. For the purpose of preventing, detecting and investigating unusual and suspicious transactions, we reserve the right to keep electronic records of all transactions and due diligence measures carried out in accordance with this KYC/AML Policy, subject always to the provisions of our Privacy Policy.</p>
                    </li>
                    <li>
                        <span
                            id="YOUR RESPONSIBILITIES"
                            onClick={this.copyLink.bind(this)}
                        >9. YOUR RESPONSIBILITIES</span>
                    </li>
                    <li>
                        <p>9.1. You shall:</p>
                        <ul>
                            <li>
                                <p>- comply with any requirements of applicable law, including international, regulating AML and combating TF standards;</p>
                            </li>
                            <li>
                                <p>- avoid conducting illegal financial activities and any other illegal transactions using our Services;</p>
                            </li>
                            <li>
                                <p>- guarantee lawful source and your legal right to control the fiat and virtual currency on your Account balance.</p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <p>9.2. Suspension, Limitation and Cancelation due to Incomplete Verification. We reserve the right to limit, suspend or cancel the Account to Users, who have not verified their identity or set up a necessary level of security of Account, or to ask such User to complete verification procedure once again.</p>
                    </li>
                    <li>
                        <p>9.3. Suspension, Limitation and Cancelation due to Failure to Comply with this KYC/AML Policy. Should the User fail to comply with the requirements set out by this KYC/AML Policy on any stage of the User identification process and/or further CDD screenings we will exercise our right to limit, suspend, or cancel User’s Account or access to the Services for such User. We will normally give a notice of any limitation, suspension, or cancelation of the Account but it may, if it is reasonable to do so (for example we consider it advisable for security reasons), limit, suspend or cancel the Account without any prior notice to User. We also reserve the right to decline any pending transactions requested by the User and to investigate transactions of doubtful nature and inform relevant competent or law enforcement authorities regarding the suspicious activities of any User.</p>
                    </li>
                </ol>
            </div>
        );
    }
}

export default withTranslation()(AmlPolicy);