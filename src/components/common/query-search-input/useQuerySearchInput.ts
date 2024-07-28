import { useEffect, useState } from "react";
import { useQueryParams } from "../../utils/useQueryParams";

interface HookProps {
  onChange: (value: string) => void;
}

interface HookReturn {
  inputValue: string;
  handleChange: (value: string) => void;
}

const useQuerySearchInput = ({ onChange }: HookProps): HookReturn => {
  const { updateSearchParams, getQueryParam } = useQueryParams();
  const [inputValue, setInputValue] = useState("");

  const handleChange = (value: string) => {
    updateSearchParams(value);
    setInputValue(value);
    onChange(value);
  };

  useEffect(() => {
    const searchParam = getQueryParam("search");
    setInputValue(searchParam);
    onChange(searchParam);
  }, []);

  useEffect(() => {
    if (!inputValue) {
      return;
    }

    const timeoutId = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [inputValue]);

  return {
    inputValue,
    handleChange,
  };
};

export default useQuerySearchInput;
