import React, { useContext, useEffect } from "react";
import { Results } from "../../components";
import { Context } from "../../context";
import { useNavigate } from "react-router-dom";

export const ResultsPage = () => {
  const navigate = useNavigate();
  const context = useContext(Context);
  const { data, answers, finalTime, start } = context;
  useEffect(() => {
    if (!start) return navigate("/");
  }, []);
  return <Results data={data} finalAnswers={answers} finalTime={finalTime} />;
};

export default ResultsPage;
