import ExchangeRatesList from "../exchange-rates-list/ExchangeRatesList";
import useExchangeRates from "./useExchangeRates";
import QuerySearchInput from "../../common/query-search-input/QuerySearchInput";
import PageHeader from "../../common/typography/PageHeader";
import { WithLoading } from "../../common/loading/WithLoading";

const ExchangeRatesView = () => {
  const { isLoading, filteredData, handleSearch } = useExchangeRates();

  return (
    <>
      <PageHeader>EUR Currency Exchange Rates</PageHeader>
      <QuerySearchInput onChange={handleSearch} />
      <WithLoading loading={isLoading}>
        <ExchangeRatesList exchangeRatesData={filteredData} />
      </WithLoading>
    </>
  );
};

export default ExchangeRatesView;
