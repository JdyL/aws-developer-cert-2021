import React from "react";
import "./QuestionAnswer.css";

const QuestionAnswer = ({
  index,
  question,
  choices = [],
  setAnswer = () => {},
  showResult,
}) => {
  return (
    <div>
      <h1>{`${index}. ${question}`}</h1>
      {choices.map((val) => (
        <p
          className={`choices ${showResult && "-highlight"}`}
          onClick={() => setAnswer(val)}
        >
          {val}
        </p>
      ))}
    </div>
  );
};

export default QuestionAnswer;
