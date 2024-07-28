import axios from "axios";
import type { ExchangeRatesRoot } from "./exchangeRates.types";
import {
  removeInvalidCurrencyData,
  mergeFlags,
} from "./utils/dataTransformation";

export const exchangeRatesLoader =
  async (): Promise<void | ExchangeRatesRoot> => {
    const data = await axios
      .get("./exchange-rates-eur.json")
      .then((res) => res.data)
      .catch((err) => {
        throw Error(err);
      });
    return data;
  };

export const flagsLoader = async (): Promise<void | string[]> => {
  const data = await axios
    .get("./flags")
    .then((res) => res.data)
    .catch((err) => {
      throw Error(err);
    });
  return data;
};

export const loader = async () => {
  const exchangeRatesData = await exchangeRatesLoader();
  const flagsData = await flagsLoader();

  if (!exchangeRatesData || !flagsData) {
    return {};
  }

  const sanitizedLoadedData = removeInvalidCurrencyData(exchangeRatesData);
  const loadedData = mergeFlags(sanitizedLoadedData, flagsData);

  return loadedData;
};
