import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import type {
  CurrencyWithFlag,
  ExchangeRatesRootWithFlags,
} from "../../../api/exchangeRates/exchangeRates.types";
import { useOmniListSearch } from "../../utils/useOmniSearch";

interface HookReturn {
  isLoading: boolean;
  filteredData?: CurrencyWithFlag[] | null;
  handleSearch: (value: string) => void;
}

const useExchangeRates = (): HookReturn => {
  const [isLoading, setIsLoading] = useState(true);
  const [exchangeRates, setExchangeRates] =
    useState<ExchangeRatesRootWithFlags | null>(null);

  const loadedData = useLoaderData() as ExchangeRatesRootWithFlags;

  useEffect(() => {
    setExchangeRates(loadedData);
    setIsLoading(false);
  }, []);

  const { filteredData, handleSearch } = useOmniListSearch({
    listData: exchangeRates?.fx ?? [],
    searchKeys: ["currency", "nameI18N"],
  });

  return {
    isLoading,
    filteredData,
    handleSearch,
  };
};

export default useExchangeRates;
