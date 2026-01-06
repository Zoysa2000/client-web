import React, { createContext, useState } from "react";
import translations from "../Components/Translation/NavPanel/NavPanel.json";
import headertranslation from "../Components/Translation/Header/Header.json";
import bookingtranslation from "../Components/Translation/Booking/Booking.json";
import introductiontranslation from "../Components/Translation/Introduction/introduction.json"
import availableTranslation from "../Components/Translation/Available/Available.json";
import card1 from "../Components/Translation/Card/Card1.json";
import card2 from "../Components/Translation/Card//Card2.json";
import card3 from "../Components/Translation/Card/Card3.json";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en"); 

  const value = {
    language,
    setLanguage,
    text: translations[language],
    headertext:headertranslation[language],
    bookingtext:bookingtranslation[language],
    introductiontext:introductiontranslation[language],
    availabletext: availableTranslation[language],
    card1text:card1[language],
    card2text:card2[language],
    card3text:card3[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
