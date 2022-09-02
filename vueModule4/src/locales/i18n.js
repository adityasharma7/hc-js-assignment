import { createI18n } from "vue-i18n";
import english from "./english.json";
import hindi from "./hindi.json";

const i18n = createI18n({
  locale: "english",
  messages: {
    english,
    hindi
  }
});

export default i18n;