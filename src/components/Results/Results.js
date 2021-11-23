import React from "react";
import { QuestionAnswer } from "../QuestionAnswer";
import "./Results.css";

export const Results = ({ data, finalAnswers }) => {
  console.log(data, finalAnswers);
  const QA = () => {
    return (
      <div className="">
        {Object.values(finalAnswers).map((ans, index) => {
          return (
            <QuestionAnswer
              key={index + 1}
              index={index + 1}
              question={data[index].question}
              choices={data[index].choices}
              userAnswer={[ans]}
              correctAnswer={data[index].answer}
              showResult
            />
          );
        })}
      </div>
    );
  };
  return (
    <div className="Results">
      <QA />
    </div>
  );
};

export default Results;
