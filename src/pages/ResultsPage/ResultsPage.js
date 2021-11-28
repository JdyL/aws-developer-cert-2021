import React, { useContext } from "react";
import { Results } from "../../components";
import { Context } from "../../context";

export const ResultsPage = () => {
  const context = useContext(Context);
  const { data, answers, finalTime } = context;
  return <Results data={data} finalAnswers={answers} finalTime={finalTime} />;
};

export default ResultsPage;
