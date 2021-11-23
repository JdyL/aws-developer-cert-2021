import React from "react";
import "./QuestionAnswer.css";

const QuestionAnswer = ({
  index,
  question,
  choices = [],
  setAnswer = () => {},
  correctAnswer,
  showResult,
}) => {
  console.log(correctAnswer);
  return (
    <div>
      <h1>{`${index}. ${question}`}</h1>
      {choices.map((val) => (
        <p
          className={`choices ${val === correctAnswer && "-highlight"} ${
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
