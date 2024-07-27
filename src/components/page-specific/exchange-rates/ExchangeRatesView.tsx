import ExchangeRatesList from "../exchange-rates-list/ExchangeRatesList";
import useExchangeRates from "./useExchangeRates";
import QuerySearchInput from "../../common/query-search-input/QuerySearchInput";

const ExchangeRatesView = () => {
  const { filteredData, handleSearch } = useExchangeRates();

  return (
    <>
      <QuerySearchInput onChange={handleSearch} />
      <ExchangeRatesList exchangeRatesData={filteredData} />
    </>
  );
};

export default ExchangeRatesView;
