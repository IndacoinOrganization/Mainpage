import React, { Component } from "react";
import "./styles.sass";
import { Trans, withTranslation } from "react-i18next";

// components
import Header from "@components/Header";
import Footer from "@components/Footer";
import Scroll from "react-scroll";
// import Seo from "@tools/Seo";

class Faq extends Component {
  constructor(props) {
    super(props);

    // Seo.getInstance().changeTitle(this.props.i18n.t("seo.faq.title"));
    // Seo.getInstance().changeDescription(
    //   this.props.i18n.t("seo.faq.description")
    // );
  }

  get questions() {
    return [
      {
        title: (
          <Trans i18nKey="faq.questionList.generalQuestions.title">
            GENERAL QUESTIONS
          </Trans>
        ),
        questionList: [
          {
            question: (
              <Trans i18nKey="faq.questionList.generalQuestions.question1">
                WHAT IS INDACOIN?
              </Trans>
            ),
            answer: (
              <Trans i18nKey="faq.questionList.generalQuestions.answer1">
                We are a company working in the cryptocurrency field since 2014,
                based in London, the UK. You can use our service to buy over 100
                different cryptocurrencies with credit/debit card payment
                without registration. On Indacoin you can also easily store the
                crypto you bought, exchange crypto coins and withdraw them to
                any external wallet as long as it’s compatible with the currency
                you chose.Our business model combines B2C and B2B segments,
                enabling card processing for promising coins and acting as a
                fully-fledged fiat-to-crypto gateway. If you’re interested in
                scaling your business with us, please visit this
                <a href={"/business"}>page</a>.Indacoin also has its
                <a href="https://indacoin.com/token">loyalty program</a>, which
                allows you to buy crypto with 0.00% fees and get cashback on
                every purchase you make. The key element of this program is the
                INDA token - a native token of the Indacoin ecosystem. It not
                only fuels the loyalty and referral systems but also connects
                Indacoin to IndaFi - an all-in-one DeFi platform for every
                financial need. At the moment we officially launched the core
                module of IndaFi - IndaSwap, which allows everyone to buy DeFi
                tokens directly with Visa and Mastercard.
              </Trans>
            ),
          },
          {
            question: (
              <Trans i18nKey="faq.questionList.generalQuestions.question2">
                HOW CAN I CONTACT YOU?
              </Trans>
            ),
            answer: (
              <Trans i18nKey="faq.questionList.generalQuestions.answer2">
                You can contact our support team by e-mail
                (support@indacoin.com), phone (+44-207-048-2582), Telegram
                (@Indacoin_support) or by using a live chat option on our
                <a href={"/buy-bitcoin-with-card"}>webpage</a>.
              </Trans>
            ),
          },
          {
            question: (
              <Trans i18nKey="faq.questionList.generalQuestions.question3">
                DO YOU HAVE AN AFFILIATE PROGRAM?
              </Trans>
            ),
            answer: (
              <Trans i18nKey="faq.questionList.generalQuestions.answer3">
                Yes, we are happy to provide our services to different types of
                business. You can find more details about our affiliate program
                <a href={"/business"}>here</a>. If you want to list a coin on
                our platform, please, check <a href={"/listing"}>this page</a>.
              </Trans>
            ),
          },
          {
            question: (
              <Trans i18nKey="faq.questionList.generalQuestions.question4">
                WHICH CRYPTOCURRENCIES CAN I BUY HERE?
              </Trans>
            ),
            answer: (
              <Trans i18nKey="faq.questionList.generalQuestions.answer4">
                You can buy over 100 different cryptocurrencies that are all
                listed on our website. To make an order you can use our website
                <a href={"/buy-bitcoin-with-card"}>https://indacoin.com</a> or
                app. Just enter the amount in the calculator and choose one of
                the available crypto coins. Then you will be able to enter your
                email, mobile phone number, card details and crypto wallet
                address where you want your coins to be deposited. At this stage
                you will be asked to verify your identity to confirm the
                payment.
              </Trans>
            ),
          },
          {
            question: (
              <Trans i18nKey="faq.questionList.generalQuestions.question5">
                CAN I SELL MY CRYPTOCURRENCY ON INDACOIN?
              </Trans>
            ),
            answer: (
              <Trans i18nKey="faq.questionList.generalQuestions.answer5">
                No, unfortunately, it isn’t possible to exchange cryptocurrency
                to fiat on Indacoin. However, you can exchange coins to other
                cryptocurrency or withdraw to a platform that allows exchange to
                fiat.
              </Trans>
            ),
          },
          {
            question: (
              <Trans i18nKey="faq.questionList.generalQuestions.question6">
                CAN I DEPOSIT COINS TO INDACOIN WALLET?
              </Trans>
            ),
            answer: (
              <Trans i18nKey="faq.questionList.generalQuestions.answer6">
                No, you can only purchase bitcoins here.
              </Trans>
            ),
          },
          {
            question: (
              <Trans i18nKey="faq.questionList.generalQuestions.question7">
                DOES INDACOIN PROVIDE SERVICES WORLDWIDE?
              </Trans>
            ),
            answer: (
              <Trans i18nKey="faq.questionList.generalQuestions.answer7">
                Unfortunately, at the moment we do not operate in the following
                countries: Afghanistan, American Samoa, Albania, Algeria, The
                Bahamas, Bangladesh, Barbados, Bolivia, Botswana, Cambodia,
                China, Colombia, the Democratic Republic of the Congo, Ecuador,
                Egypt, Eritrea, Gambia, Ghana, Guinea-Bissau, Guyana, Iran,
                Iraq, Ivory Coast, Jamaica, Laos, Lesotho, Liberia, Mali,
                Mauritius, Mongolia, Morocco, Myanmar, Namibia, Nepal,
                Nicaragua, Niger, Nigeria, North Korea, Pakistan, Panama, Papua
                New Guinea, Qatar, Saudi Arabia, Somalia, Sudan, Syria,
                Tanzania, Trinidad and Tobago, Uganda, Vanuatu, Yemen, Zambia,
                Zimbabwe.We are constantly improving our platform and believe
                that one day our service will be available everywhere.
              </Trans>
            ),
          },
        ],
      },
      {
        title: (
          <Trans i18nKey="faq.questionList.cryptoCurrency.title">
            CRYPTOCURRENCY
          </Trans>
        ),
        questionList: [
          {
            question: (
              <Trans i18nKey="faq.questionList.cryptoCurrency.question1">
                WHAT IS CRYPTOCURRENCY?
              </Trans>
            ),
            answer: (
              <Trans i18nKey="faq.questionList.cryptoCurrency.answer1">
                Сryptocurrency is a digital currency that uses cryptography for
                security, feature, that makes it difficult to counterfeit. It is
                not issued by any central authority, rendering it theoretically
                immune to government interference or manipulation.
              </Trans>
            ),
          },
          {
            question: (
              <Trans i18nKey="faq.questionList.cryptoCurrency.question2">
                WHAT IS BLOCKCHAIN?
              </Trans>
            ),
            answer: (
              <Trans i18nKey="faq.questionList.cryptoCurrency.answer2">
                Blockchain is a database that collects information about
                cryptocurrency transactions together in groups, also known as
                blocks. New blocks are always stored linearly and
                chronologically and can not be removed from the database that is
                why transactions registered in blockchain can not be changed or
                declined.
              </Trans>
            ),
          },
          {
            question: (
              <Trans i18nKey="faq.questionList.cryptoCurrency.question3">
                WHAT IS A HASH (TX HASH)?
              </Trans>
            ),
            answer: (
              <Trans i18nKey="faq.questionList.cryptoCurrency.answer3">
                Each block in the blockchain contains its hash, along with the
                hash of the block before it, as well as the time stamp. Hash
                codes are created by a math function that turns digital
                information into a string of numbers and letters. All crypto
                transactions can be tracked in blockchain explorers with help of
                the hash.
              </Trans>
            ),
          },
          {
            question: (
              <Trans i18nKey="faq.questionList.cryptoCurrency.question4">
                WHAT ARE ALTCOINS?
              </Trans>
            ),
            answer: (
              <Trans i18nKey="faq.questionList.cryptoCurrency.answer4">
                Altcoins are cryptocurrencies other than Bitcoin.
              </Trans>
            ),
          },
          {
            question: (
              <Trans i18nKey="faq.questionList.cryptoCurrency.question5">
                WHERE CAN I STORE CRYPTOCURRENCY?
              </Trans>
            ),
            answer: (
              <Trans i18nKey="faq.questionList.cryptoCurrency.answer5">
                You can set up a separate wallet for each cryptocurrency on your
                PC or you can register a personal account on Indacoin and store
                100+ cryptocurrencies in it. Please, DYOR (do your own research)
                and pick the wallet provider you like the most. For instance, a
                few trusted wallets are MetaMask, TrustWallet, and Ledger, but
                we insist on carefully checking the platform you’re going to use
                to store your coins. You can use the information in the open
                sources and consult with the community members of the coins you
                chose or in our group in Telegram. We kindly ask you not to hold
                your altcoins on Indacoin for a long time and withdraw them to a
                separate wallet specified for this exact cryptocurrency on your
                PC. Cryptocurrency purchase is a high-risk operation. It is
                necessary to analyze all possible risks associated with the
                market volatility. Indacoin is not responsible for sharp
                fluctuations in cryptocurrency, its fall in value, impairment
                and delistment.
              </Trans>
            ),
          },
          {
            question: (
              <Trans i18nKey="faq.questionList.cryptoCurrency.question6">
                WHAT DO YOU MEAN BY BITCOIN OR CRYPTO WALLET ADDRESS?
              </Trans>
            ),
            answer: (
              <Trans i18nKey="faq.questionList.cryptoCurrency.answer6">
                It is the address that helps to identify your crypto wallet in
                the blockchain and looks like a combination of digits and
                letters. You can enter the address of the crypto wallet
                registered on the other platform or
                <a href={"/auth/register"}>create an account</a> on Indacoin.
                Usually, a crypto wallet address is displayed in the portfolio
                section of the account. You can also contact your crypto wallet
                provider to check the address of your wallet. Please, be very
                careful while entering the crypto wallet address. Your crypto
                coins can be lost if the address is entered incorrectly.
              </Trans>
            ),
          },
          {
            question: (
              <Trans i18nKey="faq.questionList.cryptoCurrency.question7">
                WHAT IS THE VALID CRYPTO WALLET ADDRESS?
              </Trans>
            ),
            answer: (
              <Trans i18nKey="faq.questionList.cryptoCurrency.answer7">
                Every cryptocurrency has its own special format of the crypto
                wallet address that can be used for this currency. A valid
                crypto wallet address is an address of the wallet compatible
                with the cryptocurrency you chose (for example, ERC-20 wallet
                for ETH or BEP-20 wallet for USDC), you can check the name of
                the protocol for each currency in the open sources. If you see
                the error notification saying that you’ve entered an invalid
                wallet address, please double-check if you copied the wallet
                address correctly and if it matches the coin you picked (for
                instance, on our platform only ERC-20 USDT is available, so
                please don’t use TRC-20 or Omni wallets). You can also contact
                our support team for quick assistance.
              </Trans>
            ),
          },
          {
            question: (
              <Trans i18nKey="faq.questionList.cryptoCurrency.question8">
                What is the destination Tag/Memo?
              </Trans>
            ),
            answer: (
              <Trans i18nKey="faq.questionList.cryptoCurrency.answer8">
                A destination Tag/Memo is an additional address feature
                necessary for identifying a transaction recipient beyond a
                wallet address. The Tag/Memo is mandatory for transactions for
                cryptocurrencies that use this technology. Usually, crypto
                wallets for XRP, XLM, EOS, ATOM coins have tag/memo. Crypto
                coins won’t reach your account if the tag/memo of your crypto
                wallet is not added or incorrect.
              </Trans>
            ),
          },
          {
            question: (
              <Trans i18nKey="faq.questionList.cryptoCurrency.question9">
                Forgot to add a memo/tag, what to do?
              </Trans>
            ),
            answer: (
              <Trans i18nKey="faq.questionList.cryptoCurrency.answer9">
                Please contact the support team of your wallet to check whether
                it’s possible to identify your transaction within their system.
                From our side, we’re always glad to help you prove that it’s
                your transaction and form a request to the support team for your
                wallet. Unfortunately, there is a big chance that your wallet
                provider won’t be able to recover your coins, so please
                double-check the details when you’re making a crypto purchase.
              </Trans>
            ),
          },
          {
            question: (
              <Trans i18nKey="faq.questionList.cryptoCurrency.question10">
                How fast is the cryptocurrency transaction?
              </Trans>
            ),
            answer: (
              <Trans i18nKey="faq.questionList.cryptoCurrency.answer10">
                Cryptocurrency transaction time depends on which cryptocurrency
                you are sending. For example, bitcoin transactions take about
                15-20 minutes to complete and on average allow up to 1 hour for
                the rest of the coins. The exact time depends on how soon the
                transaction is registered and approved in the blockchain
                network.
              </Trans>
            ),
          },
        ],
      },
      {
        title: <Trans i18nKey="faq.questionList.account.title">Transactions</Trans>,
        questionList: [
          {
            question: (
              <Trans i18nKey="faq.questionList.account.question1">
                DO I NEED TO SIGN UP/ CREATE AN ACCOUNT TO BUY HERE?
              </Trans>
            ),
            answer: (
              <Trans i18nKey="faq.questionList.account.answer1">
                No, having an account on Indacoin is not mandatory to buy crypto
                coins. To make a purchase you just need to enter in the
                calculator on the page
                <a href={"/buy-bitcoin-with-card"}>https://indacoin.com</a>
                amount of fiat money you want to spend, email, mobile phone
                number, card details and crypto wallet address. Then you will be
                forwarded to your order page.
              </Trans>
            ),
          },
          {
            question: (
              <Trans i18nKey="faq.questionList.account.question7">
                WHAT IS THE MINIMUM FOR THE EXCHANGE?
              </Trans>
            ),
            answer: (
              <Trans i18nKey="faq.questionList.account.answer7">
                The minimum for the exchange depends on cryptocurrency and
                usually equivalent to 10 USD.
              </Trans>
            ),
          },
        ],
      },
      {
        title: (
          <Trans i18nKey="faq.questionList.indacoinVerification.title">
            INDACOIN VERIFICATION
          </Trans>
        ),
        questionList: [
          {
            question: (
              <Trans i18nKey="faq.questionList.indacoinVerification.question1">
                WHAT SHOULD I DO TO VERIFY MY CARD?
              </Trans>
            ),
            answer: (
              <Trans i18nKey="faq.questionList.indacoinVerification.answer1">
                To complete verification you’ll need to enter the 4 digit code
                you receive via phone call. For your second step you may also be
                asked to undergo photo verification, which requires you to
                upload a photo of your passport/ID and a selfie with ID and a
                piece of paper with required text, confirming the purchase. We
                may alternatively ask for video verification, where you will
                need to record your face, say \"Indacoin verification for
                crypto\" show your ID and card you made the payment with. When
                showing the card, show only last 4 digits and the name.
              </Trans>
            ),
          },
          {
            question: (
              <Trans i18nKey="faq.questionList.indacoinVerification.question2">
                WHAT IF I CAN'T RECORD A VIDEO VERIFICATION?
              </Trans>
            ),
            answer: (
              <Trans i18nKey="faq.questionList.indacoinVerification.answer2">
                You can open the same order page link from your mobile device
                and record it from there. If having trouble, you can also send
                the required video as attachment via e-mail to
                support@indacoin.com. Make sure to Indicate your exchange order
                number.
              </Trans>
            ),
          },
          {
            question: (
              <Trans i18nKey="faq.questionList.indacoinVerification.question3">
                I HAVE MADE AN ORDER AND ENTERED ALL THE DETAILS, WHY IS IT
                STILL PROCESSING?
              </Trans>
            ),
            answer: (
              <Trans i18nKey="faq.questionList.indacoinVerification.answer3">
                If you have waited more than 2 minutes, then the order didn't
                make it to transaction. It's possible that your card isn't 3D
                secure and you may need to try again. Make sure you confirm your
                purchase via PIN code with your bank or you can try buying with
                a different currency (EUR/USD). Otherwise, if you are certain
                your card is 3Ds and changing currency doesn't help then you
                need to contact your bank, they may be blocking your purchase
                attempts.
              </Trans>
            ),
          },
          {
            question: (
              <Trans i18nKey="faq.questionList.indacoinVerification.question4">
                DO I NEED TO GO THROUGH VERIFICATION EVERY TIME I MAKE A
                PURCHASE?
              </Trans>
            ),
            answer: (
              <Trans i18nKey="faq.questionList.indacoinVerification.answer4">
                You only need to verify your card once and all following
                transactions will be automatic. However we will require
                verification if you decide to use another bank card.
              </Trans>
            ),
          },
          {
            question: (
              <Trans i18nKey="faq.questionList.indacoinVerification.question5">
                MY ORDER WAS DECLINED BY THE BANK, WHAT SHOULD I DO?
              </Trans>
            ),
            answer: (
              <Trans i18nKey="faq.questionList.indacoinVerification.answer5">
                You need to contact your bank and ask for the reason of the
                decline, perhaps they can lift the restriction so a purchase can
                be made.
              </Trans>
            ),
          },
          {
            question: (
              <Trans i18nKey="faq.questionList.indacoinVerification.question6">
                WHY DO I NEED TO VERIFY MY BANKING CARD OR SEND A VIDEO?
              </Trans>
            ),
            answer: (
              <Trans i18nKey="faq.questionList.indacoinVerification.answer6">
                We never share your personal information with any Third Parties
                without your consent and collect only the information required
                to make sure that you're the card's owner. Our verification
                process is fully GDPR compliant, you can check the detailed
                information here:
                <a href="https://sumsub.com/security-compliance">
                  https://sumsub.com/security-compliance
                </a>
              </Trans>
            ),
          },
          {
            question: (
              <Trans i18nKey="faq.questionList.indacoinVerification.question7">
                HOW CAN I TRUST THAT MY DETAILS AND CARD'S INFO ARE SECURE?
              </Trans>
            ),
            answer: (
              <Trans i18nKey="faq.questionList.indacoinVerification.answer7">
                We never share your details with any Third Parties without your
                consent. Also, we only accept 3D-Secure cards ,and we never
                request any sensitive data such as the CCV code or the full
                card's number. You only provide such payment details through
                Visa or Mastercard gateway terminals. We only collect the
                information required to make sure that you're the card's owner.
              </Trans>
            ),
          },
        ],
      },
      {
        title: (
          <Trans i18nKey="faq.questionList.commissions.title">
            COMMISSIONS
          </Trans>
        ),
        questionList: [
          {
            question: (
              <Trans i18nKey="faq.questionList.commissions.question1">
                WHAT IS YOUR FEE?
              </Trans>
            ),
            answer: (
              <Trans i18nKey="faq.questionList.commissions.answer1">
                Our fee varies from purchase to purchase as it is based on
                numerous factors, that's why we have created a calculator that
                will tell you the exact amount of cryptocurrency you will
                receive, all fees included.
              </Trans>
            ),
          },
          {
            question: (
              <Trans i18nKey="faq.questionList.commissions.question2">
                HOW MUCH WILL I BE CHARGED FOR THE TRANSACTION?
              </Trans>
            ),
            answer: (
              <Trans i18nKey="faq.questionList.commissions.answer2">
                You will be charged only the amount you specify during your
                order in our calculator. All fees are included in that amount.
              </Trans>
            ),
          },
          {
            question: (
              <Trans i18nKey="faq.questionList.commissions.question3">
                DO YOU HAVE ANY DISCOUNTS?
              </Trans>
            ),
            answer: (
              <Trans i18nKey="faq.questionList.commissions.answer3">
                Indacoin also has its own
                <a href="https://indacoin.com/token">loyalty program</a>, which
                allows you to buy crypto with 0.00% fees and get cashback on
                every purchase you make. The key element of this program is the
                INDA token - a native token of the Indacoin ecosystem. It not
                only fuels the loyalty and referral systems but also connects
                Indacoin to IndaFi - an all-in-one aggregator for every
                financial need. At the moment we officially launched the core
                module of IndaFi - IndaSwap, which allows everyone to buy DeFi
                tokens directly with Visa and Mastercard.
              </Trans>
            ),
          },
        ],
      },
      {
        title: (
          <Trans i18nKey="faq.questionList.purchase.title">PURCHASE</Trans>
        ),
        questionList: [
          {
            question: (
              <Trans i18nKey="faq.questionList.purchase.question1">
                HOW TO BUY CRYPTOCURRENCY ON INDACOIN?
              </Trans>
            ),
            answer: (
              <Trans i18nKey="faq.questionList.purchase.answer1">
                Make sure you are using your own, 3D secure Visa or MasterCard
                bank card and have a driver's license, ID or passport available
                in case we require verification. Then please open this
                <a href={"/buy-bitcoin-with-card"}>page</a> and select in the
                calculator the cryptocurrency you want to buy, input the amount
                to be charged from your card in fiat and input the crypto
                address (or leave blank if you want to deposit to Indacoin
                wallet). Fill in the required fields and once your card is
                charged our support team will be in contact with you to verify
                your purchase.
              </Trans>
            ),
          },
          {
            question: (
              <Trans i18nKey="faq.questionList.purchase.question2">
                HOW FAST WILL MY CRYPTOCURRENCY BE SENT?
              </Trans>
            ),
            answer: (
              <Trans i18nKey="faq.questionList.purchase.answer2">
                Usually it takes about 30 minutes after you make an order or
                complete verification (if it’s the first time you use the card
                on Indacoin).
              </Trans>
            ),
          },
          {
            question: (
              <Trans i18nKey="faq.questionList.purchase.question3">
                WHAT ARE THE MINIMUM AND MAXIMUM PURCHASES?
              </Trans>
            ),
            answer: (
              <Trans i18nKey="faq.questionList.purchase.answer3">
                You will have the limit of maximum $200 for the first
                transaction, additional $200 for the second transaction
                available after 4 days of the initial purchase, $500 after 7
                days and $2000 in 14 days of the first buy. In a month from your
                first purchase there are no limits when paying with your card.
                Please keep in mind that the minimum limit is always $50.
              </Trans>
            ),
          },
          {
            question: (
              <Trans i18nKey="faq.questionList.purchase.question4">
                WHAT TYPE OF CARDS ARE ACCEPTED?
              </Trans>
            ),
            answer: (
              <Trans i18nKey="faq.questionList.purchase.answer4">
                We only accept Visa and Mastercard with 3D secure.
              </Trans>
            ),
          },
          {
            question: (
              <Trans i18nKey="faq.questionList.purchase.question5">
                WHAT IS 3D SECURE?
              </Trans>
            ),
            answer: (
              <Trans i18nKey="faq.questionList.purchase.answer5">
                3-D Secure technology consists of the programs Verified by Visa
                and MasterCard SecureCode.After you enter your credit card
                details in our online store, a new window will appear,
                requesting your personal security code. Your financial
                institution will authenticate the transaction within seconds, as
                well as confirm that you are the individual making the purchase.
              </Trans>
            ),
          },
          {
            question: (
              <Trans i18nKey="faq.questionList.purchase.question6">
                WHAT OTHER PAYMENT SYSTEMS CAN I USE TO BUY BITCOINS?
              </Trans>
            ),
            answer: (
              <Trans i18nKey="faq.questionList.purchase.answer6">
                Currently we only accept Visa/Master card payments on our
                platform.
              </Trans>
            ),
          },
          {
            question: (
              <Trans i18nKey="faq.questionList.purchase.question7">
                MY ORDER WAS DECLINED BY THE BANK, WHAT SHOULD I DO?
              </Trans>
            ),
            answer: (
              <Trans i18nKey="faq.questionList.purchase.answer7">
                You need to contact your bank and ask for the reason for the
                decline, perhaps they can lift the restriction so a purchase can
                be made. Please, also check if crypto purchases are permitted by
                your bank and your bank card is 3D secure.
              </Trans>
            ),
          },
          {
            question: (
              <Trans i18nKey="faq.questionList.purchase.question8">
                MY TRANSACTION FAILED. WILL I RECEIVE A REFUND?
              </Trans>
            ),
            answer: (
              <Trans i18nKey="faq.questionList.purchase.answer8">
                If your transaction fails, we cancel the temporary
                pre-authorisation that was placed on your card when you first
                made your order. In this case, funds should have returned to
                your bank account shortly, usually within 3 business days, the
                exact time depends on the bank. Otherwise please contact the
                bank they'll be able to see pending declined transaction and
                remove the hold status from your funds.
              </Trans>
            ),
          },
          {
            question: (
              <Trans i18nKey="faq.questionList.purchase.question9">
                I RECEIVED FEWER COINS THAN WAS PROMISED. WHY?
              </Trans>
            ),
            answer: (
              <Trans i18nKey="faq.questionList.purchase.answer9">
                If your transaction fails, we cancel the temporary
                pre-authorisation that was placed on your card when you first
                made your order. In this case, funds should have returned to
                your bank account shortly, usually within 3 business days, the
                exact time depends on the bank. Otherwise please contact the
                bank they'll be able to see pending declined transaction and
                remove the hold status from your funds.
              </Trans>
            ),
          },
          {
            question: (
              <Trans i18nKey="faq.questionList.purchase.question10">
                I’VE BEEN CHARGED TWICE. WILL YOU REFUND ME?
              </Trans>
            ),
            answer: (
              <Trans i18nKey="faq.questionList.purchase.answer10">
                If your transaction fails, we cancel the temporary
                pre-authorisation that was placed on your card when you first
                made your order. In this case, funds should have returned to
                your bank account shortly, usually within 3 business days, the
                exact time depends on the bank. Otherwise please contact the
                bank they'll be able to see pending declined transaction and
                remove the hold status from your funds.
              </Trans>
            ),
          },
          {
            question: (
              <Trans i18nKey="faq.questionList.purchase.question11">
                I DIDN’T MAKE AN ORDER ON INDACOIN BUT MY CARD WAS CHARGED. WHAT SHOULD I DO?
              </Trans>
            ),
            answer: (
              <Trans i18nKey="faq.questionList.purchase.answer11">
                If your card was stolen and used for the purchase on our
                platform by another person, please, block your bank card and
                contact our agent immediately via live-chat support or e-mail
                <a href="mailto:support@indacoin.com">support@indacoin.com</a> for assistance. We kindly ask you to
                contact us no later than 3 days from the date of purchase, so
                that immediate action is taken on our side and if possible - a
                refund.
              </Trans>
            ),
          },
        ],
      },
    ];
  }

  showAnswer(event) {
    event.target.classList.toggle('show');
  }

  scroll(event, index) {
    event.preventDefault();

    const offsetTop = document.getElementById("title-" + index).offsetTop;

    Scroll.animateScroll.scrollTo(offsetTop, {
      duration: 1000,
      delay: 100,
    });
  }

  render() {
    return (
      <div className='Faq'>
        <Header />
        <div style={{background: "#F6F6F6"}}>
          <main className='main'>
            <div className="container">
              <div className='title'>
                <span>
                  <Trans i18nKey="faq.title">Frequently Asked Questions</Trans>
                </span>
              </div>
              <div className='anchors'>
                <ul>
                  {this.questions.map((value, index) => {
                    const title = this.props.t(value.title.props.i18nKey);
                    return (
                      <li key={index}>
                        <a
                          href={"#" + value.title}
                          onClick={(event) => this.scroll(event, index)}
                        >
                          <span>{title.toLocaleLowerCase()}</span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className='linkSupport'>
                <button
                  className={`blue small`}
                  onClick={() =>
                    window.open("mailto:support@indacoin.com", "_blank")
                  }
                >
                  <Trans i18nKey="faq.button">Contact Support</Trans>
                </button>
              </div>
              <div className='block'>
                <hr />
                <ul>
                  {this.questions.map((value, index) => {
                    return (
                      <li key={index}>
                        <a id={"title-" + index} />
                        <span>{value.title}</span>
                        <ol className="questionsBlock">
                          {value.questionList.map((value, index) => {
                            return (
                              <li key={index}>
                                <span onClick={this.showAnswer.bind(this)}>
                                  {value.question}
                                </span>
                                <p>{value.answer}</p>
                              </li>
                            );
                          })}
                        </ol>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </main>
          <Footer />
        </div>
        
      </div>
    );
  }
}
export default withTranslation()(Faq);
