import React, { useContext } from "react";
import { QuestionAnswer } from "../../components/QuestionAnswer";
import { GetScore } from "../../components/GetScore";
import { TimerWrapper } from "../../components/TimerWrapper";
import { Context } from "../../context";

export const QuizPage = () => {
  const context = useContext(Context);
  const {
    setFinalTime,
    currentIndex,
    answers,
    setAnswers,
    setCurrentIndex,
    data,
  } = context;
  const currentQuestionData = data[currentIndex];
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
        clickNext={() => setCurrentIndex((prevState) => (prevState += 1))}
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
