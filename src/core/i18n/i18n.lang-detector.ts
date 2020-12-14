import { LanguageDetectorModule } from 'i18next';
// import { getLanguageFromCookie } from 'common/cookie';

const languageDetector: LanguageDetectorModule = {
  type: 'languageDetector',
  detect: () => 'en',
  // detect: () => getLanguageFromCookie(),
  init: () => {},
  cacheUserLanguage: (lng) => {
    localStorage.setItem('i18nextLng', lng); // Cache detected language
  },
};
export default languageDetector;
