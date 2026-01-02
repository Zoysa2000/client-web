import React, { createContext, useState } from "react";
import translations from "../Components/Translation/NavPanel/NavPanel.json";
import headertranslation from "../Components/Translation/Header/Header.json";
import bookingtranslation from "../Components/Translation/Booking/Booking.json";
import introductiontranslation from "../Components/Translation/Introduction/introduction.json"
import availableTranslation from "../Components/Translation/Available/Available.json";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en"); 

  const value = {
    language,
    setLanguage,
    text: translations[language] ,
    headertext:headertranslation[language],
    bookingtext:bookingtranslation[language],
    introductiontext:introductiontranslation[language],
    availabletext: availableTranslation[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
