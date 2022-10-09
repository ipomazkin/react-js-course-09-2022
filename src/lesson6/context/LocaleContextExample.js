/**
 * @description The LocaleContextExample component.
 */
import React, { useMemo, useState } from 'react';
import { LocaleContext, LOCALE_UK } from "./LocaleContext";

export function LocaleContextExample() {
  const [locale, setLocale] = useState(LOCALE_UK)

  const localeContextValue = useMemo(() => ({
    locale,
    setLocale,
  }), [])

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
  return (
    <div>Current locale: </div>
  )
}

function RenderPropContextConsumer() {
  return (
    <div>Current locale: </div>
  )
}