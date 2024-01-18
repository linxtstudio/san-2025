import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
  // Retrieve the value from localStorage on initial render
  const storedValue =
    typeof window !== 'undefined'
      ? JSON.parse(localStorage.getItem(key)) || initialValue
      : initialValue;

  // State to manage the current value
  const [value, setValue] = useState(storedValue);

  // Update the localStorage and state when the value changes
  const updateValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, updateValue];
};
