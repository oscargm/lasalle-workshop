import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import XHR from 'i18next-xhr-backend';
import LangDetector from './i18n.lang-detector';

// Creating own plugins https://www.i18next.com/misc/creating-own-plugins
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LangDetector) // Use custom languaje detector
  .use(XHR) // Use i18next-xhr-backend for translation file download
  .init({
    backend: {
      loadPath: './i18n/locales/{{lng}}.json', // Specify where backend will find translation files
    },
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    fallbackLng: 'en', // Set fallback language when detected lang. is not available
    detection: {
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng', //Use the localStorage to get the property
    },
    load: 'currentOnly',
  });

export default i18n;
