import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { hourSelector, minuteState } from "./atoms";

function App() {
  const [minutes, setMinutes] = useRecoilState(minuteState);
  const hours = useRecoilValue(hourSelector);

  const onMinutesChange = (e: React.FormEvent<HTMLInputElement>) => {
    setMinutes(+e.currentTarget.value);
  };

  return (
    <div>
      <input
        type="number"
        value={minutes}
        onChange={onMinutesChange}
        placeholder="Minutes"
      />
      <input type="number" value={hours} placeholder="Hours" />
    </div>
  );
}

export default App;
