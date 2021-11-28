import { cloneDeep } from "lodash";

export const getIndexes = ({ answers, choices }) => {
  const indexes = [];
  choices.forEach((choice) => {
    if (answers.includes(choice)) return indexes.push(choice);
  });
  return indexes;
};

export const formatTime = (seconds) => {
  if (seconds < 60) {
    return `${seconds}s`;
  }
  if (seconds >= 60 && seconds / 60 < 60) {
    return `${Math.floor(seconds / 60)}m ${seconds % 60}s`;
  }
  const hours = Math.floor(seconds / 60 / 60);
  const minute = Math.floor(seconds / 60 - hours * 60);
  return `${hours}h ${minute}m ${seconds % 60}s`;
};

export const letters = ["A.", "B.", "C.", "D.", "E."];

export const hasChoiceLetter = (text) =>
  letters.find((letter) => text.substring(0, 2) === letter);

export const choiceArrayWithLetter = (choiceArr) => {
  return choiceArr.map((val, index) => `${letters[index]} ${val}`);
};

export const formatChoiceLetter = (string, index) => {
  if (hasChoiceLetter(string)) {
    if (index !== undefined) return letters?.[index] + string.substring(2);
    return string.substring(3);
  }
  return string;
};

export const renderChoice = (text) => {
  if (text.includes("data:image")) {
    const hasLetter = hasChoiceLetter(text);
    return (
      <>
        {hasLetter && text.substring(0, 3)}
        <img
          src={hasLetter ? text.substring(2) : text}
          alt="answer"
          style={{ width: "20%", height: "auto" }}
        />
      </>
    );
  }
  return text;
};

export const getMatchingLetter = (choices, answer) => {
  return choices.find((val) => val.includes(answer))?.substring(0, 3);
};

export const initialiseData = (data) => {
  const newData = cloneDeep(data);
  newData.forEach((val) => {
    val.choices = val?.choices?.map((choice) => formatChoiceLetter(choice));
    val.answer = val?.answer?.map((ans) => formatChoiceLetter(ans));
  });
  return newData;
};
