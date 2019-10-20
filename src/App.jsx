import React, { useState } from "react";
import { useDebounce } from "use-debounce";
import { useThrottle } from "use-throttle";

const App = () => {
  const [text, setText] = useState("");
  const [debounceValue] = useDebounce(text, 1000);
  const throttledText = useThrottle(text, 1000);

  return (
    <>
      <input onChange={e => setText(e.target.value)} />
      <p>Actual value: {text}</p>
      <p>Debounce value: {debounceValue}</p>
      <p>Throttle value: {throttledText}</p>
    </>
  );
};

export default App;
