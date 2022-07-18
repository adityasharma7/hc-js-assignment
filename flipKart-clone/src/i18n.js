import {createI18n} from 'vue-i18n'
import en from './locales/en.json';
import fr from './locales/en.json';

const i18n = createI18n({
  legacy: true,
  locale: 'fr',
  fallbackLocale: 'en',
  messages: {
      en,
      fr,
  },
})

export default i18n