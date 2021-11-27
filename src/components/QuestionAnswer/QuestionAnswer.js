import React, { useState } from "react";
import "./QuestionAnswer.css";
import { Button } from "../Button";
import { getIndexes, letters } from "../../utils";
import { Tick, Cross } from "../../assets";
import { isEqual } from "lodash";

const QuestionAnswer = ({
  index,
  question,
  choices = [],
  setAnswer = () => {},
  correctAnswer,
  userAnswer,
  showResult,
  clickNext = () => {},
  questionImage,
}) => {
  const [usersAnswer, setUsersAnswer] = useState(showResult ? userAnswer : []);
  const checkIsAnswer = (val) => {
    if (correctAnswer?.includes(val)) {
      return "-correct";
    }
    if (usersAnswer?.includes(val)) {
      return "-incorrect";
    }
    return "";
  };
  return (
    <div>
      <h1
        style={{
          display: "flex",
          flexDirection: questionImage ? "column" : "row",
          textAlign: "left",
          paddingBottom: !showResult ? 30 : 0,
          fontWeight: 400,
          justifyContent: "space-between",
        }}
      >
        {`${index}. ${question}`}{" "}
        {questionImage && (
          <img src={questionImage} alt="Question" style={{ paddingTop: 20 }} />
        )}
        {showResult &&
          (isEqual(usersAnswer.sort(), correctAnswer.sort()) ? (
            <Tick colour="lime" />
          ) : (
            <Cross colour="red" />
          ))}
      </h1>

      {showResult && (
        <div style={{ color: "grey", padding: "1rem 0" }}>
          You chose:{" "}
          {getIndexes({ answers: usersAnswer, choices }).map((index) => (
            <div
              key={index}
              style={{
                color: correctAnswer.includes(index) ? "lime" : "red",
              }}
            >
              {index}
            </div>
          ))}
          {usersAnswer?.length < 2 && question.includes("(Select") && (
            <p style={{ color: "red" }}>
              You needed to select more than one to get this question right!
            </p>
          )}
        </div>
      )}
      {choices.map((val, index) => (
        <p
          key={val}
          className={`choices ${showResult ? checkIsAnswer(val) : ""} ${
            showResult ? "-no-hover" : ""
          } ${!showResult && usersAnswer.includes(val) ? "-correct" : ""}`}
          onClick={
            !showResult
              ? () => {
                  if (question.includes("(Select"))
                    return setUsersAnswer((prevState) => {
                      const newSet = new Set(prevState);
                      if (newSet.has(val)) {
                        newSet.delete(val);
                      } else {
                        newSet.add(val);
                      }
                      return Array.from(newSet);
                    });
                  return setUsersAnswer([val]);
                }
              : null
          }
        >
          {letters[index] + " " + val}
        </p>
      ))}
      {!showResult && (
        <Button
          text="Next"
          style={{ marginTop: 40 }}
          onClick={() => {
            clickNext();
            setAnswer(usersAnswer);
            setUsersAnswer([]);
          }}
          disabled={!usersAnswer?.length}
        />
      )}
    </div>
  );
};

export default QuestionAnswer;
