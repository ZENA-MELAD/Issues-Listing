import { useEffect, useState } from "react";

const useDebounce = (value, delay) => {
  const [deboncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);
  return deboncedValue;
};
export default useDebounce;
