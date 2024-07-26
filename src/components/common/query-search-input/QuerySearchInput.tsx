import SearchInput from "../search-input/SearchInput";
import useQuerySearchInput from "./useQuerySearchInput";

interface QuerySearchInputProps {
  onChange: (value: string) => void;
}

const QuerySearchInput = ({ onChange }: QuerySearchInputProps) => {
  const { inputValue, handleChange } = useQuerySearchInput({ onChange });

  return <SearchInput value={inputValue} onChange={handleChange} />;
};

export default QuerySearchInput;
