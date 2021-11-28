import React, { useContext } from "react";
import { Button } from "../../components";
import { Context } from "../../context";
import { shuffle } from "lodash";
import { formatChoiceLetter } from "../../utils";

export const HomePage = () => {
  const context = useContext(Context);
  const {
    amountOfQuestions,
    setAmountOfQuestions,
    data,
    amountOfQuestionsOptions,
    setData,
    setStart,
    setShuffleCount,
    shuffleCount,
  } = context;
  const shuffleData = () => {
    setShuffleCount((prevState) => prevState + 1);
    const newState = shuffle(data);
    newState.forEach((val) => {
      val.choices = shuffle(val.choices).map((choice, index) =>
        formatChoiceLetter(choice, index)
      );
    });
    setData(newState);
  };
  return (
    <div>
      <h1>Welcome to AWS Developer Associate practice Exam</h1>
      <p style={{ paddingTop: 10, paddingBottom: 20, fontWeight: 300 }}>
        I got these question and answers from examtopics + checked the
        discussion for false answers
      </p>
      <div>
        Questions:{" "}
        <input
          name="Questions Amount"
          value={amountOfQuestions}
          className="QuestionInput"
          onChange={(e) => {
            const value = e.target.value;
            if (
              (/^[0-9\b]+$/.test(value) && value <= data.length && value > 0) ||
              value === ""
            )
              setAmountOfQuestions(e.target.value);
          }}
        />
        / {data.length}
        <div className="QuestionBtnContainer">
          {amountOfQuestionsOptions.map((val) => (
            <button
              className={`QuestionBtn ${
                val === amountOfQuestions ? "-highlight" : ""
              }`}
              onClick={() => setAmountOfQuestions(val)}
              key={val}
            >
              {val === data.length ? "All" : val}
            </button>
          ))}
        </div>
      </div>
      <div
        style={{
          marginBottom: 60,
          marginTop: 30,
          height: 1,
          width: "100%",
          backgroundColor: "grey",
        }}
      ></div>
      <Button
        text="Start"
        onClick={() => {
          setStart(true);
          setData(data.slice(0, amountOfQuestions));
        }}
      />
      <Button
        text={`${shuffleCount ? `Shuffled x${shuffleCount}` : "Shuffle?"}`}
        style={{
          backgroundColor: "green",
          marginTop: 20,
        }}
        onClick={shuffleData}
      />
    </div>
  );
};

export default HomePage;
