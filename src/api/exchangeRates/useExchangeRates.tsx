import axios from "axios";

// todo: define type for exchangeRates and do a validation
// https://akhtarvahid.hashnode.dev/how-to-access-local-json-file-to-react
export const exchangeRatesLoader = async () => {
  const data = await axios
    .get("./exchange-rates-eur.json")
    .then((res) => res.data)
    .catch((err) => console.log(err));
  return data;
};
