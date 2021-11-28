import React, { useState } from "react";
import { data as originalData } from "../data";
import { initialiseData } from "../utils";

export const Context = React.createContext();

export const ContextProvider = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [data, setData] = useState(initialiseData(originalData));
  const [start, setStart] = useState(false);
  const [shuffleCount, setShuffleCount] = useState(0);
  const [amountOfQuestions, setAmountOfQuestions] = useState(data.length);
  const amountOfQuestionsOptions = [5, 10, 25, 50, 100, data.length];
  const [finalTime, setFinalTime] = useState();

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
  };

  return <Context.Provider value={initialValue}>{children}</Context.Provider>;
};
