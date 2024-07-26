import { useOmniListSearch } from "../../utils/useOmniSearch";

interface HookProps<ItemType> {
  listData: ItemType[];
}

interface HookReturn<ItemType> {
  filteredData?: ItemType[] | null;
  handleSearch: (value: string) => void;
}

const useExchangeRates = <ItemType>({
  listData,
}: HookProps<ItemType>): HookReturn<ItemType> => {
  const { filteredData, handleSearch } = useOmniListSearch({
    listData,
    searchKeys: ["currency"],
  });

  return {
    filteredData,
    handleSearch,
  };
};

export default useExchangeRates;
