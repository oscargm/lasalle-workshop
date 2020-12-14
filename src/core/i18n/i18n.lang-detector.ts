import { LanguageDetectorModule } from 'i18next';

const languageDetector: LanguageDetectorModule = {
  type: 'languageDetector',
  detect: () => 'en',
  init: () => {},
  cacheUserLanguage: (lng) => {
    localStorage.setItem('i18nextLng', lng); // Cache detected language
  },
};
export default languageDetector;
