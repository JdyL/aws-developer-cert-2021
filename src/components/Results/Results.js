import React from "react";
import { QuestionAnswer } from "../QuestionAnswer";
import "./Results.css";
import { isEqual } from "lodash";

export const Results = ({ data, finalAnswers }) => {
  console.log(data, finalAnswers);
  const QA = () => {
    return (
      <div>
        {Object.values(finalAnswers).map((ans, index) => {
          return (
            <div style={{ paddingBottom: 70 }}>
              <QuestionAnswer
                key={index + 1}
                index={index + 1}
                question={data[index].question}
                choices={data[index].choices}
                userAnswer={ans}
                correctAnswer={data[index].answer}
                showResult
              />
            </div>
          );
        })}
      </div>
    );
  };

  const Score = () => {
    const finalAnswersArr = Object.entries(finalAnswers);
    let score = 0;
    const total = finalAnswersArr?.length;
    finalAnswersArr.forEach(([key, val]) => {
      if (isEqual(data[key].answer, val)) {
        score++;
      }
    });
    const percent = Math.floor((score / total) * 100);
    return (
      <div>
        <h2
          style={{ border: "1px solid cyan", padding: 10 }}
        >{`You scored: ${score} / ${total} (${percent || 0}%)`}</h2>
        {percent > 72 ? (
          <p style={{ color: "lime" }}>You passed!</p>
        ) : (
          <>
            <p style={{ color: "red" }}>You need atleast 72% to pass </p>
            You failed :(
          </>
        )}
      </div>
    );
  };
  return (
    <div className="Results">
      <Score />

      <QA />
    </div>
  );
};

export default Results;
