import React, {useState} from 'react';
import './style.sass';
import { useTranslation } from "react-i18next";
// import Storage from '@tools/Globals';

export const COOKIES_LANGUAGE = 'cookies_language'
const LangBlock = () => {
    const { i18n } = useTranslation();
    // const storage = Storage.getInstance()

    const changeLanguage = (language) => {
        setLanguage(language)
        setopenLanguges(false)
        // storage.set(COOKIES_LANGUAGE, language)
        i18n.changeLanguage(language);
    } 
    const [Language, setLanguage] = useState('en')
    const [openLanguges, setopenLanguges] = useState(false)

    let languages = ['en', 'ee']
    languages = languages.sort(a => ~a.indexOf(Language))


    const openHandler = () => {
        document.addEventListener('click', closeHandler)
        setopenLanguges(true)
    }
    const closeHandler = () => {
        setopenLanguges(false)
        document.removeEventListener('click', closeHandler)
    }


    return (
        <div className="header__WrapperLang" onClick={e => e.stopPropagation()}>
                <div className = "header__Language" 
                onClick={() => {
                    openHandler(true)
                }}>
                    <p>{Language.toUpperCase()}</p>
                    <svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.5 7L0.602887 0.249999L8.39711 0.25L4.5 7Z" fill="#3463F8"/>
                    </svg>
                </div>
            {openLanguges &&
                <div className = "header__Languages">
                    {
                        languages.map((lang, index) => {
                            return <span
                            className="itemLang"
                            key={ index }
                            onClick={() => { changeLanguage(lang), closeHandler(false) }}>
                                { lang.toUpperCase() }
                            </span>
                        })
                    }
                </div>
            }
        </div>
    )
};

const images = (name) => {
    const img = new URL(`../../assets/images/Languages/${name}.png`, import.meta.url).href
    return img || null
}

export default LangBlock;