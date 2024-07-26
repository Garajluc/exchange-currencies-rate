import { InputAdornment, OutlinedInput } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

type OmniSearchProps = {
  onChange: (value: string) => void;
};

const OmniSearch = ({ onChange }: OmniSearchProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <OutlinedInput
      size="small"
      onChange={handleChange}
      startAdornment={
        <InputAdornment position="start" sx={{ mr: 1 }}>
          <SearchIcon />
        </InputAdornment>
      }
    />
  );
};

export default OmniSearch;
