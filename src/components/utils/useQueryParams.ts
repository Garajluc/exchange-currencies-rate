import { useSearchParams } from "react-router-dom";

interface HookResult {
  updateSearchParams: (searchTerm: string) => void;
  getQueryParam: (key: string) => string;
}

export const useQueryParams = (): HookResult => {
  const [searchParams, setSearchParams] = useSearchParams();

  const updateSearchParams = (searchTerm: string) => {
    const params = !searchTerm ? { search: "" } : { search: searchTerm };
    setSearchParams(params);
  };

  const getQueryParam = (key: string) => {
    return searchParams.get(key) ?? "";
  };

  return {
    updateSearchParams,
    getQueryParam,
  };
};
