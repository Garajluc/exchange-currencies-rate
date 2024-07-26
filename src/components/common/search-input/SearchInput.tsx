import { InputAdornment, OutlinedInput } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchInput = ({ value, onChange }: SearchInputProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <OutlinedInput
      size="small"
      value={value}
      onChange={handleChange}
      startAdornment={
        <InputAdornment position="start" sx={{ mr: 1 }}>
          <SearchIcon />
        </InputAdornment>
      }
    />
  );
};

export default SearchInput;
