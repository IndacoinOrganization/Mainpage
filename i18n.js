import i18n from 'i18next';
import {initReactI18next} from "react-i18next";
import settings from '@/config/settings.json';
import Globals from '@tools/Globals';
import Country from 'country-js';

export const DEFAULT_LANGUAGE = 'en';

// set language from path location first param
let language = DEFAULT_LANGUAGE;
let country = window.currentCountry || null;

Globals.getInstance().languageUrlWasChanged = false; // for @components//BuyCryptoForms/EmailStep/index.js

const navigatorLanguageArray = window.navigator.language.split('-');

if (country == null) {
    for (let item of settings.locales.available) {
        if (navigatorLanguageArray[0] === item.language) {
            country = item.defaultCountry;
            break;
        }
    }
}

if(window.localStorage.getItem('language')) {
    const local = window.localStorage.getItem('language').toLowerCase();
    const find = settings.locales.available.find(item => item.language === local);
    if(find) {
        language = local;
    }
}

const paramsArray = location.pathname.substr(env.BASEPATH.length).split('/');

for (let i = 0; i < settings.locales.available.length; i++) {
    if (settings.locales.available[i].language === paramsArray[0]) {
        language = paramsArray[0];
        Globals.getInstance().languageUrlWasChanged = true;
        break;
    }
}

if (!Globals.getInstance().languageUrlWasChanged && language !== DEFAULT_LANGUAGE) {
    Globals.getInstance().languageUrlWasChanged = true;

    // find country currency
    const countrySearch = Country.search(country);

    if (countrySearch.length > 0) {
        Globals.getInstance().countryCurrency = countrySearch[0].currency.currencyCode;
    }

    let url = new URL(document.location);
    let separator = url.pathname.length > 0 ? '' : '/';
    url.pathname = '/' + language + separator + url.pathname;
    // history.pushState({}, "", url.pathname + url.search);
}

// find country currency
const countrySearch = Country.search(country);

if (countrySearch.length > 0) {
    Globals.getInstance().countryCurrency = countrySearch[0].currency.currencyCode;
}

// set globals
Globals.getInstance().countryCode = country;

const resources = settings.locales.available.reduce((result, item) => {
    try {
        return {
            ...result,
            [item.language]: {
                translation: require(`@locales/${item.language}.json`),
            }
        };
    } catch(e) {
        return result;
    }
}, {});

i18n.use(initReactI18next).init({
    interpolation: { escapeValue: false },  // React already does escaping
    lng: language,
    resources,
});

export default i18n;

/**
 * Get languages pattern
 *
 * @returns {string}
 */
export function languagesPattern() {
    let langPattern = '';

    for (let i = 0; i < settings.locales.available.length; i++) {
        if (settings.locales.available[i].language === DEFAULT_LANGUAGE) {
            continue;
        }

        langPattern += settings.locales.available[i].language;

        if (settings.locales.available.length - 1 !== i) {
            langPattern += '|';
        }
    }

    return langPattern;
}

/**
 * Generate language url
 *
 * @param language
 * @returns {string}
 */
export function generateLanguageUrl(language) {
    return language;
}

/**
 * Chnage url with language
 *
 * @param currentLanguage
 * @param changeLanguage
 * @returns {*}
 */
export function changeUrl (currentLanguage, changeLanguage) {

    const currentLang = generateLanguageUrl(currentLanguage);
    const element = generateLanguageUrl(changeLanguage);

    if (element.toLowerCase() === currentLang.toLowerCase()) {
        return false;
    }

    const host = location.protocol + '//' + location.host;
    const pathname = location.pathname;
    let array = pathname.substr(env.BASEPATH.length).split('/');

    if (array[0] === currentLang) {
        array[0] = element;

        if (changeLanguage === DEFAULT_LANGUAGE) {
            array.splice(0, 1);
        }
    } else {
        array.unshift(element);
    }

    window.localStorage.setItem('language', changeLanguage.toLowerCase());

    // return window.location.replace(host + env.BASEPATH + array.join('/') + window.location.search);
}

export const pathname = lang => {
    const url = new URL(window.location);
    const arr = url.pathname.match(/(?!\/)[^/]+/g);
    if (arr) {
        if (settings.locales.available.some(({ language }) => language === arr[0])) {
            arr[0] = lang;
        } else {
            arr.unshift(lang);
        }
        if (arr[0] === 'en') {
            delete arr[0];
        }
        url.pathname = arr.join('/');
        window.history.replaceState(null, document.title, url);
    }
};