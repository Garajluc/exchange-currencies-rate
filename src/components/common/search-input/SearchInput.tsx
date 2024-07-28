import {
  Box,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  helperText?: string;
  isClearable?: boolean;
}

const SearchInput = ({
  value,
  isClearable,
  helperText,
  onChange,
}: SearchInputProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  const handleRemove = () => {
    if (!isClearable) {
      return;
    }
    onChange("");
  };

  return (
    <>
      <OutlinedInput
        size="small"
        placeholder="Search"
        value={value}
        onChange={handleChange}
        endAdornment={
          isClearable ? (
            <IconButton aria-label="remove" size="small" onClick={handleRemove}>
              <CloseIcon fontSize="small" />
            </IconButton>
          ) : (
            <></>
          )
        }
        startAdornment={
          <InputAdornment position="start" sx={{ mr: 1 }}>
            <SearchIcon />
          </InputAdornment>
        }
      />
      {helperText && (
        <Box>
          <Typography variant="caption">{helperText}</Typography>
        </Box>
      )}
    </>
  );
};

export default SearchInput;
