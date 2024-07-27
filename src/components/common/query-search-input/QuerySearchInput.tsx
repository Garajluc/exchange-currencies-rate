import SearchInput from "../search-input/SearchInput";
import StickyComponent from "../sticky-component/StickyComponent";
import useQuerySearchInput from "./useQuerySearchInput";

interface QuerySearchInputProps {
  onChange: (value: string) => void;
}

const QuerySearchInput = ({ onChange }: QuerySearchInputProps) => {
  const { inputValue, handleChange } = useQuerySearchInput({ onChange });

  return (
    <StickyComponent>
      <SearchInput value={inputValue} onChange={handleChange} />
    </StickyComponent>
  );
};

export default QuerySearchInput;
