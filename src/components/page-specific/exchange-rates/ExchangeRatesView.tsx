import { useLoaderData } from "react-router-dom";
import ExchangeRatesList from "../exchange-rates-list/ExchangeRatesList";
import type { ExchangeRatesRoot } from "../../../api/exchangeRates/exchangeRates.types";
import useExchangeRates from "./useExchangeRates";
import QuerySearchInput from "../../common/query-search-input/QuerySearchInput";

const ExchangeRatesView = () => {
  const exchangeRatesData = useLoaderData() as ExchangeRatesRoot;

  const { filteredData, handleSearch } = useExchangeRates({
    listData: exchangeRatesData.fx,
  });

  return (
    <>
      <QuerySearchInput onChange={handleSearch} />
      <ExchangeRatesList exchangeRatesData={filteredData} />
    </>
  );
};

export default ExchangeRatesView;
