import axios from "axios";
import type { ExchangeRatesRoot } from "./exchangeRates.types";

// todo: define type for exchangeRates and do a validation
// https://akhtarvahid.hashnode.dev/how-to-access-local-json-file-to-react
export const exchangeRatesLoader =
  async (): Promise<void | ExchangeRatesRoot> => {
    const data = await axios
      .get("./exchange-rates-eur.json")
      .then((res) => res.data)
      .catch((err) => console.log(err));
    return data;
  };
