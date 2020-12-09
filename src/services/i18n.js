import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import PhraseInContextEditorPostProcessor from "i18next-phrase-in-context-editor-post-processor";

i18next
  .use(initReactI18next)
  .use(HttpApi)
  .use(
    new PhraseInContextEditorPostProcessor({
      phraseEnabled: true,
      projectId: process.env.REACT_APP_PHRASE_PROJECT_ID,
    }),
  )
  .init({
    lng: "en",
    interpolation: {
      escapeValue: false,
    },
    debug: process.env.NODE_ENV === "development",
    postProcess: ["phraseInContextEditor"],
  });

export default i18next;
