import React, { useContext, useEffect } from "react";
import { Results } from "../../components";
import { Context } from "../../context";
import { useNavigate } from "react-router-dom";

export const ResultsPage = () => {
  const navigate = useNavigate();
  const context = useContext(Context);
  const { data, answers, finalTime, start, reset, finishQuiz } = context;
  useEffect(() => {
    if (!start || !finishQuiz) return navigate("/");
    window.onbeforeunload = (event) => {
      const e = event || window.event;
      // Cancel the event
      e.preventDefault();
      if (e) {
        e.returnValue = ""; // Legacy method for cross browser support
      }
      return ""; // Legacy method for cross browser support
    };
    return () => (window.onbeforeunload = null);
  }, [finishQuiz, navigate, start]);
  return (
    <Results
      data={data}
      finalAnswers={answers}
      finalTime={finalTime}
      reset={reset}
    />
  );
};

export default ResultsPage;
