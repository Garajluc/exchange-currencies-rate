import type {
  ExchangeRatesRoot,
  ExchangeRatesRootWithFlags,
  CurrencyWithFlag,
  Currency,
} from "../exchangeRates.types";
import cloneDeep from "lodash/cloneDeep";

export const getFlagPath = (flags: string[], currency: string) => {
  const flag = flags.filter((flag) => {
    return (
      flag.replace(".png", "").toLowerCase() ===
      currency.substring(0, 2).toLowerCase()
    );
  })[0];

  return flag ?? "";
};

export const mergeFlags = (
  exchangeRatesData: ExchangeRatesRoot,
  flags: string[]
): ExchangeRatesRootWithFlags => {
  const exchangeRatesDataCopy = cloneDeep(exchangeRatesData);

  const currenciesWithFlag = exchangeRatesDataCopy.fx.map((currency) => {
    const flagPath = getFlagPath(flags, currency.currency);
    if (!flagPath) {
      return currency;
    }
    (currency as CurrencyWithFlag).flagPath = `./flags/${flagPath}`;
    return currency;
  }) as CurrencyWithFlag[];

  return { ...exchangeRatesDataCopy, fx: currenciesWithFlag };
};

export const removeInvalidCurrencyData = (
  exchangeRatesData: ExchangeRatesRoot
): ExchangeRatesRoot => {
  const currencies = exchangeRatesData.fx.reduce(
    (previous: Currency[], current: Currency) => {
      if (!current.currency?.trim() && !current.nameI18N?.trim()) {
        return previous;
      }
      previous.push(current);
      return previous;
    },
    []
  );
  return { ...exchangeRatesData, fx: currencies };
};
