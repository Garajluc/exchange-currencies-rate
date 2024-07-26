import { useLoaderData } from "react-router-dom";
import ExchangeRatesList from "./ExchangeRatesList";
import type { ExchangeRatesRoot } from "../../../api/exchangeRates/exchangeRates.types";
import OmniSearch from "../../common/search/OmniSearch";
import useExchangeRatesList from "./useExchangeRatesList";

const ExchangeRatesView = () => {
  // todo: use context
  const loadedData = useLoaderData();
  const { filteredData, handleSearch } = useExchangeRatesList({
    listData: (loadedData as ExchangeRatesRoot).fx,
  });

  return (
    <>
      <OmniSearch onChange={handleSearch} />
      <ExchangeRatesList exchangeRatesData={filteredData} />
    </>
  );
};

export default ExchangeRatesView;
