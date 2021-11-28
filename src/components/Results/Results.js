import React, { useState } from "react";
import { QuestionAnswer } from "../QuestionAnswer";
import styles from "./Results.module.scss";
import { isEqual } from "lodash";
import { Button } from "../Button";

export const Results = ({
  data,
  finalAnswers: originalFinalAnswers,
  finalTime,
  reset,
}) => {
  const [finalAnswers, setFinalAnswers] = useState(originalFinalAnswers);
  const [filter, setFilter] = useState("Show All");
  const QA = () => {
    return Object.values(finalAnswers).map((ans, index) => (
      <div className="pb-16" key={index}>
        <QuestionAnswer
          key={index + 1}
          index={index + 1}
          question={data[index].question}
          choices={data[index].choices}
          userAnswer={ans}
          correctAnswer={data[index].answer}
          showResult
          questionImage={data[index]?.imageUrl}
        />
      </div>
    ));
  };

  const filterBtns = {
    // hide for now
    // "Show All": {
    //   onClick: () => {
    //     setFinalAnswers(originalFinalAnswers);
    //   },
    // },
    // "Show Correct": {
    //   style: { backgroundColor: "green" },
    //   onClick: () => {
    //     setFinalAnswers(
    //       Object.entries(originalFinalAnswers).reduce((acc, [key, val]) => {
    //         if (isEqual(val, data[key].answer)) {
    //           acc[key] = val;
    //         }
    //         return acc;
    //       }, {})
    //     );
    //   },
    // },
    // "Show Incorrect": {
    //   style: { backgroundColor: "red" },
    //   onClick: () => {
    //     setFinalAnswers(
    //       Object.entries(originalFinalAnswers).reduce((acc, [key, val]) => {
    //         if (!isEqual(val, data[key].answer)) {
    //           acc[key] = val;
    //         }
    //         return acc;
    //       }, {})
    //     );
    //   },
    // },
  };

  const Settings = () => {
    return (
      <div className={styles.Settings}>
        {Object.entries(filterBtns).map(([key, val]) => {
          return (
            <Button
              key={key}
              text={key}
              className={`${styles.FilterBtn} ${
                filter === key ? styles.Selected : ""
              }`}
              onClick={() => {
                setFilter(key);
                val.onClick();
              }}
              style={val.style}
            />
          );
        })}
      </div>
    );
  };

  const Score = () => {
    const finalAnswersArr = Object.entries(finalAnswers);
    let score = 0;
    const total = finalAnswersArr?.length;
    finalAnswersArr.forEach(([key, val]) => {
      if (isEqual(data[key].answer, val)) {
        score++;
      }
    });
    const percent = Math.floor((score / total) * 100);
    return (
      <div>
        <h2
          className="p-4"
          style={{ border: "1px solid cyan" }}
        >{`You scored: ${score} / ${total} (${percent || 0}%)`}</h2>
        {percent > 72 ? (
          <p className="text-green-500">You passed!</p>
        ) : (
          <>
            <p className="text-red-500">You need atleast 72% to pass </p>
            You failed :(
          </>
        )}
      </div>
    );
  };
  return (
    <div className={styles.Results}>
      <div className="flex items-center justify-around">
        {finalTime && <p>Time elapsed: {finalTime}</p>}
        {finalTime && (
          <Button
            className="my-10 w-50"
            style={{ padding: "2px 10px", backgroundColor: "#eb4034" }}
            text="Play again"
            onClick={reset}
          />
        )}
      </div>
      <Score />
      <Settings />
      <QA />
    </div>
  );
};

export default Results;
