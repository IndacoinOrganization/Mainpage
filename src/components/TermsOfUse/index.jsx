import React, { Component } from 'react';
import './styles.sass';
import { ToastContainer, toast } from 'react-toastify';
import {Trans, withTranslation} from 'react-i18next';

class TermsOfUse extends Component {
    copyLink(event) {
        const language = this.props.i18n.language === 'en' ? '' : `${this.props.i18n.language}/`;
        let copy = `${window.location.host}/${language}terms#${encodeURIComponent(event.target.id)}`;
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
        const trans = {
            address: (() => {
                switch (window.location.host) {
                    case 'indacoin.io':
                        return 'indacoin.io +44 207 048 25 82. Indacoin OU, Registry code: 14798473, Address: Meistri 16, Tallinn, Estonia, 13517, Operating license: FVT000145';
                    case 'indacoin.io':
                    default:
                        return 'indacoin.io +44 207 048 25 82. Indacoin Limited, Suite 4b, 43 Berkeley Square, Mayfair, London, Westminster, United Kingdom, W1J 5FJ';    
                }                            
            })(),
            addr: (() => {
                switch (window.location.host) {
                    case 'indacoin.io':
                        return 'Indacoin OU, Registry code: 14798473, Address: Meistri 16, Tallinn, Estonia, 13517, Operating license: FVT000145';
                    case 'indacoin.io':
                    default:
                        return 'Indacoin';
                }
            })(),
            host: window.location.host,
        };
        

        return (
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
 <div className='wrapperTerms'>
                <ToastContainer/>
                <Trans
                    i18nKey="terms.termsOfUse.0"
                    values={{
                        addr: trans.addr,
                        host: trans.host,
                    }}
                >
                    <p>
                        Introduction This is a contract between you and {{ addr: trans.addr }} (“The Service”, “Indacoin”). By signing up to use an account through {{ host: trans.host }}, APIs, or mobile applications, you agree that you have read, understood, and accept all of the terms and conditions contained in this Agreement, as well as our Privacy Policy.
                        Please read these Terms of Use ("Terms", "Terms of Use") carefully before using the https://{{ host: trans.host }}/ website and the Indacoin mobile application (the "Service") operated by our company.
                        Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service.
                        If you do not agree to accept and comply with any of the provisions of the Terms of Use, or if the Terms of Use are contrary to your national law or to the law of your location, you agree not to use the Service, otherwise, you are liable for all losses and damages to the Service or to third parties, caused by your failure to follow the Terms of Use.
                        In addition, when using the Indacoin particular services, you shall be subject to any posted guidelines or rules applicable to such services, which may be posted and modified from time to time. To be eligible to use the Service, you must be at least 18 years old.
                    </p>
                </Trans>
                <span
                    id="Changes"
                    onClick={this.copyLink.bind(this)}
                >
                    <Trans i18nKey="terms.termsOfUse.1">
                        Changes
                    </Trans>
                </span>

                <Trans i18nKey="terms.termsOfUse.2">
                    <p>Occasionally we may, in our discretion, make changes and improvements to the Indacoin Terms of Use. When we make changes to the Terms that we consider substantial, we’ll notify you through the Service. By continuing to use the Service after those changes are made, you express and acknowledge your acceptance of the changes.</p>
                </Trans>

                <span
                    id="Indacoin Account"
                    onClick={this.copyLink.bind(this)}
                >
                    <Trans i18nKey="terms.termsOfUse.3">
                        Indacoin Account
                    </Trans>
                </span>
                <Trans i18nKey="terms.termsOfUse.4">
                    <p>Users access the account, interface, and some services of the Service through the use of the user login and password, which are provided upon the User’s registration at the Service. In order to create an Account at the Service, as well as to access the services of Indacoin, the User must first register at the Service. An account at the Service is a personal page of the User, and may only be used by the User who have access to the Account through the Service. The User is prohibited to provide his account access information or the account itself to third parties or to other Users. In the case of theft of the account access information or account itself by a third party, the User bears the burden of proving he was not responsible. The User is liable for the actions of any third party who was provided with access to his Account. In order to use certain features of the Service, including certain transfers of Digital Currency, you may be required to provide the Service with certain personal information, including, but not limited to, your name, address, telephone number, e-mail address, date of birth and information regarding your bank account. In submitting this or any other personal information that may be required, you verify that the information is accurate and authentic, and you agree to update the Service if any information changes.</p>
                </Trans>

                <span
                    id="Services Provided"
                    onClick={this.copyLink.bind(this)}
                >
                    <Trans i18nKey="terms.termsOfUse.5">
                        Services Provided
                    </Trans>
                </span>
                <Trans i18nKey="terms.termsOfUse.6">
                    <p>Eligible users in certain jurisdictions may buy or sell supported Digital Currency through the Conversion Services. The Conversion Services are subject to the conversion rate for the given transaction. That conversion rate will be displayed on the page of your order with all fees included. After the submitting a request for buying Digital Currency, you will need to complete the verification procedures that include verifying you credit card information and your phone number. Indacoin reserves the right to delay any Conversion Service transaction if it perceives a risk of fraud or illegal activity. Indacoin may require you to provide or verify additional information, or to wait some amount of time after completion of a transaction, before permitting you to use any Indacoin Services and/or before permitting you to engage in transactions beyond certain volume limits.</p>
                    <p>The amount that the user receives may differ from originally shown due to sharp jumps in rate. In this case, if the amount differs by more than 25 percent, the user has the right to request a refund.</p>
                    <p>The Hosted Digital Currency Wallet services are available only in connection with those Digital Currencies that Indacoin, in its sole discretion, decides to support. The Digital Currencies that Indacoin supports may change from time to time. If you have any questions about which Digital Currencies Indacoin currently supports, please write a request to support@indacoin.io. Under no circumstances should you attempt to use your Hosted Digital Currency Wallet services to store, send, request, or receive digital currencies in any form that are not supported by Indacoin. Indacoin assumes no responsibility or liability in connection with any attempt to use Indacoin Services for digital currencies that Indacoin does not support.</p>
                    <p>Indacoin processes supported Digital Currency according to the instructions received from its users. You should verify all transaction information prior to submitting instructions to Indacoin. In the event you initiate a Digital Currency Transaction by entering the recipient's phone number and the recipient does not have an existing Indacoin Account, Indacoin will contact the recipient and invite him to open a Indacoin Account. Indacoin may charge network fees (miner fees) to process a Digital Currency transaction on your behalf. Indacoin will calculate the network fee in its discretion, although Indacoin will always notify you of the network fee at or before the time you authorize the transaction.</p>
                </Trans>

                <Trans>
                    <p>Before establishing the business relationship (entering into the transaction) with Indacoin, please be informed that when you buy cryptocurrency through Indacoin, you will not be subject to protection under the Financial Services Compensation Scheme (FSCS) and not within the scope of the jurisdiction of the Financial Ombudsman Service (FOS).</p>
                </Trans>

                <span
                    id="General Use, Prohibited Use and Cancellation"
                    onClick={this.copyLink.bind(this)}
                >
                    <Trans i18nKey="terms.termsOfUse.7">
                        General Use, Prohibited Use and Cancellation
                    </Trans>
                </span>
                <Trans 
                    i18nKey="terms.termsOfUse.8" 
                    values={{
                        address: trans.address,
                        host: trans.host,
                    }}
                >
                    <p>License We grant you a limited, nonexclusive, nontransferable license, subject to the terms of this Agreement, to access and use the Service, and related content, materials, information (collectively, the "Content") solely for approved purposes as permitted by Indacoin. Any other use of the Service or Content is expressly prohibited and all other right, title, and interest in the Service or Content is exclusively the property of Indacoin and its licensors. You agree you will not copy, transmit, distribute, sell, license, reverse engineer, modify, publish, or participate in the transfer or sale of, or in any other way exploit any of the Content, in whole or in part. "{{ host: trans.host }}", "Indacoin", and all logos related to the Indacoin or displayed on the {{ host: trans.host }} are either trademarks or registered marks of Indacoin or its licensors. You may not copy, imitate or use them without Indacoin prior written consent.</p>
                    <p>Although we intend to provide accurate and timely information on the Service, the Service may not always be entirely accurate, complete or current and may also include technical inaccuracies or typographical errors. This site and its components are offered for informational purposes only; this site shall not be responsible or liable for the accuracy, usefulness or availability of any information transmitted or made available via the site, and shall not be responsible or liable for any error or omissions in that information.</p>
                    <p>Suspension, Termination, and Cancellation. Indacoin may suspend, restrict, or terminate your access to any or all of the services, and/or deactivate or cancel your Indacoin Account if we are so required by a facially valid subpoena, court order, or binding order of a government authority; or we reasonably suspect you of using your Indacoin Account in connection with a Prohibited Use or Business; or use of your Indacoin Account is subject to any pending litigation, investigation, or government proceeding and/or we perceive a heightened risk of legal or regulatory non-compliance associated with your Account activity; or our service partners are unable to support your use; or you take any action that Service deems as circumventing Indacoin's controls, including, but not limited to, opening multiple Indacoin Accounts or abusing promotions which Indacoin may offer from time to time; or you breach our Behavior Policy.</p>
                    <p>Password Information You are responsible for maintaining adequate security and control of any and all IDs, passwords, personal identification numbers (PINs) or any other codes that you use to access Indacoin. Any loss or compromise of the foregoing information and/or your personal information may result in unauthorized access to your Indacoin Account by third-parties and the loss or theft of any Digital Currency and/or funds held in your Indacoin Account and any associated accounts, including your linked bank account(s) and credit card(s). You are responsible for keeping your email address and telephone number up to date in your Account Profile in order to receive any notices or alerts that we may send you. We assume no responsibility for any loss that you may sustain due to compromise of account login credentials due to no fault of Indacoin and/ or failure to follow or act on any notices or alerts that we may send to you. In the event you believe your Indacoin Account information has been compromised, contact Indacoin Support immediately at support@indacoin.io.</p>
                    <p>Cryptocurrency purchase is a high-risk operation. Before investing into any altcoin, it is necessary to analyze all possible risks associated with the fall in its value. It is required to take into account that some cryptocurrencies can completely devaluate and stop trading on the platform. Indacoin is not responsible for sharp fluctuations in cryptocurrency, its fall in value, impairment, delistment from the site and mobile wallets.</p>
                    <p>Indacoin draws your attention to the fact, that investment of bitcoins and other altсoins in favor of Forex brokers, CFD, binary options, gambling, etc. is prohibited through the platform. The platform analyzes the crypto wallets to which the cryptocurrency is sent and can block funds in case of detecting suspicious transactions.</p>
                    <p>The billing descriptor you will see on your card statement will be {{ address: trans.address }}</p>
                </Trans>
                
                <span
                    id="Complaints and Dispute Resolution"
                    onClick={this.copyLink.bind(this)}
                >
                    <Trans i18nKey="terms.termsOfUse.9">
                        Complaints and Dispute Resolution
                    </Trans>
                </span>
                <Trans 
                    i18nKey="terms.termsOfUse.10"
                    values={{
                        host: trans.host,
                    }}
                >
                    <p>If you have any feedback, questions, or complaints, write us an email to support@indacoin.io or contact an agent via online chat on our webpage https://{{ host: trans.host }}.</p>
                    <p>In the event of a complaint, please set out the cause of your complaint, how you would like us to resolve the complaint and any other information you believe to be relevant. A Customer Complaints agent will consider your complaint. The Agent will consider your complaint without prejudice based on the information you have provided and any information provided by Indacoin. Your complaint will be considered within a reasonable time. An Agent will offer to resolve your complaint in the way your requested - you requested; make a determination rejecting your complaint and set out the reasons for the rejection; or offer to resolve your complaint with an alternative solution. You agree to use the complaints procedure of this Section 6 before filing any claim in a competent court. Failure to comply with this provision may be used as evidence of your unwillingness to settle the issue and/or the vexatious nature of the complaint.</p>
                    <p>You agree to use the complaints procedure of this Section 6 before filing any claim with a bank in case of stolen cards, duplicate processing, refund and similar cases. The user has a right for refund if he raises a request within 3 days of purchase. The reason of the request will be considered by our specialists within 14 days. Failure to comply with this provision may be used as evidence of your fraudulent conduct, unwillingness to settle the issue and/or the vexatious nature of the complaint</p>
                </Trans>

                <span
                    id="General Provisions"
                    onClick={this.copyLink.bind(this)}
                >
                    <Trans i18nKey="terms.termsOfUse.11">
                        General Provisions
                    </Trans>
                </span>
                <Trans i18nKey="terms.termsOfUse.12">
                    <p>Indacoin does not offer general or personal financial advice. Nothing in this website is intended to be or should be taken as financial, legal or taxation advice. Users should seek their own financial, legal, tax and accounting advice as to the likely outcomes for them of trading Digital Currency.</p>
                    <p>We shall not bear any liability, whatsoever, for any damage or interruptions caused by any computer viruses, spyware, scareware, Trojan horses, worms or other malware that may affect your computer or other equipment, or any phishing, spoofing or other attack. We advise the regular use of a reputable and readily available virus screening and prevention software.</p>
                    <p>Although the Indacoin takes all necessary and reasonable measures to keep the Service up and working, Using the Service users do so at their own risk. The Service is provided without any guarantees, representations and warranties, express or implied, provided by law with respect to software or sites, including, but not limited to warranties or conditions of quality, performance, non-infringement, merchantability, and fitness for use for a particular purpose. The Service does not represent or warrant that the Service or any other related software will always be available, accessible, uninterrupted, timely, secure, accurate, complete and error-free, or will operate without packet loss. Subject to section Indacoin shall not assume liability of any type for any losses or damages arising out of or in connection with the use of the Service, even if the Service was advised and/or aware of the possibility of such losses or damages. Your damages are limited to no more than the value of the supported digital currency at issue in the transaction. In particular the Service shall not be liable for:</p>
                </Trans>
                <ul>
                    <li>
                        <Trans i18nKey="terms.termsOfUse.13">
                            Loss of any actual or anticipated profits, income, or any indirect, special, incidental or consequential damages and loss of opportunities;
                        </Trans>
                    </li>
                    <li>
                        <Trans i18nKey="terms.termsOfUse.14">
                            Any indirect, special, incidental or consequential damages;
                        </Trans>
                    </li>
                    <li>
                        <Trans i18nKey="terms.termsOfUse.15">
                            Any damage to or corruption of data (whether direct or indirect);
                        </Trans>
                    </li>
                    <li>
                        <Trans i18nKey="terms.termsOfUse.16">
                            Loss of goodwill or reputation (whether direct or indirect);
                        </Trans>
                    </li>
                </ul>
                <Trans i18nKey="terms.termsOfUse.17">
                    <p>We shall not be liable for delays, failure in performance or interruption of service which result directly or indirectly from any cause or condition beyond our reasonable control, including but not limited to, any delay or failure due to any act of God, act of civil or military authorities, act of terrorists, civil disturbance, war, strike or other labor dispute, fire, interruption in telecommunications or Internet services or network provider services, failure of equipment and/or software, other catastrophe or any other occurrence which is beyond our reasonable control and shall not affect the validity and enforceability of any remaining provisions.</p>
                    <p>Notwithstanding any other provision of this Agreement, any translation of this Agreement is provided for your convenience. The meanings of terms, conditions and representations herein are subject to definitions and interpretations in the English language. Any translation provided may not accurately represent the information in the original English.</p>
                    <p>We shall not be liable for the circumstances that effect the transaction after the altcoins have been sent to the address stipulated. If there is a confirmation on blockchain that the altcoins have been sent, our obligations shall be treated as fully performed.</p>
                    <p>You shall be responsible for the correctness of the wallet address you specify in case of loss of the altcoins because the address proves to be wrong, invalid or unsuitable for the particular type of cryptocurrency.</p>
                </Trans>

                <span
                    id="Limits"
                    onClick={this.copyLink.bind(this)}
                >
                    <Trans i18nKey="terms.termsOfUse.18">
                        Limits
                    </Trans>
                </span>
                <Trans i18nKey="terms.termsOfUse.19">
                    <p>First time buyers must provide their email & mobile phone number where Indacoin will send a text message or call to verify the identity. Customer must next upload photo of his ID, passport or driver’s license, take a live selfie during verification procedure. Customer must also provide a document proving his residence address. The limit for the first day of purchase is set to 3,000 EUR, next transaction could be made in 2 days,  where 3,000 EUR limit will be applied. In additional 3 days from the first purchase, the user can buy up to week's total maximum of 15,000 EUR. Henceforth, the user limits are 15,000 EUR and 50,000 EUR per month, as long as the same card is used. New card used on platform have reset limits.</p>
                    <p>If the transaction is deemed suspicious, with the aim to counter possible fraudulent actions the first day limit cannot exceed 100 EUR. If the transaction is made for higher amount, Indacoin has the right to decline authorization. Next transaction can be made after 2 days for 500 EUR, in 4 days from first payment the limit is set to 500 EUR. In total for the first week, user can buy for no more than 1,100 EUR.</p>
                    <p>If the amount of funds deposited in/withdrawn from an account every month exceeds 15,000 EUR, Indacoin may request the account user to provide some additional information, including answers to the questions about how he or she developed an interest in bitcoins, the purpose of his or her transactions, his or her trading strategy, the user’s biography, and the origins of the funds operated on Indacoin, including documentary evidence (e.g., a bank statement showing the receipt of a salary, a contract for the sale of an interest in a business, etc.).</p>
                    <p>Indacoin may, at any time and in its sole discretion, change applicable limits as it deems necessary. Indacoin may, for example, impose additional limits on the transaction amount permitted via the Service or impose any other conditions or restrictions for trading. Indacoin may, in its sole discretion, change applicable limits if it believes the transactions violate applicable laws, Indacoin’s policies, or these Terms.</p>
                    <p>Indacoin will give you notice of any limitation on the transaction via Service, but Indacoin may if it is reasonable to do so, limit the transaction without prior notice to you. You acknowledge that Indacoin’s decision to limit the transaction may be based on confidential criteria that are essential to Indacoin’s risk management and security protocols and that Indacoin is under no obligation to disclose the details of risk management and security procedures to you unless otherwise provided by the Privacy Policy.</p>
                </Trans>

                <span
                    id="Warranties"
                    onClick={this.copyLink.bind(this)}
                >
                    <Trans i18nKey="terms.termsOfUse.20">
                        Warranties
                    </Trans>
                </span>
                <Trans i18nKey="terms.termsOfUse.21">
                    <p>Transmission of data on Indacoin is encrypted using SSH, HTTPS, and SSL/TLS. No method of transmission, or method of electronic storage, is 100% secure. Therefore, we cannot guarantee its absolute security.</p>
                    <p>By using the service you agree that Indacoin is not responsible, in any way, for any consequences resulting from use of information provided by the service.</p>
                    <p>We not keeping customer’s card detail.</p>
                    <p>Indacoin will not sell, purchase, provide, exchange or in any other manner disclose Account or Transaction data, or personal information of or about a Cardholder to anyone, except, it’s Acquirer, Visa/Mastercard Corporations or in response to valid government demands.</p>
                    <p>Card Data Encryption is being perfomed on the side of the processing center in accordance with PCI DSS</p>
                </Trans>

                <span
                    id="Privacy policy"
                    onClick={this.copyLink.bind(this)}
                >
                    <Trans i18nKey="terms.termsOfUse.22">
                        Privacy policy
                    </Trans>
                </span>
                <Trans i18nKey="terms.termsOfUse.23">
                    <p>Protection of Users’ personal data is one of Indacoin major priorities. To maintain high level of your privacy protection our company strictly follows the norms of EU’s data protection acts, in particular, the General Data Protection Regulation (GDPR) coming into force on 25th May of 2018.</p>
                    <p>Our privacy policy is based on 6 main principles, ensuring your personal data protection:</p>
                </Trans>
                <ul>
                    <li>
                        <Trans i18nKey="terms.termsOfUse.24">
                            Lawfulness, Fairness and Transparency: data processing is to be performed fairly, in accordance with applicable laws and in a transparent manner;
                        </Trans>
                    </li>
                    <li>
                        <Trans i18nKey="terms.termsOfUse.25">
                            Purpose Limitation: data processing is limited to a purpose of the Services provision;
                        </Trans>
                    </li>
                    <li>
                        <Trans i18nKey="terms.termsOfUse.26">
                            Data Minimisation: personal data collection takes place in a volume necessary for processing purposes;
                        </Trans>
                    </li>
                    <li>
                        <Trans i18nKey="terms.termsOfUse.27">
                            Accuracy: we take all reasonable steps to keep your personal data accurate and up to date, otherwise we erase it;
                        </Trans>
                    </li>
                    <li>
                        <Trans i18nKey="terms.termsOfUse.28">
                            Storage Limitation: we store your personal data in a form, which permits to identify you as a data subject as long as it is necessary for processing purposes;
                        </Trans>
                    </li>
                    <li>
                        <Trans i18nKey="terms.termsOfUse.29">
                            Integrity and Confidentiality: while processing your personal data, we ensure protection against unauthorised or unlawful processing, accidental loss, destruction or damage.
                        </Trans>
                    </li>
                </ul>
                <Trans i18nKey="terms.termsOfUse.30">
                    <p>The Indacoin company collects and processes personal data with your consent, for compliance with a legal obligation which Indacoin is subject to or when we have assessed it is necessary for the purposes of the legitimate interests pursued by Indacoin or a third party to whom it may be necessary to disclose information. We collect and process personal data when it is needed for the performance of our agreements with clients in order to provide full-function service and appropriate facilities. Data collection is required in order to maintain contact with our clients as well as to provide stable operation of the service and optimize it. Personal information helps us to provide security of our clients, Indacoin and third parties. We may also use your personal information to send important notices, such as communications about purchases and changes to our terms, conditions, and policies because this information is important to your interaction with Indacoin.</p>
                    <p>Before using our Services you shall provide express consent to process your personal data including, but not limited to your name, address, phone, email, Skype ID as well as any other information reported to the Service voluntary for the purposes of the Services provision. You are entitled to withdraw your consent at any time. When you use Indacoin Services, we may collect information about your computer, mobile device, or other access device for fraud prevention purposes, to monitor for possible breach of your Indacoin Account. You may choose to provide us with access to certain personal information stored by third parties such as social media sites (such as Facebook and Twitter).To keep your personal data accurate and up-to-date we recommend to update it from time to time.</p>
                    <p>We store collected personal date during the period required to achieve the goals or during the period required by law.</p>
                    <p>Indacoin does not take any decisions involving the use of algorithms or profiling that significantly affects you.</p>
                    <p>We undertake an obligation to process, to record, to store, to use and to transfer the personal data provided by maintaining physical, electronic, and procedural safeguards in compliance with applicable law. We use computer safeguards such as firewalls and data encryption, we enforce physical access controls to our buildings and files, and we authorize access to personal information only for the employees/service providers, who are acknowledged to our corporate personal data protection policy. Except to the extent required by any applicable law or governmental or judicial body, we will not disclose your personal information to any third party without your prior written consent. In case a personal data breach occurs we will inform you as well as responsible supervisory authorities about it within 72 hours since the moment we’re aware of this fact.</p>
                    <p>In case you decide to share your personal data collected with any other companies, we’d like to provide an electronic copy of your personal data on a gratuitous basis. Inter alia we respect your “right to be forgotten”: we delete your personal data from our database at your request, except in the following cases:</p>
                </Trans>
                <ul>
                    <li>
                    <Trans i18nKey="terms.termsOfUse.31">
                        the personal data is needed to exercise the right of freedom of expression;
                    </Trans>
                    </li>
                    <li>
                        <Trans i18nKey="terms.termsOfUse.32">
                            your personal data shall be kept for reasons of public interest (for example public health, scientific, statistical or historical research purposes).
                        </Trans>
                    </li>
                    <li>
                        <Trans i18nKey="terms.termsOfUse.33">
                            there is a legal obligation to keep your data;
                        </Trans>
                    </li>
                </ul>
                <Trans i18nKey="terms.termsOfUse.34">
                    <p>You have the right to obtain without undue delay the rectification of inaccurate personal data concerning him or her.</p>
                    <p>You have the right to obtain the erasure of personal data concerning you and restriction of processing without undue delay where one of the grounds described in the Regulation applies.</p>
                    <p>We will provide you with access (including a copy) for any purpose including to request that we correct the data if it is inaccurate or delete the data if Indacoin is not required to retain it by law or for legitimate business purposes. We may decline to process requests that are frivolous/vexatious, jeopardize the privacy of others, are extremely impractical, or for which access is not otherwise required by local law.</p>
                    <p>In order to change or delete your personal data you can turn for help to the agents of our customer support. Moreover in your account you can choose Settings and then press Delete account, your request will be sent to our specialist. Your request will be considered within the reasonable time without undue delay and you will receive a reasonable response.</p>
                    <p>You can also manage the personal data we collect in the Settings in your App.</p>
                </Trans>

                <span
                    id="Cookie policy"
                    onClick={this.copyLink.bind(this)}
                >
                    <Trans i18nKey="terms.termsOfUse.35">
                        Cookie policy
                    </Trans>
                </span>
                <Trans i18nKey="terms.termsOfUse.36">
                    <p>When you access our website or our application or other Indacoin Services, we or our counterparts may place small data files called cookies on your computer or other device. Cookies were designed to help a website operator determine that a particular user had visited the site previously and thus save and remember any preferences that may have been set.</p>
                    <p>Cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms.</p>
                    <p>Cookies allow us to count visits and traffic sources, so we can measure and improve the performance of our site. They help us know which pages are the most and least popular and see how visitors move around the site. All information these cookies collect is aggregated and therefore anonymous. If you do not allow these cookies, we will not know when you have visited our site.</p>
                    <p>We encode our cookies so that only we can interpret the information stored in them. You are free to decline our cookies, if your browser or browser add-on permits, but doing so may interfere with your use of Indacoin Services. The help section of most browsers or browser add-ons provides instructions on blocking, deleting, or disabling cookies.</p>
                </Trans>
            </div>
            </div>
           
        );
    }
}

export default withTranslation()(TermsOfUse);
