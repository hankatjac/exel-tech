import React from 'react';
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  // const [buttonText, setButtonText] = useState(i18n.language);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      {
        i18n.language === 'fr' ? <button className="btn btn-primary" type="button" onClick={() => changeLanguage('en')}>
          EN
        </button> : <button className="btn btn-primary" type="button" onClick={() => changeLanguage('fr')}>
          FR
        </button>
      }
    </div>


  )
}

export default LanguageSwitcher