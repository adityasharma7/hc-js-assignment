import {createI18n} from 'vue-i18n'
import en from './locales/en.json';
import hi from './locales/hi.json';

const i18n = createI18n({
  legacy: true,
  locale: 'hi',
  fallbackLocale: 'en',
  messages: {
      en,
      hi,
  },
})

export default i18n