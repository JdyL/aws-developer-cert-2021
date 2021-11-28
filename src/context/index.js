import React, { useState } from "react";
import { data as originalData } from "../data";
import { initialiseData } from "../utils";
import { useNavigate } from "react-router-dom";

export const Context = React.createContext();

export const ContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [data, setData] = useState(initialiseData(originalData));
  const [start, setStart] = useState(false);
  const [finishQuiz, setFinishQuiz] = useState(false);
  const [shuffleCount, setShuffleCount] = useState(0);
  const [amountOfQuestions, setAmountOfQuestions] = useState(data.length);
  const amountOfQuestionsOptions = [5, 10, 25, 50, 100, originalData.length];
  const [finalTime, setFinalTime] = useState();

  const onMountStart = () => {
    setCurrentIndex(0);
    setAnswers([]);
  };

  const reset = () => {
    setCurrentIndex(0);
    setAnswers([]);
    setData(initialiseData(originalData));
    setStart(false);
    setShuffleCount(0);
    setFinalTime(0);
    navigate("/");
    setFinishQuiz(false);
  };

  const initialValue = {
    currentIndex,
    setCurrentIndex,
    answers,
    setAnswers,
    data,
    setData,
    start,
    setStart,
    shuffleCount,
    setShuffleCount,
    amountOfQuestions,
    setAmountOfQuestions,
    amountOfQuestionsOptions,
    finalTime,
    setFinalTime,
    originalData,
    onMountStart,
    reset,
    finishQuiz,
    setFinishQuiz,
  };

  return <Context.Provider value={initialValue}>{children}</Context.Provider>;
};
