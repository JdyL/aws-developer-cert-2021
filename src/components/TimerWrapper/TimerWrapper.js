import React, { useState, useRef, useEffect } from "react";
import { formatTime } from "../../utils";

const TimerWrapper = ({ children, timerCallback }) => {
  const [timer, setTimer] = useState(0);
  const timerInterval = useRef();
  const timerRef = useRef();
  timerRef.current = timer;

  useEffect(() => {
    timerInterval.current = setInterval(
      () => setTimer((prevState) => (prevState += 1)),
      1000
    );
    return () => {
      clearInterval(timerInterval.current);
      timerCallback(formatTime(timerRef.current));
    };
  }, [timerCallback]);

  return (
    <div>
      <div className="Timer">Time elapsed: {formatTime(timer)}</div>
      {children}
    </div>
  );
};

export default TimerWrapper;
