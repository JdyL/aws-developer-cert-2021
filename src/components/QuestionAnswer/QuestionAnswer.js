import React, { useState, useCallback } from "react";
import { Button } from "../Button";
import {
  getIndexes,
  letters,
  renderChoice,
  getMatchingLetter,
  choiceArrayWithLetter,
} from "../../utils";
import { Tick, Cross } from "../../assets";
import { isEqual } from "lodash";
import styles from "./QuestionAnswer.module.scss";
import { Image } from "../";

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
      return styles.Correct;
    }
    if (usersAnswer?.includes(val)) {
      return styles.Incorrect;
    }
    return "";
  };
  const Choice = useCallback(({ text }) => renderChoice(text), []);
  return (
    <div>
      <div style={{ paddingBottom: !showResult ? 30 : 0 }}>
        <h1 className={styles.Question}>
          {`${index}. ${question}`}{" "}
          {showResult &&
            (isEqual(usersAnswer.sort(), correctAnswer.sort()) ? (
              <Tick colour="lime" />
            ) : (
              <Cross colour="red" />
            ))}
        </h1>

        {questionImage && <Image src={questionImage} alt="Question" />}
      </div>

      {showResult && (
        <div className={styles.ChosenAnswer}>
          You chose:{" "}
          {getIndexes({ answers: usersAnswer, choices }).map((ans) => (
            <div
              key={ans}
              className={`${
                correctAnswer.includes(ans) ? "text-green-500" : "text-red-500"
              }`}
            >
              {getMatchingLetter(choiceArrayWithLetter(choices), ans)}
              {renderChoice(ans)}
            </div>
          ))}
          {usersAnswer?.length < 2 && question.includes("(Select") && (
            <p className="text-red-500">
              You needed to select more than one to get this question right!
            </p>
          )}
        </div>
      )}
      {choices.map((val, index) => (
        <p
          key={val}
          className={`${styles.Choices} ${
            showResult ? checkIsAnswer(val) : ""
          } ${showResult ? styles.NoHover : ""} ${
            !showResult && usersAnswer.includes(val) ? styles.Correct : ""
          }`}
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
          <Choice text={letters[index] + " " + val} />
        </p>
      ))}
      {!showResult && (
        <Button
          text="Next"
          className={styles.NextBtn}
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
