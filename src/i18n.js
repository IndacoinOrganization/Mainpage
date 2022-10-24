import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Storage from './global/storage';
// import global from './global/config'

// import commonRu from './assets/locales/en.json'
// import commonEn from './assets/locales/en.json'

const COOKIES_LANGUAGE = 'cookies_language';
const resources = {
  en: {
    translation: {
      "seo": {
        "faq": {
          "title": "Indacoin FAQ",
          "description": "Indacoin FAQ"
        },
      },
      "header": {
        "menu": {
          "buyBtc": "Buy Bitcoin",
          "partnership": "Business",
          "referral": "Referral",
          "Bonuses": "Bonuses",
          "blog": "Blog",
          "listing": "Listing",
          "systemMonitor": "Monitor",
          "faq": "FAQ",
          "token": "INDA token",
          "account": "Account",
          "tokens": "Tokens",
          "dashboard": "Dashboard",
          "portfolio": "Portfolio",
          "loyalty": "Loyalty",
          "cards": "Cards",
          "profile": "Profile",
          "logout": "Log out",
          "paymentStatus": "Payment Status",
          "wallet": "Wallet",
          "passiveincome": "Passive income",
          "myAccount": "My account"
        }
      },
      "home": {
        "maintitle": "Buy your first crypto — it’s easy",
        "subtitle": "Verified by 10M+ purchases per month",
        "buyButton": "Buy crypto",
        "features": {
          "title": "Our features",
          "featurestext": {
            "feature0": "Hold it to get passive income from your portfolio",
            "feature1": "Trade it to get a speculative profit bigger than stocks",
            "feature2": "Stake it as if it’s a deposit in the bank but with higher rate",
            "feature3": "Make fast global transfers and pay online without extra fees",
            "feature4": "Get help from live support agents 24/7",
            "feature5": "Buy crypto directly with Visa & Mastercard",
            "feature6": "Avoid hidden fees and extra charges",
            "feature7": "Receive bonuses for every purchase",
            "feature8": "Protect your funds & data with our AI powered security system"
          }
        },
        "reviews": {
          "title": "User reviews",
          "reviewstext": {
            "review0": "The process was smooth and fast. I had to pass KYC process and I must say it was one of the simplest KYC I've ever seen. In the end, verification took about 5 minutes and then I immediately got my coins. Totally recommend",
            "review1": "I received coins relatively fast, must admit that auto updates on the transaction status in TG were very helpful. Appreciate the efforts, hope they'll add more rare coins soon",
            "review2": "I had a very pleasant experience. I had troubles with verification, support was very polite and helpful. That's how all crypto services should operate!",
            "review3": "I tried this services and was very glad about it. Unfortunately, there was a bit of delay but when I contacted support they resolved the issue and compensated for the delay. That means something. I will try this again when I need to load on crypto!"
          }
        }
      },
      "partnership": {
        "firstBlock": {
          "title": "Grow and scale your <br/> business with us",
          "firstPoint": "Do best service for 5 years",
          "secondPoint": "3-day integration with a full technical support",
          "thirdPoint": "Best rates - best conditions",
          "button": "Become a partner"
        },
        "secondBlock": {
          "title": "Business Partnership",
          "text": "There are many ways of collaborating with Indacoin. The Indacoin Partnership Program is for crypto-related companies that are willing to connect the world of cryptocurrencies with traditional fiat money system to increase engagement in the crypto industry."
        },
        "thirdBlock": {
          "title": "Why partner with Indacoin?",
          "slides": {
            "security": {
              "title": "Security",
              "text": "Own antifraud mechanism and regular security audits"
            },
            "stability": {
              "title": "Stability",
              "text": "Have been continuously accepting payments for 5 years"
            },
            "speed": {
              "title": "Speed",
              "text": "5 to 20 minutes to complete the transaction"
            },
            "freedom": {
              "title": "Freedom",
              "text": "We support more than 150 cryptocurrencies"
            },
            "scale": {
              "title": "Scale",
              "text": "We accept payments in more than 140 countries"
            }
          }
        },
        "opportunities": {
          "title": "Opportunities for partners",
          "moreBtn": "More details",
          "slides": {
            "listToken": {
              "title": "List your token",
              "points": {
                "first": "Your token will be available for instant purchase on Visa / Mastercard cards on three platforms: Web, Android and iOS.",
                "second": "Additional liquidity.",
                "third": "An information guide for the media and token holders.",
                "fourth": "Payment for the services of our partners with your token."
              }
            },
            "api": {
              "title": "API Integration",
              "text": "Discover a huge list of features with our flexible API.",
              "points": {
                "first": "Acceptance of fiat cryptocurrency payments.",
                "second": "Resale of tokens.",
                "third": "Replenishment of crypto wallets from Visa / MS cards.",
                "fourth": "An endless list of your ideas and ideas that you can implement with our API."
              }
            },
            "widget": {
              "title": "Widget",
              "text": "Quick installation. High commission payments. Ideal for crypto media.",
              "points": {
                "first": "Install the widget in 5 minutes.",
                "second": "Availability of all cryptocurrencies.",
                "third": "Customization widget.",
                "fourth": "Adapted for mobile devices."
              }
            },
            "processing": {
              "title": "Classic processing",
              "text": "Do you want to accept payments in rubles, dollars and euros without loss on exchange commissions?",
              "points": {
                "first": "Send a request and receive an offer on the processing of your project."
              }
            }
          }
        },
        "potential": {
          "title": "Potential partners",
          "cards": {
            "wallet": {
              "title": "Crypto wallet",
              "text": "Extend the functionality of the application by starting to sell cryptocurrencies on cards, and make money on it."
            },
            "startup": {
              "title": "Crypto startup",
              "text": "Quick entry to cryptocurrencies is necessary for projects that provide the infrastructure for spending or managing crypto assets."
            },
            "media": {
              "title": "Mass media",
              "text": "Quick entry to cryptocurrencies is necessary for projects that provide the infrastructure for spending or managing crypto assets."
            },
            "cryptocurrency": {
              "title": "Cryptocurrency Issuer (ICO, IEO)",
              "text": "Increase token liquidity. <br/> The easiest and fastest way to buy your token with the ability to compensate 100% of the commission when making a payment."
            }
          }
        },
        "trust": {
          "title": "The best trust us"
        },
        "form": {
          "title": "Allow your customers to buy crypto with bank card",
          "formTitle": "Please fill out the form below and our representative will get back to you within 24 hours",
          "name": "Your name*",
          "email": "Your email*",
          "phone": "Phone*",
          "projectName": "Name of project*",
          "website": "Website",
          "type": "Type of project*",
          "textarea": "Project information or your questions",
          "btn": "Send"
        }
      },
      "faq": {
        "title": "Frequently Asked Questions",
        "button": "Contact Support",
        "questionList": {
          "generalQuestions": {
            "title": "GENERAL QUESTIONS",
            "question1": "WHAT IS INDACOIN?",
            "answer1": "We are a company working in the cryptocurrency field since 2014, based in Estonia. You can use our service to buy over 100 different cryptocurrencies with credit/debit card payment without registration. <br>Our business model combines B2C and B2B segments, enabling card processing for promising coins and acting as a fully-fledged fiat-to-crypto gateway. If you’re interested in scaling your business with us, please visit this <1>page</1>.<br>Indacoin also has its loyalty program, which allows you to buy crypto with 0.00% fees and get cashback on every purchase you make. The key element of this program is the INDA token - a native token of the Indacoin ecosystem. It not only fuels the loyalty and referral systems but also connects Indacoin to IndaFi - an all-in-one DeFi platform for every financial need. At the moment we officially launched the core module of IndaFi - IndaSwap, which allows everyone to buy DeFi tokens directly with Visa and Mastercard.",
            "question2": "HOW CAN I CONTACT YOU?",
            "answer2": "You can contact our support team by e-mail (support@indacoin.com), Telegram (@Indacoin_support) or by using a live chat option on our <1>webpage</1>.",
            "question3": "DO YOU HAVE AN AFFILIATE PROGRAM?",
            "answer3": "Yes, we are happy to provide our services to different types of business. You can find more  details about our affiliate program <1>here</1>.<br> If you want to list a coin on our platform, please, check <3>this page</3>.",
            "question4": "WHICH CRYPTOCURRENCIES CAN I BUY HERE?",
            "answer4": "You can buy over 100 different cryptocurrencies that are all listed on our website.<br> To make an order you can use our website <1>https://indacoin.io</1>. Just enter the amount in the calculator and choose one of the available crypto coins. Then you will be able to enter your email, mobile phone number, card details and crypto wallet address where you want your coins to be deposited. At this stage you will be asked to verify your identity to confirm the payment.",
            "question5": "CAN I SELL MY CRYPTOCURRENCY ON INDACOIN?",
            "answer5": "No, unfortunately, it isn’t possible to exchange cryptocurrency to fiat on Indacoin. However, you can exchange coins to other cryptocurrency or withdraw to a platform that allows exchange to fiat.",
            "question6": "DOES INDACOIN PROVIDE SERVICES WORLDWIDE?",
            "answer6": "Unfortunately, at the moment we do not operate in the following countries: Afghanistan, American Samoa, Albania, Algeria, The Bahamas, Bangladesh, Barbados, Belorussia, Bolivia, Botswana, Cambodia, China, Colombia, Democratic Republic of the Congo, Ecuador, Egypt, Eritrea, Gambia, Ghana, GuineaBissau, Guyana, Iran, Iraq, Ivory Coast, Jamaica, Laos, Lesotho, Liberia, Mali, Mauritius, Mongolia, Morocco, Myanmar, Namibia, Nepal, Nicaragua, Niger, Nigeria, North Korea, Pakistan, Panama, Papua New Guinea, Qatar, Russia, Saudi Arabia, Somalia, Sudan, Syria, Tanzania, Trinidad and Tobago, Uganda, Ukraine, United States of America, Vanuatu, Yemen, Zambia, Zimbabwe. We are constantly improving our platform and believe that one day our service will be available everywhere."
          },
          "cryptoCurrency": {
            "title": "CRYPTOCURRENCY",
            "question1": "WHAT IS CRYPTOCURRENCY?",
            "answer1": "Сryptocurrency (or “crypto”) is a digital currency that can be used to buy goods and services or for trading.<br>Crypto uses cryptography for security that makes it difficult to counterfeit. Also, cryptocurrency is not issued by any central authority, rendering it theoretically immune to government interference or manipulation. ",
            "question2": "WHAT IS BLOCKCHAIN?",
            "answer2": "Blockchain is a database that collects information about cryptocurrency transactions together in groups, also known as blocks.<br>New blocks are always stored linearly and chronologically and can not be removed from the database that is why transactions registered in blockchain can not be changed or declined.",
            "question3": "WHAT IS A HASH (TX HASH)?",
            "answer3": "Each block in the blockchain contains its hash, along with the hash of the block before it, as well as the time stamp. Hash codes are created by a math function that turns digital information into a string of numbers and letters. All crypto transactions can be tracked in blockchain explorers with help of the hash.",
            "question4": "WHAT ARE ALTCOINS?",
            "answer4": "Altcoins are cryptocurrencies other than Bitcoin.",
            "question5": "WHERE CAN I STORE CRYPTOCURRENCY?",
            "answer5": "You can set up a separate wallet for each cryptocurrency on your PC<br>Please, DYOR (do your own research) and pick the wallet provider you like the most. For instance, a few trusted wallets are MetaMask, TrustWallet, and Ledger, but we insist on carefully checking the platform you’re going to use to store your coins. You can use the information in the open sources and consult with the community members of the coins you chose or in our group in Telegram.<br><br>Cryptocurrency purchase is a high-risk operation. It is necessary to analyze all possible risks associated with the market volatility. Indacoin is not responsible for sharp fluctuations in cryptocurrency, its fall in value, impairment and delistment.",
            "question6": "WHAT DO YOU MEAN BY BITCOIN OR CRYPTO WALLET ADDRESS?",
            "answer6": "It is the address that helps to identify your crypto wallet in the blockchain and looks like a combination of digits and letters. You need to enter the address of the crypto wallet registered on the other platform.<br>Usually, a crypto wallet address is displayed in the portfolio section of the account. You can also contact your crypto wallet provider to check the address of your wallet.<br>Please, be very careful while entering the crypto wallet address. Your crypto coins can be lost if the address is entered incorrectly.",
            "question7": "WHAT IS THE VALID CRYPTO WALLET ADDRESS?",
            "answer7": "Every cryptocurrency has its own special format of the crypto wallet address that can be used for this currency. A valid crypto wallet address is an address of the wallet compatible with the cryptocurrency you chose (for example, ERC-20 wallet for ETH or BEP-20 wallet for USDC), you can check the name of the protocol for each currency in the open sources. If you see the error notification saying that you’ve entered an invalid wallet address, please double-check if you copied the wallet address correctly and if it matches the coin you picked (for instance, on our platform only ERC-20 and TRC-20 USDT are available, so please don’t use Omni wallets). You can also contact our support team for quick assistance.",
            "question8": "WHAT IS THE DESTINATION TAG/MEMO?",
            "answer8": "A destination Tag/Memo is an additional address feature necessary for identifying a transaction recipient beyond a wallet address. The Tag/Memo is mandatory for transactions for cryptocurrencies that use this technology.<br> Usually, crypto wallets for XRP, XLM, EOS, ATOM coins have tag/memo.<br>Crypto coins won’t reach your account if the tag/memo of your crypto wallet is not added or incorrect.",
            "question9": "FORGOT TO ADD A MEMO/TAG, WHAT TO DO?",
            "answer9": "Please contact the support team of your wallet to check whether it’s possible to identify your transaction within their system. From our side, we’re always glad to help you prove that it’s your transaction and form a request to the support team for your wallet. Unfortunately, there is a big chance that your wallet provider won’t be able to recover your coins, so please double-check the details when you’re making a crypto purchase.",
            "question10": "HOW FAST IS THE CRYPTOCURRENCY TRANSACTION?",
            "answer10": "Cryptocurrency transaction time depends on which cryptocurrency you are sending.<br> For example, bitcoin transactions take about 15-20 minutes to complete and on average allow up to 1 hour for the rest of the coins. The exact time depends on how soon the transaction is registered and approved in the blockchain network."
          },
          "account": {
            "title": "TRANSACTIONS",
            "question1": "DO I NEED TO SIGN UP?",
            "answer1": "No, to make a purchase you just need to enter in the calculator on the page https://indacoin.io amount of fiat money you want to spend, email/mobile phone number, card details and crypto wallet address. Then you will be forwarded to your order page.",
            "questio2": "WHAT IS THE MINIMUM FOR THE EXCHANGE?",
            "answer2": "The minimum for the exchange depends on cryptocurrency and usually equivalent to 10 USD.",
          },
          "indacoinVerification": {
            "title": "INDACOIN VERIFICATION",
            "question1": "WHAT SHOULD I DO TO VERIFY MY CARD?",
            "answer1": "To complete verification you’ll need to enter the 4 digit code you receive via phone call.<br>For your second step, you will be asked to undergo photo verification, which requires you to upload a photo of your passport/ID, take a selfie on the verification page.<br>Also, you may be asked to provide proof of residential address.",
            "question2": "WHAT DOCUMENTS CAN BE USED FOR RESIDENTIAL ADDRESS VERIFICATION?",
            "answer2": "To verify your residential address you can use a utility bill, bank statement, credit card statement, tax invoices or other government issued residential statements/certificates.<br>Please note that we cannot accept screenshots, mobile phone bills, medical bills, purchase receipts or insurance statements.<br>Proof of Address must be issued within the last 3 months.<br>If your ID document contains your home address information, it can be used as Proof of Address.",
            "question3": "I HAVE MADE AN ORDER AND ENTERED ALL THE DETAILS, WHY IS IT STILL PROCESSING?",
            "answer3": "If you have waited more than 2 minutes, then the order didn't make it to a transaction. It's possible that your card isn't 3D secure and you may need to try again. Make sure you confirm your purchase via PIN code with your bank or you can try buying with a different currency (EUR/USD). Otherwise, if you are certain your card is 3Ds and changing currency doesn't help then you need to contact your bank, they may be blocking your purchase attempts.",
            "question4": "DO I NEED TO GO THROUGH VERIFICATION EVERY TIME I MAKE A PURCHASE?",
            "answer4": "You only need to verify your card once and all following transactions will be automatic. However, we will require verification if you decide to use another bank card.",
            "question5": "WHY DO I NEED TO VERIFY MY BANKING CARD OR SEND A VIDEO?",
            "answer5": "The verification process protects you in case of card theft, hacking or fraudsters; this works the opposite way in case someone is trying to place a purchase using someone else's banking card.",
            "question6": "HOW CAN I TRUST THAT MY DETAILS AND CARD INFO ARE SECURE?",
            "answer6": "We never share your personal information with any Third Parties without your consent and collect only the information required to make sure that you're the card's owner. Our verification process is fully GDPR compliant, you can check the detailed information here: <1>https://sumsub.com/security-compliance</1>",
            "question7": "I CAN NOT COMPLETE MY KYC VERIFICATION. CAN I DO IT LATER?",
            "answer7": "If KYC verification is not completed in 2 hours we cancel the order and the pre-authorisation on your card. You will be able to pass verification while your new order is pending. You can also notify our agent via live-chat to prolong the pending order.",
            "question8": "I CAN NOT COMPLETE MY KYC VERIFICATION. WILL I RECEIVE A REFUND?",
            "answer8": "If KYC verification is not completed in 2 hours we cancel the temporary pre-authorisation that was placed on your card when you first made your order. In this case, funds return to your bank account shortly, usually within 3 business days, the exact time depends on the bank. Otherwise, please contact the bank and they'll be able to see pending declined transaction and remove the hold status from your funds. If you require assistance with verification, please contact our support team via live-chat and they will walk you through the process."
          },
          "commissions": {
            "title": "COMMISSIONS",
            "question1": "WHAT IS YOUR FEE?",
            "answer1": "Our fee varies from purchase to purchase as it is based on numerous factors, that's why we have created a calculator that will tell you the approximate amount of cryptocurrency you will receive, all fees included.",
            "question2": "HOW MUCH WILL I BE CHARGED FOR THE TRANSACTION?",
            "answer2": "You will be charged only the amount you specify during your order in our calculator. All fees are included in that amount.",
            "question3": "DO YOU HAVE ANY DISCOUNTS?",
            "answer3": "Indacoin also has its own <1>loyalty program</1>, which allows you to buy crypto with 0.00% fees and get cashback on every purchase you make. The key element of this program is the INDA token - a native token of the Indacoin ecosystem. It not only fuels the loyalty and referral systems but also connects Indacoin to IndaFi - an all-in-one aggregator for every financial need. At the moment we officially launched the core module of IndaFi - IndaSwap, which allows everyone to buy DeFi tokens directly with Visa and Mastercard."
          },
          "purchase": {
            "title": "PURCHASE",
            "question1": "HOW TO BUY CRYPTOCURRENCY ON INDACOIN?",
            "answer1": "Make sure you are using your own, 3D secure Visa or MasterCard bank card and have a driver's license, ID or passport available in case we require verification. Then please open this <1>page</1> and select in the calculator the cryptocurrency you want to buy, input the amount to be charged from your card in fiat and input the crypto address. Fill in the required fields and once your card is charged our support team will be in contact with you to verify your purchase.",
            "question2": "HOW FAST WILL MY CRYPTOCURRENCY BE SENT?",
            "answer2": "Usually, it takes about 30-60 minutes after you make an order or complete verification (if it’s the first time you use the card on Indacoin).",
            "question3": "WHAT TYPE OF CARDS ARE ACCEPTED?",
            "answer3": "At the moment we accept only Visa and Mastercard with 3D secure option.",
            "question4": "WHAT IS 3D SECURE?",
            "answer4": "3D Secure technology consists of the programs Verified by Visa and MasterCard SecureCode.<br>After you enter your credit card details in our online store, a new window will appear, requesting your personal security code. The bank card issuer will authenticate the transaction within seconds, as well as confirm that you are the individual making the purchase.",
            "question5": "WHAT IS FIAT?",
            "answer5": "Fiat money is every government-issued currency, like the U.S. dollar, the euro or other global currencies.",
            "question6": "WHAT OTHER PAYMENT SYSTEM CAN I USE TO BUY CRYPTO COINS?",
            "answer6": "Currently, we only accept Visa/Master card payments on our platform.",
            "question7": "MY ORDER WAS DECLINED BY THE BANK, WHAT SHOULD I DO?",
            "answer7": "You need to contact your bank and ask for the reason for the decline, perhaps they can lift the restriction so a purchase can be made. Please, also check if crypto purchases are permitted by your bank and your bank card is 3D secure.",
            "question8": "MY TRANSACTION FAILED. WILL I RECEIVE A REFUND?",
            "answer8": "If your transaction fails, we cancel the temporary pre-authorisation that was placed on your card when you first made your order.<br>In this case, funds should have returned to your bank account shortly, usually within 3 business days, the exact time depends on the bank. Otherwise please contact the bank they'll be able to see pending declined transaction and remove the hold status from your funds.",
            "question9": "I RECEIVED FEWER COINS THAN WAS PROMISED. WHY?",
            "answer9": "We process the exchange according to the current market rate at the moment when KYC verification is completed and the order is approved. We are trying to make every transaction as profitable as possible for you but the amount that the user receives may differ from originally shown due to sharp jumps in rate.<br>In case, if the amount differs by more than 25 per cent, the user has the right to ask for  a refund by providing a request via support@indacoin.com",
            "question10": "I’VE BEEN CHARGED TWICE. WILL YOU REFUND ME?",
            "answer10": "It is extremely unlikely we have accidentally charged you twice for the same order, so first, please check to see if you have placed two orders instead of one.<br>If this is not the case, please provide an official bank statement where it is specified that the transaction was authorised by Indacoin (not a screenshot of the SMS) via support@indacoin.com and our finance department will investigate the case and provide you with any possible assistance.",
            "question11": "I DIDN’T MAKE AN ORDER ON INDACOIN BUT MY CARD WAS CHARGED. WHAT SHOULD I DO?",
            "answer11": "If your card was stolen and used for the purchase on our platform by another person, please, block your bank card and contact our agent immediately via live-chat support or e-mail  <1>support@indacoin.com</1> for assistance.<br> We kindly ask you to contact us no later than 3 days from the date of purchase, so that immediate action is taken on our side and if possible - a refund."
          }
        }
      },
      "verification": {
        "placeholder": "Please enter the complete query information"
      },
    }
  },
  et: {
    translation: {
      "header": {
        "menu": {
          "buyBtc": "Osta Bitcoini",
          "partnership": "Äri",
          "paymentStatus": "makse staatus",
          "partnerPanel": "Partnerite Paneel",
          "referral": "Referral",
          "Bonuses": "Bonuses",
          "blog": "Blog",
          "listing": "Listing",
          "systemMonitor": "Monitor",
          "faq": "FAQ",
          "token": "INDA token",
          "account": "Account",
          "verification": "Ametlik Kontroll",
          "tokens": "Tokens",
          "dashboard": "Dashboard",
          "portfolio": "Portfolio",
          "loyalty": "Loyalty",
          "cards": "Cards",
          "profile": "Profile",
          "logout": "Log out",
          "wallet": "Wallet",
          "passiveincome": "Passive income",
          "myAccount": "My account",
          "titleMain": "Ostke oma esimene krüptoraha see on lihtne",
          "titleMainUndo": "Seda tõendab üle 10 miljoni ostu kuus",
          "button": "Jätka",
          "features": "Meie eripärad",
          "reviews": "Kasutajate ülevaated",
          "card1": "Hoiate seda passiivse tulu saamiseks oma portfellist ",
          "card2": "Kauplete sellega aktsiatest suurema spekulatiivse kasumi nimel",
          "card3": "Teete makse nii, nagu tegemist oleks pangahoiusega, kuid kõrgema määraga",
          "card4": "Teete kiireid ülemaailmseid ülekandeid ja maksate veebipõhiselt ilma lisatasudeta",
          "card5": "Saate klienditoelt abi 24/7 reaalajas",
          "card6": "Ostate krüptoraha vahetult Visa & Mastercardiga",
          "card7": "Väldite peidetud teenustasusid ja lisatasusid",
          "card8": "Saate boonuseid iga ostu eest",
          "card9": "Teie raha ja andmed on kaitstud meie tehisintellektil põhineva turbesüsteemiga",
          "footer1": "Indacoin OÜ, registrikood: 14798473,",
          "footer2": "Aadress: Poordi 3- 63, Tallinn, Eesti, 10156, tegevusluba: FVT000145",
          "reviews1": "Protsess oli sujuv ja kiire Protsess oli sujuv ja kiire. Pidin läbima KYC protsessi ja pean ütlema, et see oli üks lihtsamaid KYC-sid, mida ma kunagi näinud olen. Lõpuks võttis kontrollimine umbes 5 minutit ja siis sain kohe oma mündid kätte. Täiesti soovitan",
          "reviews1_title": "Protsess oli sujuv ja kiire",
          "reviews2_title": "Mündid sain suhteliselt kiiresti kätte",
          "reviews2": "Kam marrë monedha relativisht shpejt, duhet të pranoj se përditësimet automatike mbi statusin e transaksionit në TG ishin shumë të dobishme. Vlerësoni përpjekjet, shpresoj se së shpejti do të shtojnë më shumë monedha të rralla",
          "reviews3_title": "Mul oli väga meeldiv kogemus",
          "reviews3": "Mul oli väga meeldiv kogemus. Mul oli kontrollimisega probleeme, tugi oli väga viisakas ja abivalmis. Nii peaksid kõik krüptoteenused toimima!",
          "reviews4_title": "Proovisin seda teenust ja olin väga rahul...",
          "reviews4": "Proovisin seda teenust ja olin selle üle väga rahul. Kahjuks esines väike viivitus, kuid kui võtsin ühendust toega, lahendasid nad probleemi ja hüvitasid viivituse. See tähendab midagi. Proovin seda uuesti, kui pean krüpto alla laadima!"

        }
      },
      "home": {
        "maintitle": "Ostke oma esimene krüptoraha see on lihtne",
        "subtitle": "Seda tõendab üle 10 miljoni ostu kuus",
        "buyButton": "Jätka",
        "features": {
          "title": "Meie eripärad",
          "featurestext": {
            "feature0": "Hoiate seda passiivse tulu saamiseks oma portfellist",
            "feature1": "Kauplete sellega aktsiatest suurema spekulatiivse kasumi nimel",
            "feature2": "Teete makse nii, nagu tegemist oleks pangahoiusega, kuid kõrgema määraga",
            "feature3": "Teete kiireid ülemaailmseid ülekandeid ja maksate veebipõhiselt ilma lisatasudeta",
            "feature4": "Saate klienditoelt abi 24/7 reaalajas",
            "feature5": "Ostate krüptoraha vahetult Visa & Mastercardiga",
            "feature6": "Väldite peidetud teenustasusid ja lisatasusid",
            "feature7": "Saate boonuseid iga ostu eest",
            "feature8": "Teie raha ja andmed on kaitstud meie tehisintellektil põhineva turbesüsteemiga"
          }
        },
        "reviews": {
          "title": "Kasutajate ülevaated",
          "reviewstext": {
            "review0": "Protsess oli sujuv ja kiire Protsess oli sujuv ja kiire. Pidin läbima KYC protsessi ja pean ütlema, et see oli üks lihtsamaid KYC-sid, mida ma kunagi näinud olen. Lõpuks võttis kontrollimine umbes 5 minutit ja siis sain kohe oma mündid kätte. Täiesti soovitan",
            "review1": "Kam marrë monedha relativisht shpejt, duhet të pranoj se përditësimet automatike mbi statusin e transaksionit në TG ishin shumë të dobishme. Vlerësoni përpjekjet, shpresoj se së shpejti do të shtojnë më shumë monedha të rralla",
            "review2": "Mul oli väga meeldiv kogemus. Mul oli kontrollimisega probleeme, tugi oli väga viisakas ja abivalmis. Nii peaksid kõik krüptoteenused toimima!",
            "review3": "Proovisin seda teenust ja olin selle üle väga rahul. Kahjuks esines väike viivitus, kuid kui võtsin ühendust toega, lahendasid nad probleemi ja hüvitasid viivituse. See tähendab midagi. Proovin seda uuesti, kui pean krüpto alla laadima!"
          }
        }
      },
      "partnership": {
        "firstBlock": {
          "title": "Kasvatage ja laiendage oma <br/>äri meiega",
          "firstPoint": "Tehke parimat teenust 5 aastat",
          "secondPoint": "3-päevane integratsioon koos täieliku tehnilise toega",
          "thirdPoint": "Parimad hinnad – parimad tingimused",
          "button": "Hakka partneriks"
        },
        "secondBlock": {
          "title": "Äripartnerlus",
          "text": "Indacoiniga koostöö tegemiseks on palju võimalusi. Indacoini partnerlusprogramm on mõeldud krüptoga seotud ettevõtetele, kes on valmis ühendama krüptovaluutade maailma traditsioonilise fiat-rahasüsteemiga, et suurendada krüptotööstuses osalemist."
        },
        "thirdBlock": {
          "title": "Miks teha koostööd Indacoiniga?",
          "slides": {
            "security": {
              "title": "Turvalisus",
              "text": "Oma pettustevastane mehhanism ja regulaarsed turvaauditid"
            },
            "stability": {
              "title": "Stabiilsus",
              "text": "5 aastat pidevalt makseid vastu võtnud"
            },
            "speed": {
              "title": "Kiirus",
              "text": "Tehingu lõpuleviimiseks kulub 5–20 minutit"
            },
            "freedom": {
              "title": "Vabadus",
              "text": "Toetame enam kui 150 krüptovaluutat"
            },
            "scale": {
              "title": "Kaal",
              "text": "Aktsepteerime makseid enam kui 140 riigis"
            }
          }
        },
        "opportunities": {
          "title": "Võimalused partneritele",
          "moreBtn": "Rohkem detaile",
          "slides": {
            "listToken": {
              "title": "Loetlege oma märk",
              "points": {
                "first": "Teie žetoon on saadaval kohe ostmiseks Visa / Mastercard kaartidel kolmel platvormil: Web, Android ja iOS.",
                "second": "Täiendav likviidsus.",
                "third": "Teabejuhend meediale ja märgiomanikele.",
                "fourth": "Meie partnerite teenuste eest tasumine teie märgiga."
              }
            },
            "api": {
              "title": "API integreerimine",
              "text": "Avastage meie paindliku API abil tohutu funktsioonide loend.",
              "points": {
                "first": "Fiat krüptovaluuta maksete vastuvõtmine.",
                "second": "Märkide edasimüük.",
                "third": "Krüptorahakottide täiendamine Visa / MS kaartidelt.",
                "fourth": "Lõputu nimekiri teie ideedest ja ideedest, mida saate meie API-ga rakendada"
              }
            },
            "widget": {
              "title": "Vidin",
              "text": "Kiire paigaldus. Kõrged komisjonitasud. Ideaalne krüptomeedia jaoks.",
              "points": {
                "first": "Installige vidin 5 minutiga.",
                "second": "Kõigi krüptovaluutade kättesaadavus.",
                "third": "Kohandamise vidin.",
                "fourth": "Kohandatud mobiilseadmete jaoks."
              }
            },
            "processing": {
              "title": "Klassikaline töötlemine",
              "text": "Kas soovite vastu võtta makseid rublades, dollarites ja eurodes ilma vahetusvahendustasude kahjumita?",
              "points": {
                "first": "Saatke päring ja saage pakkumine oma projekti menetlemise kohta."
              }
            }
          }
        },
        "potential": {
          "title": "Potentsiaalsed partnerid",
          "cards": {
            "wallet": {
              "title": "Krüptorahakott",
              "text": "Laiendage rakenduse funktsionaalsust, alustades krüptovaluutade müümist kaartidel, ja teenige sellega raha."
            },
            "startup": {
              "title": "Krüpto käivitamine",
              "text": "Kiire krüptovaluutadesse sisenemine on vajalik projektide jaoks, mis pakuvad infrastruktuuri krüptovarade kulutamiseks või haldamiseks."
            },
            "media": {
              "title": "Massimeedia",
              "text": "Kiire krüptovaluutadesse sisenemine on vajalik projektide jaoks, mis pakuvad infrastruktuuri krüptovarade kulutamiseks või haldamiseks."
            },
            "cryptocurrency": {
              "title": "Krüptovaluuta väljastaja (ICO, IEO)",
              "text": "Suurendage märgi likviidsust. <br/> Lihtsaim ja kiireim viis žetooni ostmiseks, mis võimaldab makse sooritamisel 100% vahendustasu hüvitada."
            }
          }
        },
        "trust": {
          "title": "Parimad usaldavad meid"
        },
        "form": {
          "title": "Lubage oma klientidel osta pangakaardiga krüptoraha",
          "formTitle": "Täitke allolev vorm ja meie esindaja võtab teiega 24 tunni jooksul ühendust",
          "name": "Sinu nimi*",
          "email": "Sinu email*",
          "phone": "Telefon*",
          "projectName": "Projekti nimi*",
          "website": "Veebileht",
          "type": "Projekti tüüp*",
          "textarea": "Projekti teave või teie küsimused",
          "btn": "Saada"
        }
      },
      "faq": {
        "title": "Korduma kippuvad küsimused",
        "button": "Võtke ühendust tugiteenusega",
        "questionList": {
          "generalQuestions": {
            "title": "ÜLDISED KÜSIMUSED",
            "question1": "MIS ON INDACOIN?",
            "answer1": "Oleme alates 2014. aastast krüptoraha valdkonnas tegutsev ettevõte, mis asub Eestis. Meie teenusega saate osta krediit-/deebetkaardimaksega üle 100 erineva krüptovaluuta ilma registreerimiseta. Samuti saate Indacoinis hõlpsasti ostetud krüpto salvestada, krüptomünte vahetada ja välisrahakotti välja võtta, kui see ühildub teie valitud valuutaga.<br>Meie ärimudel ühendab B2C ja B2B segmendid, võimaldades paljutõotavate kaartide töötlemist münte ja toimib täieõigusliku fiat-to-crypto lüüsina. Kui olete huvitatud oma äri laiendamisest meiega, külastage seda <1>lehte</1>.<br>Indacoinil on ka oma <3>lojaalsusprogramm</3>, mis võimaldab teil osta krüpto 0,00% tasud ja raha tagasi iga ostu eest. Selle programmi põhielement on INDA märk – Indacoini ökosüsteemi algne märk. See mitte ainult ei toidab lojaalsus- ja suunamissüsteeme, vaid ühendab ka Indacoini IndaFiga – kõik-ühes DeFi platvormiga iga rahalise vajaduse jaoks. Hetkel lansseerisime ametlikult IndaFi põhimooduli - IndaSwap, mis võimaldab kõigil osta DeFi tokeneid otse Visa ja Mastercardiga.",
            "question2": "KUIDAS SAAN SINUGA ÜHENDUST VÕTTA?",
            "answer2": "Saate meie tugimeeskonnaga ühendust võtta e-posti (support@indacoin.com), telegrammi (@Indacoin_support) või meie <1>veebilehe</1> reaalajas vestluse kaudu.",
            "question3": "KAS TEIL ON SIDUSPROGRAMM?",
            "answer3": "Jah, meil on hea meel pakkuda oma teenuseid erinevat tüüpi ettevõtetele. Lisateavet meie sidusprogrammi kohta leiate <1>siit</1>.<br> Kui soovite mündi meie platvormil noteerida, vaadake <3>seda lehte</3>.",
            "question4": "MILLISEID KRÜPTOVALUUTAID SAAB SIIT OSTA?",
            "answer4": "Saate osta üle 100 erineva krüptovaluuta, mis kõik on loetletud meie veebisaidil.<br> Tellimuse tegemiseks võite kasutada meie veebisaiti <1>https://indacoin.com</1> või rakendust. Lihtsalt sisestage summa kalkulaatorisse ja valige üks saadaolevatest krüptomüntidest. Seejärel saate sisestada oma e-posti aadressi, mobiiltelefoni numbri, kaardi andmed ja krüptorahakoti aadressi, kuhu soovite oma münte hoiustada. Selles etapis palutakse teil makse kinnitamiseks oma isikut kinnitada.",
            "question5": "KAS MA SAAN OMA KRÜPTOVALUUTA INDACOINIS MÜÜA?",
            "answer5": "Ei, kahjuks ei ole Indacoinis võimalik krüptovaluutat fiati vastu vahetada. Küll aga saate vahetada münte mõne teise krüptovaluuta vastu või välja võtta platvormi, mis võimaldab vahetada fiati.",
            "question6": "KAS MA SAAB MÜNTE INDACOINI RAHAKOTI hoiule panna?",
            "answer6": "Kahjuks ei toeta Indacoin välisest rahakotist Indacoini sissemaksevõimalust. Münte saate Indacoini rahakotti hoiustada ainult ostmise teel.",
            "question7": "KAS INDACOIN PAKUB TEENUSI ÜLE MAAILMA?",
            "answer7": "Kahjuks ei tegutse me hetkel järgmistes riikides: Afganistan, Ameerika Samoa, Albaania, Alžeeria, Bahama saared, Bangladesh, Barbados, Boliivia, Botswana, Kambodža, Hiina, Colombia, Kongo Demokraatlik Vabariik, Ecuador, Egiptus , Eritrea, Gambia, Ghana, Guinea-Bissau, Guyana, Iraan, Iraak, Elevandiluurannik, Jamaica, Laos, Lesotho, Libeeria, Mali, Mauritius, Mongoolia, Maroko, Myanmar, Namiibia, Nepal, Nicaragua, Niger, Nigeeria, Põhja-Korea , Pakistan, Panama, Paapua Uus-Guinea, Katar, Saudi Araabia, Somaalia, Sudaan, Süüria, Tansaania, Trinidad ja Tobago, USA, Uganda, Vanuatu, Jeemen, Sambia, Zimbabwe. Täiustame oma platvormi pidevalt ja usume, et ühel päeval on meie teenus kõikjal saadaval."
          },
          "cryptoCurrency": {
            "title": "KRÜPTOVALUUTA",
            "question1": "MIS ON KRÜPTOVALUUTA?",
            "answer1": "Krüptovaluuta (ehk krüptovaluuta) on digitaalne valuuta, mida saab kasutada kaupade ja teenuste ostmiseks või kauplemiseks.<br>Krüpto kasutab turvalisuse tagamiseks krüptograafiat, mis muudab võltsimise keeruliseks. Samuti ei emiteeri krüptovaluutat ükski keskasutus, mis muudab selle teoreetiliselt immuunseks valitsuse sekkumise või manipuleerimise suhtes. ",
            "question2": "MIS ON BLOCKCHAIN?",
            "answer2": "Blockchain on andmebaas, mis kogub teavet krüptovaluutatehingute kohta gruppidena, mida nimetatakse ka plokkideks.<br>Uusi plokke salvestatakse alati lineaarselt ja kronoloogiliselt ning neid ei saa andmebaasist eemaldada, mistõttu ei saa plokiahelas registreeritud tehinguid muuta või tagasi lükatud.",
            "question3": "MIS ON RÄSI (TX HASH)?",
            "answer3": "Iga plokk plokiahelas sisaldab oma räsi koos sellele eelneva ploki räsi ja ajatempliga. Räsikoodid luuakse matemaatilise funktsiooni abil, mis muudab digitaalse teabe numbrite ja tähtede jadaks. Kõiki krüptotehinguid saab räsi abil plokiahela uurijates jälgida.",
            "question4": "MIS ON ALTCOINID?",
            "answer4": "Altcoinid on krüptovaluutad peale Bitcoini.",
            "question5": "KUS SAAB KRÜPTOVALUUTA SÄILITADA?",
            "answer5": "Saate seadistada oma arvutis iga krüptovaluuta jaoks eraldi rahakoti või registreerida Indacoinis isikliku konto ja salvestada sinna 100+ krüptovaluutat.<br>Palun DYOR (uurige ise) ja valige rahakoti pakkuja, mis teile meeldib. enamus. Näiteks mõned usaldusväärsed rahakotid on MetaMask, TrustWallet ja Ledger, kuid me nõuame hoolikalt platvormi, mida kavatsete oma müntide hoidmiseks kasutada. Saate kasutada avatud allikates leiduvat teavet ja konsulteerida valitud müntide kogukonna liikmetega või meie Telegrami grupis.<br>Palume oma altcoine Indacoinis pikka aega mitte hoida ja need välja võtta eraldi rahakott, mis on teie arvutis täpselt selle krüptovaluuta jaoks määratud.<br>Krüptovaluuta ostmine on kõrge riskiga toiming. On vaja analüüsida kõiki võimalikke turu volatiilsusega seotud riske. Indacoin ei vastuta krüptovaluuta järskude kõikumiste, selle väärtuse languse, väärtuse languse ja delisteerimise eest.",
            "question6": "MIDA TE MÕTETE BITCOINI VÕI KRÜPTORAHAKOTI AADRESSI JÄRGI?",
            "answer6": "See on aadress, mis aitab tuvastada teie krüptorahakoti plokiahelas ja näeb välja nagu numbrite ja tähtede kombinatsioon. Saate sisestada teisel platvormil registreeritud krüptorahakoti aadressi või <1>luua konto</1> Indacoinis.<br>Tavaliselt kuvatakse krüptorahakoti aadress konto portfelli jaotises. Samuti võite võtta ühendust oma krüptorahakoti pakkujaga, et kontrollida oma rahakoti aadressi.<br>Olge krüptorahakoti aadressi sisestamisel väga ettevaatlik. Teie krüptomündid võivad kaotsi minna, kui aadress on valesti sisestatud.",
            "question7": "MIS ON KEHTIV KRÜPTORAHAKOTI AADRESS?",
            "answer7": "Igal krüptovaluutal on oma krüptorahakoti aadressi erivorming, mida saab selle valuuta jaoks kasutada. Kehtiv krüptorahakoti aadress on rahakoti aadress, mis ühildub teie valitud krüptovaluutaga (näiteks ERC-20 rahakott ETH jaoks või rahakott BEP-20 USDC jaoks), saate vaadata iga valuuta protokolli nime. allikatest. Kui näete veateadet, mis ütleb, et sisestasite vale rahakoti aadressi, kontrollige veelkord, kas kopeerisite rahakoti aadressi õigesti ja kas see ühtib teie valitud mündiga (näiteks meie platvormil on saadaval ainult ERC-20 USDT , seega ärge kasutage TRC-20 või Omni rahakotte). Kiire abi saamiseks võite ühendust võtta ka meie tugimeeskonnaga.",
            "question8": "MIS ON SIHTKOHA SILT/MEMO?",
            "answer8": "Sihtmärk/memo on täiendav aadressifunktsioon, mis on vajalik tehingu saaja tuvastamiseks väljaspool rahakoti aadressi. Silt/memo on kohustuslik seda tehnoloogiat kasutavate krüptovaluutade tehingute puhul.<br> Tavaliselt on XRP-, XLM-, EOS- ja ATOM-müntide krüptorahakottidel silt/memo.<br>Krüptomündid ei jõua teie kontole, kui silt /memo teie krüptorahakoti kohta pole lisatud või see on vale.",
            "question9": "UNUSTASID MÄRKUST/MÄRGIST LISADA, MIDA TEHA?",
            "answer9": "Võtke ühendust oma rahakoti tugimeeskonnaga, et kontrollida, kas teie tehing on nende süsteemis võimalik tuvastada. Meil on alati hea meel aidata teil tõestada, et see on teie tehing, ja esitada tugimeeskonnale teie rahakoti taotlus. Kahjuks on suur tõenäosus, et teie rahakoti pakkuja ei saa teie münte taastada, seega kontrollige krüptoostu sooritamisel üksikasju veel kord.",
            "question10": "KUI KIIRE ON KRÜPTOVALUUTA TEHING?",
            "answer10": "Krüptovaluutatehingute aeg sõltub sellest, millist krüptovaluutat saadate.<br> Näiteks bitcoini tehingute sooritamiseks kulub umbes 15-20 minutit ja keskmiselt kuni 1 tund ülejäänud müntide jaoks. Täpne aeg sõltub sellest, kui kiiresti tehing plokiahela võrgus registreeritakse ja heaks kiidetakse."
          },
          "account": {
            "title": "TEHINGUD",
            "question1": "KAS MA PEAN SIIT OSTMISEKS REGISTREERIMA/ KONTO LOOMA?",
            "answer1": "Ei, Indacoinis konto omamine ei ole krüptomüntide ostmiseks kohustuslik. Ostu sooritamiseks peate lihtsalt sisestama lehel <1>https://indacoin.io</1> asuvasse kalkulaatorisse fiat-raha summa, mida soovite kulutada, e-posti aadress, mobiiltelefoni number, kaardi andmed ja krüptorahakoti aadress. . Seejärel suunatakse teid teie tellimuse lehele.",
            "question2": "MIS ON VAHETUSE MIINIMUM?",
            "answer2": "Vahetuse miinimum sõltub krüptovaluutast ja on tavaliselt võrdne 10 USD-ga.",
          },
          "indacoinVerification": {
            "title": "INDAKOINI KONTROLLIMINE",
            "question1": "MIDA PEAKSIN TEGEMA, ET OMA KAARDI KINNITADA?",
            "answer1": "Kinnitamise lõpuleviimiseks peate sisestama telefonikõne teel saadud 4-kohalise koodi.<br>Teiseks sammuks palutakse teil läbida fotoga kinnitamine, mille jaoks peate üles laadima foto oma passist/ID-st. selfie kinnituslehel.<br>Samuti võidakse teil paluda esitada tõend elukoha aadressi kohta.",
            "question2": "MILLISEID DOKUMENTE SAAB KASUTADA ELUKOHA AADRESSI KONTROLLIMISEKS?",
            "answer2": "Oma elukoha aadressi kinnitamiseks võite kasutada kommunaalarvet, pangaväljavõtet, krediitkaardi väljavõtet, maksuarveid või muid valitsuse väljastatud elukoha väljavõtteid/sertifikaate.<br>Pange tähele, et me ei saa aktsepteerida ekraanipilte, mobiiltelefoni arveid, raviarveid ega ostutšekke. või kindlustusväljavõtted.<br>Aadressitõend tuleb väljastada viimase 3 kuu jooksul.<br>Kui teie isikut tõendav dokument sisaldab teie koduse aadressi teavet, saab seda kasutada aadressi tõendina.",
            "question3": "OLEN TEINUD TELLIMUSE JA SISESTANUD KÕIK ANDMED, MIKS SEE VEEL TÖÖTLEB?",
            "answer3": "Kui olete oodanud üle 2 minuti, siis tellimus ei jõudnud tehinguni. Võimalik, et teie kaart ei ole 3D-turvaline ja peate võib-olla uuesti proovima. Kinnitage ost kindlasti pangas PIN-koodiga või võite proovida osta muu valuutaga (EUR/USD). Vastasel juhul, kui olete kindel, et teie kaart on 3D-kaart ja valuuta muutmine ei aita, peate võtma ühendust oma pangaga, kuna pank võib teie ostukatseid blokeerida.",
            "question4": "KAS MA PEAN KINNITAMA IGA KORD, KUI OSTUN TEHA?",
            "answer4": "Peate oma kaarti kinnitama vaid üks kord ja kõik järgnevad tehingud tehakse automaatselt. Kui otsustate kasutada teist pangakaarti, nõuame siiski kinnitust.",
            "question5": "MIKS PEAN OMA PANGAKAARTI KINNITAMA VÕI VIDEO SAATMA?",
            "answer5": "Kinnitusprotsess kaitseb teid kaardivarguse, häkkimise või petturite eest; see toimib vastupidi, kui keegi üritab sooritada ostu kellegi teise pangakaardiga.",
            "question6": "KUIDAS SAAN USLADA, ET MINU ANDMED JA KAARDITEAVE ON TURVATUD?",
            "answer6": "Me ei jaga kunagi teie isikuandmeid kolmandate osapooltega ilma teie nõusolekuta ja kogume ainult teavet, mis on vajalik veendumaks, et olete kaardi omanik. Meie kinnitusprotsess on täielikult GDPR-iga ühilduv, üksikasjalikku teavet saate vaadata siit: <1>https://sumsub.com/security-compliance</1>",
            "question7": "MA EI SAA OMA KYC KINNITUST LÕPETADA. KAS SAAN SEDA HILJEM TEHA?",
            "answer7": "Kui KYC-i kinnitamine ei ole 2 tunni jooksul lõpule viidud, tühistame tellimuse ja teie kaardil oleva eelautoriseerimise. Kui teie uus tellimus on ootel, saate kinnituse läbida. Ootel tellimuse pikendamiseks võite meie agenti ka otsevestluse kaudu teavitada.",
            "question8": "MA EI SAA OMA KYC KINNITUST LÕPETADA. KAS MA SAAN TAGASI?",
            "answer8": "Kui KYC-kinnitust ei lõpetata 2 tunni jooksul, tühistame ajutise eelautoriseerimise, mis kanti teie kaardile tellimuse tegemisel. Sel juhul tagastatakse raha teie pangakontole peagi, tavaliselt 3 tööpäeva jooksul, täpne aeg sõltub pangast. Vastasel juhul võtke ühendust pangaga ja nad näevad ootel olevat tagasilükatud tehingut ja eemaldavad teie vahenditelt ooteloleku. Kui vajate kinnitamisel abi, võtke otsevestluse kaudu ühendust meie tugimeeskonnaga ja nad juhendavad teid protsessi kaudu."
          },
          "commissions": {
            "title": "KOMISJONID",
            "question1": "MIS ON TEIE TASU?",
            "answer1": "Meie tasu on ostuti erinev, kuna see põhineb paljudel teguritel, mistõttu oleme loonud kalkulaatori, mis ütleb teile ligikaudse krüptovaluuta koguse, mis sisaldab kõiki tasusid.",
            "question2": "KUI PALJU MULT TEHINGU EEST TASU VÕETAKSE?",
            "answer2": "Teilt võetakse tasu ainult selle summa, mille määrate tellimuse esitamisel meie kalkulaatoris. Kõik tasud sisalduvad selles summas.",
            "question3": "KAS SUL ON ALLAHINDLUSID?",
            "answer3": "Indacoinil on ka oma <1>lojaalsusprogramm</1>, mis võimaldab osta 0,00% tasudega krüptoraha ja saada iga ostu pealt raha tagasi. Selle programmi põhielement on INDA märk – Indacoini ökosüsteemi algne märk. See mitte ainult ei toidab lojaalsus- ja suunamissüsteeme, vaid ühendab Indacoini ka IndaFiga – kõik-ühes koondajaga iga rahalise vajaduse jaoks. Hetkel lansseerisime ametlikult IndaFi põhimooduli - IndaSwap, mis võimaldab kõigil osta DeFi tokeneid otse Visa ja Mastercardiga."
          },
          "purchase": {
            "title": "OST",
            "question1": "KUIDAS INDACOINIST KRÜPTOVALUUTA OSTA?",
            "answer1": "Veenduge, et kasutate oma 3D-turvalist Visa või MasterCardi pangakaarti ja teil on olemas juhiluba, ID või pass juhuks, kui vajame kontrollimist. Seejärel avage see <1>leht</1> ja valige kalkulaatoris krüptovaluuta, mida soovite osta, sisestage oma kaardilt võetav summa fiati ja sisestage krüptoaadress (või jätke väli tühjaks, kui soovite sissemakse Indacoini rahakott). Täitke nõutud väljad ja kui teie kaardilt on tasutud, võtab meie tugimeeskond teiega ühendust, et teie ost kinnitada.",
            "question2": "KUI KIIRESTI MINU KRÜPTOVALUUTA SAADATAKSE?",
            "answer2": "Tavaliselt kulub pärast tellimuse vormistamist või kinnitamise lõpetamist umbes 30–60 minutit (kui kasutate kaarti Indacoinis esimest korda).",
            "question3": "MILLIST TÜÜPI KAARTE AKTSEPTEERITAKSE?",
            "answer3": "Hetkel aktsepteerime ainult Visa ja Mastercard 3D-turvalisusega.",
            "question4": "MIS ON 3D SECURE?",
            "answer4": "3D Secure tehnoloogia koosneb programmidest Verified by Visa ja MasterCard SecureCode.<br>Pärast krediitkaardi andmete sisestamist meie e-poes avaneb uus aken, kus küsitakse isiklikku turvakoodi. Pangakaardi väljastaja autentib tehingu mõne sekundi jooksul ja kinnitab, et olete ostu sooritav isik.",
            "question5": "MIS ON FIAT?",
            "answer5": "Fiati raha on iga valitsuse emiteeritud valuuta, nagu USA dollar, euro või muud ülemaailmsed valuutad.",
            "question6": "MILLIST MAKSESÜSTEEMI SAAB MA KÜPTOMÜNDE OSTAMISEKS KASUTADA?",
            "answer6": "Praegu aktsepteerime oma platvormil ainult Visa/Master kaardimakseid.",
            "question7": "MINU TELLIMUS LÄBITAS PANGA KOHTA, MIDA PEAKSIN TEGEMA?",
            "answer7": "Peate võtma ühendust oma pangaga ja küsima tagasilükkamise põhjust, võib-olla saavad nad piirangu tühistada, et ost sooritada. Palun kontrolli ka, kas sinu pank lubab krüptoostud ja kas sinu pangakaart on 3D-turvaline.",
            "question8": "MINU TEHING EBAÕNNES. KAS MA SAAN TAGASI?",
            "answer8": "Kui teie tehing ebaõnnestub, tühistame ajutise eelautoriseerimise, mis kanti teie kaardile tellimuse tegemisel.<br>Sellisel juhul peaks raha olema teie pangakontole peagi, tavaliselt 3 tööpäeva jooksul, tagastatud. aeg oleneb pangast. Vastasel juhul võtke ühendust pangaga, kes näeb ootel tagasilükatud tehingut ja eemaldab teie rahalt ooteloleku.",
            "question9": "SAASIN VÄHEM MÜNTE, KUI LUBATUD. MIKS?",
            "answer9": "Töötleme vahetust vastavalt kehtivale turukursile hetkel, mil KYC kontrollimine on lõppenud ja tellimus on kinnitatud. Püüame teha iga tehingu teile võimalikult tulusaks, kuid kasutajale saadav summa võib järsu kursi hüppe tõttu erineda algselt näidatust.<br>Juhul kui summa erineb rohkem kui 25 protsenti, kasutajal on õigus nõuda raha tagasi, esitades taotluse aadressil support@indacoin.com",
            "question10": "MULT ON KAKS KORDA LASTUD. KAS SA TASTA MULLE TASU?",
            "answer10": "On äärmiselt ebatõenäoline, et oleme teilt sama tellimuse eest kogemata kaks korda tasu võtnud, seega kontrollige esmalt, kas olete ühe tellimuse asemel esitanud kaks.<br>Kui see nii ei ole, esitage ametlik pangaväljavõte, kus see täpsustatakse, et tehingu autoriseeris Indacoin (mitte SMS-i ekraanipilt) aadressil support@indacoin.com ning meie finantsosakond uurib juhtumit ja annab teile võimalikku abi.",
            "question11": "MA EI TEINUD INDACOINIS TELLIMUST, KUID MINU KAARTI VÕI TASUTA. MIDA PEAKSIN TEGEMA?",
            "answer11": "Kui teie kaart varastati ja seda kasutas meie platvormil ostmiseks mõni teine isik, blokeerige oma pangakaart ja võtke otsekohe ühendust meie agendiga reaalajas vestluse toe või e-posti aadressil <1>support@indacoin.com</1> abi.<br> Palume võtta meiega ühendust hiljemalt 3 päeva jooksul alates ostukuupäevast, et saaksime koheselt tegutseda ja võimalusel raha tagastada."
          }
        }
      },
      "verification": {
        "text": "Indacoini nimel toimuvate pettuste vältimiseks saate kontrollida, kas kanal on ametlik kanal või mitte. Sealhulgas Twitter, Telegram, LinkedIn.",
        "modalTrueText": "{{value}}, mille kohta küsisite, on Indacoini ametlik kanal",
        "falseModalTitle": "Mitteametlik kanal",
        "trueModalTitle": "Ametlik kanal",
        "confirm": "Kinnita",
        "mainTitle": "Indacoin Ametlik Kontroll",
        "subTitle": "Palun veenduge, et külastate",
        "placeholder": "Sisestage päringu täielik teave",
        "modalFalseText": "The <0>{{value}}</0> mille kohta küsisite, <1>EI OLE</1> Indacoini ametlik kanal. Palun pöörake tähelepanu oma varadele ja kaitske oma isikuandmeid <br /> <br /> Saate sisu kontrollida ja uuesti päringu teha."
      },
    }
  }
}

const brouserLanguage = window.navigator.language.split('-')[0]
const acceptLanguage = ["en", "et"]
const storage = Storage.getInstance()
if (storage.get(COOKIES_LANGUAGE)) {
  let lang = acceptLanguage.find((el) => {
    if (brouserLanguage == el) return true
    return false
  })
  storage.set(COOKIES_LANGUAGE, lang || "en");

}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: storage.get(COOKIES_LANGUAGE),
    interpolation: {
      escapeValue: false
    }
  });
export default i18n;
