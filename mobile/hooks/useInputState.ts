import { useState } from "react";

const useInputState = (
  initialState = ""
): [string, (val: string) => void, () => void] => {
  const [value, setValue] = useState(initialState);

  const handleChange = (val: string) => {
    setValue(val);
  };

  const handleReset = () => {
    setValue(initialState);
  };

  return [value, handleChange, handleReset];
};

export default useInputState;
