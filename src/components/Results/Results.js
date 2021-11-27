import React, { useState } from "react";
import { QuestionAnswer } from "../QuestionAnswer";
import "./Results.css";
import { isEqual } from "lodash";
import { Button } from "../Button";

export const Results = ({
  data,
  finalAnswers: originalFinalAnswers,
  finalTime,
}) => {
  const [finalAnswers, setFinalAnswers] = useState(originalFinalAnswers);
  const [filter, setFilter] = useState("Show All");
  const QA = () => {
    return Object.values(finalAnswers).map((ans, index) => (
      <div style={{ paddingBottom: 70 }} key={index}>
        <QuestionAnswer
          key={index + 1}
          index={index + 1}
          question={data[index].question}
          choices={data[index].choices}
          userAnswer={ans}
          correctAnswer={data[index].answer}
          showResult
          questionImage={data[index]?.imageUrl}
        />
      </div>
    ));
  };

  const filterBtns = {
    "Show All": {
      onClick: () => {
        setFinalAnswers(originalFinalAnswers);
      },
    },
    "Show Correct": {
      style: { backgroundColor: "green" },
      onClick: () => {
        setFinalAnswers(
          Object.entries(originalFinalAnswers).reduce((acc, [key, val]) => {
            if (isEqual(val, data[key].answer)) {
              acc[key] = val;
            }
            return acc;
          }, {})
        );
      },
    },
    "Show Incorrect": {
      style: { backgroundColor: "red" },
      onClick: () => {
        setFinalAnswers(
          Object.entries(originalFinalAnswers).reduce((acc, [key, val]) => {
            if (!isEqual(val, data[key].answer)) {
              acc[key] = val;
            }
            return acc;
          }, {})
        );
      },
    },
  };

  const Settings = () => {
    return (
      <div className="Settings">
        {Object.entries(filterBtns).map(([key, val]) => {
          return (
            <Button
              key={key}
              text={key}
              className={`FilterBtn ${filter === key ? "-selected" : ""}`}
              onClick={() => {
                setFilter(key);
                val.onClick();
              }}
              style={val.style}
            />
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
      {finalTime && <p>Time elapsed: {finalTime}</p>}
      <Score />
      <Settings />
      <QA />
    </div>
  );
};

export default Results;
