import { createI18n } from "vue3-i18n";
import en from "@/locale/en.json";
import hi from "@/locale/hi.json";

const messages = {
  en: en,
  hi: hi,
};

const i18n = createI18n({
  locale: "en",
  fallbackLocale: "en",
  messages: messages,
});

export default i18n;
