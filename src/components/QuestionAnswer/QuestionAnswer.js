import React from "react";
import "./QuestionAnswer.css";

const QuestionAnswer = ({
  index,
  question,
  choices = [],
  setAnswer = () => {},
  correctAnswer,
  userAnswer,
  showResult,
}) => {
  console.log(correctAnswer);
  const checkIsAnswer = (val) => {
    if (correctAnswer?.includes(val)) {
      return "-correct";
    }
    if (
      userAnswer?.includes(val) &&
      !correctAnswer?.find((value) => userAnswer.includes(value))
    ) {
      return "-incorrect";
    }
    return "";
  };
  return (
    <div>
      <h1>{`${index}. ${question}`}</h1>
      {choices.map((val) => (
        <p
          className={`choices ${showResult && checkIsAnswer(val)} ${
            showResult && "-no-hover"
          }`}
          onClick={() => setAnswer(val)}
        >
          {val}
        </p>
      ))}
    </div>
  );
};

export default QuestionAnswer;
