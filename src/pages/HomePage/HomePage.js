import React, { useContext } from "react";
import { Button } from "../../components";
import { Context } from "../../context";
import { shuffle } from "lodash";
import { formatChoiceLetter } from "../../utils";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();
  const context = useContext(Context);

  const startQuiz = () => {
    context.setStart(true);
    navigate("/quiz");
  };

  const {
    amountOfQuestions,
    setAmountOfQuestions,
    data,
    amountOfQuestionsOptions,
    setData,
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
      <p className="pt-2 pb-7 font-thin">
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
      <div className="Line"></div>
      <Button
        text="Start"
        onClick={() => {
          setData(data.slice(0, amountOfQuestions));
          startQuiz();
        }}
      />
      <Button
        text={`${shuffleCount ? `Shuffled x${shuffleCount}` : "Shuffle?"}`}
        className="mt-5"
        style={{
          backgroundColor: "green",
        }}
        onClick={shuffleData}
      />
    </div>
  );
};

export default HomePage;
