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
      timerCallback(formatTime(timerRef.current));
      clearInterval(timerInterval);
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
