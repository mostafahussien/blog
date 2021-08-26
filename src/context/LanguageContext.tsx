import { GetStaticPropsContext } from "next";

import { createContext, FC, useEffect, useState } from "react";

import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";

import { useLocalStorage } from "@app/hooks/useLocalStorage";
import locales from "@app/translations/locales";
import defaultStrings from "@app/translations/locales/en";
import { isLocale, Localization, Locale } from "@app/translations/types";

/**
 * Language Context
 */

interface ContextProps {
  readonly localization: Localization;
  readonly setLocale: (localization: Localization) => void;
}

export const LanguageContext = createContext<ContextProps>({
  localization: {
    locale: "en", // default lang
    translations: defaultStrings.common, // default translations TODO: what to do here?
    namespace: "common", // default namespace TODO: could we null this? 'common' might be misleading
  },
  setLocale: () => null,
});

/**
 * Language Context: Provider
 */

export const LanguageProvider: FC<{ localization: Localization }> = ({
  localization,
  children,
}) => {
  const [localizationState, setLocalizationState] = useState({
    locale: localization?.locale,
    translations: localization?.translations,
    namespace: localization?.namespace,
  });

  const [getStoredLocale, setStoredLocale] = useLocalStorage("locale");

  const { query } = useRouter();

  useEffect(() => {
    if (localizationState.locale !== getStoredLocale) {
      setStoredLocale(localizationState.locale);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localizationState]);

  useEffect(() => {
    if (
      typeof query.lang === "string" &&
      isLocale(query.lang) &&
      localization?.locale !== query.lang
    ) {
      setLocalizationState({
        locale: localization?.locale,
        translations: localization?.translations,
        namespace: localization?.namespace,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query.lang, localizationState]);

  return (
    <LanguageContext.Provider
      value={{ localization, setLocale: setLocalizationState }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const getLocalizationProps = (
  ctx: GetStaticPropsContext<ParsedUrlQuery>,
  namespace: string
) => {
  const lang: Locale = (ctx.params?.lang as Locale) || "jp";
  const locale = locales[lang];
  const strings = locale[namespace] as any;
  const translations = {
    ...strings,
    common: locales[lang].common,
  };
  return {
    locale: ctx.params?.lang || "en",
    translations,
    namespace,
  };
};
