import { createContext } from "react";

export const LOCALE_UK = 'uk'
export const LOCALE_EN = 'en'
export const LOCALE_PL = 'pl'

const defaultContextValue = {
  locale: LOCALE_UK,
  setLocale: (locale) => {
    console.log('set locale to ' + locale)
  }
}

export const LocaleContext = createContext(defaultContextValue)