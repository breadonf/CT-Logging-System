import { useState } from "react";

const useDebouncedInput = ({ defaultText = [], debounceTime = 750 }) => {
  const [text, setText] = useState(defaultText);
  const [t, setT] = useState(null);

  const onChange = (text) => {
    if (t) clearTimeout(t);
    setT(setTimeout(() => setText(text), debounceTime));
  };

  return [text, onChange];
};

export default useDebouncedInput;
