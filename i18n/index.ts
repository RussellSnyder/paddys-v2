var en = require("./en.json");
var de = require("./de.json");

const i18n = {
  translations: {
    en: en.i18n,
    de: de.i18n,
  },
  defaultLang: "de",
  useBrowserDefault: true,
};

module.exports = i18n;
