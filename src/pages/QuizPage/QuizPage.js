import React, { useContext, useEffect } from "react";
import {
  GetScore,
  TimerWrapper,
  QuestionAnswer,
  Button,
} from "../../components";
import { Context } from "../../context";
import { useNavigate } from "react-router-dom";

export const QuizPage = () => {
  const context = useContext(Context);
  const {
    setFinalTime,
    currentIndex,
    answers,
    setAnswers,
    setCurrentIndex,
    data,
    start,
    reset,
    setFinishQuiz,
  } = context;
  const currentQuestionData = data[currentIndex];
  const navigate = useNavigate();
  const handleClickNext = () => {
    if (currentIndex + 1 < data.length) {
      return setCurrentIndex((prevState) => (prevState += 1));
    }
    setFinishQuiz(true);
    return navigate("/result");
  };

  useEffect(() => {
    window.onbeforeunload = (event) => {
      const e = event || window.event;
      // Cancel the event
      e.preventDefault();
      if (e) {
        e.returnValue = ""; // Legacy method for cross browser support
      }
      return ""; // Legacy method for cross browser support
    };
    if (!start) {
      return navigate("/");
    }
    return () => (window.onbeforeunload = null);
  }, []);
  return (
    <TimerWrapper timerCallback={setFinalTime}>
      <Button
        style={{ padding: "2px 10px", backgroundColor: "#eb4034" }}
        text="Restart"
        className="absolute left-0 top-7"
        onClick={reset}
      />
      <QuestionAnswer
        index={currentIndex + 1}
        question={currentQuestionData.question}
        choices={currentQuestionData.choices}
        questionImage={currentQuestionData?.imageUrl}
        userAnswer={answers?.[currentIndex]}
        setAnswer={(ans) => {
          setAnswers((prevState) => {
            return { ...prevState, [currentIndex]: ans };
          });
        }}
        clickNext={handleClickNext}
      />
      <GetScore
        data={data}
        finalAnswers={answers}
        className="absolute top-0 right-0"
      />
      <p className="Marks">{`${currentIndex + 1}/${data.length}`}</p>
    </TimerWrapper>
  );
};

export default QuizPage;
