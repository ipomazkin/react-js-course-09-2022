/**
 * @description The LocaleContextExample component.
 */
import React, { useMemo, useState, useContext } from 'react';
import { LocaleContext, LOCALE_UK, LOCALE_EN, LOCALE_PL } from "./LocaleContext";

export function LocaleContextExample() {
  const [locale, setLocale] = useState(LOCALE_UK)

  const localeContextValue = useMemo(() => ({
    locale,
    setLocale,
  }), [locale])

  return (
    <LocaleContext.Provider value={localeContextValue}>
      <ChildrenLevel1 />
    </LocaleContext.Provider>
  );
}


function ChildrenLevel1() {
  return (
    <ChildrenLevel2 />
  )
}

function ChildrenLevel2() {
  return (
    <div>
      <div>
        <HookContextConsumer />
      </div>
      <div>
        <RenderPropContextConsumer />
      </div>
    </div>
  )
}

function HookContextConsumer() {
  const localeContext = useContext(LocaleContext)

  return (
    <div>
      <div>Current locale: {localeContext.locale}</div>
      <ul>
        <li><button onClick={() => localeContext.setLocale(LOCALE_UK)}>{LOCALE_UK}</button></li>
        <li><button onClick={() => localeContext.setLocale(LOCALE_EN)}>{LOCALE_EN}</button></li>
        <li><button onClick={() => localeContext.setLocale(LOCALE_PL)}>{LOCALE_PL}</button></li>
      </ul>
    </div>
  )
}

function RenderPropContextConsumer() {
  return (
    <div>
      <LocaleContext.Consumer>{(localeContext) => (
        <div>
          <div>Current locale: {localeContext.locale}</div>
          <ul>
            <li><button onClick={() => localeContext.setLocale(LOCALE_UK)}>{LOCALE_UK}</button></li>
            <li><button onClick={() => localeContext.setLocale(LOCALE_EN)}>{LOCALE_EN}</button></li>
            <li><button onClick={() => localeContext.setLocale(LOCALE_PL)}>{LOCALE_PL}</button></li>
          </ul>
        </div>
      )}</LocaleContext.Consumer>
    </div>
  )
}