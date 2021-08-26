/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";

import { useRouter } from "next/router";

import useTranslation from "@app/hooks/useTranslation";
import { locales } from "@app/translations/config";
import { Translations } from "@app/translations/types";

const LocaleSwitcher: React.FC = () => {
  const router = useRouter();

  const handleLocaleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const targetLang = e.target.value;
      const regex = new RegExp(`^/(${locales.join("|")})`);
      router.push(
        router.pathname,
        router.asPath.replace(regex, `/${targetLang}`)
      );
    },
    [router]
  );

  const { t, locale } = useTranslation();

  const common = t("common") as Translations;
  return (
    <div>
      <label className="language-switcher">
        {common.localeSwitcher}
        <select onChange={handleLocaleChange} defaultValue={locale}>
          {locales.map((el, i) => (
            <option value={el} key={i}>
              {el}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default LocaleSwitcher;
