import React, { useContext, useEffect } from "react";
import { QuestionAnswer } from "../../components/QuestionAnswer";
import { GetScore } from "../../components/GetScore";
import { TimerWrapper } from "../../components/TimerWrapper";
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
  } = context;
  const currentQuestionData = data[currentIndex];
  const navigate = useNavigate();
  const handleClickNext = () => {
    if (currentIndex + 1 < data.length) {
      return setCurrentIndex((prevState) => (prevState += 1));
    }
    return navigate("/result");
  };

  useEffect(() => {
    if (!start) {
      return navigate("/");
    }
  }, []);
  return (
    <TimerWrapper timerCallback={setFinalTime}>
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
