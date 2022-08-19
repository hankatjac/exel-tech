import React, { useState } from 'react'
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [buttonText, setButtonText] = useState(i18n.language);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setButtonText(lng);
  };

  return (

    <div>
      {
        buttonText == 'fr' ? <button className="btn btn-primary" type="button" onClick={() => changeLanguage('en')}>
          EN
        </button> : <button className="btn btn-primary" type="button" onClick={() => changeLanguage('fr')}>
          FR
        </button>
      }

    </div>

    // <div>
    //   <div>
    //     Current Language: {i18n.language}
    //   </div>


  )
}

export default LanguageSwitcher