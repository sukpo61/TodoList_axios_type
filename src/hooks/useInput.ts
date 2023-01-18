import { useState } from "react";
import { __addTodo } from "../redux/modules/todos";

const useInput = (initialValue = "") => {
  const [value, setValue] = useState(initialValue);

  const setinputValue = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setValue(value);
  };

  const reset = () => {
    setValue("");
  };

  return [value, setinputValue, reset];
};

export default useInput;
