// import "server-only";

import { SupportedLanguage } from "../types";

const dictionaries = {
  en: () =>
    import("../../assets/dictionaries/en.json").then(
      (module) => module.default
    ),
  de: () =>
    import("../../assets/dictionaries/de.json").then(
      (module) => module.default
    ),
};

export const getDictionary = async (locale: SupportedLanguage) =>
  dictionaries[locale]();
