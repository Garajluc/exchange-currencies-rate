import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import type {
  CurrencyWithFlag,
  ExchangeRatesRootWithFlags,
} from "../../../api/exchangeRates/exchangeRates.types";
import { useOmniListSearch } from "../../utils/useOmniSearch";

interface HookReturn {
  filteredData?: CurrencyWithFlag[] | null;
  handleSearch: (value: string) => void;
}

const useExchangeRates = (): HookReturn => {
  const [exchangeRates, setExchangeRates] =
    useState<ExchangeRatesRootWithFlags | null>(null);

  const loadedData = useLoaderData() as ExchangeRatesRootWithFlags;

  useEffect(() => {
    setExchangeRates(loadedData);
  }, []);

  const { filteredData, handleSearch } = useOmniListSearch({
    listData: exchangeRates?.fx ?? [],
    searchKeys: ["currency", "nameI18N"],
  });

  return {
    filteredData,
    handleSearch,
  };
};

export default useExchangeRates;
