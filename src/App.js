import { useState, useEffect, useRef } from "react";
import "./App.css";
import { QuestionAnswer } from "./components/QuestionAnswer";
import { data as originalData } from "./data";
import { Results } from "./components/Results";
import { GetScore } from "./components/GetScore";
import { shuffle, cloneDeep } from "lodash";
import { Button } from "./components/Button";
import { formatTime, formatChoiceLetter } from "./utils";


const initialiseData = (data) => {
  const newData = cloneDeep(data);
  newData.forEach((val) => {
    val.choices = val?.choices?.map((choice) => formatChoiceLetter(choice));
    val.answer = val?.answer?.map((ans) => formatChoiceLetter(ans));
  });
  return newData;
};

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [data, setData] = useState(initialiseData(originalData));
  const [start, setStart] = useState(false);
  const [shuffleCount, setShuffleCount] = useState(0);
  const [timer, setTimer] = useState(0);
  const currentQuestionData = data[currentIndex];
  const [amountOfQuestions, setAmountOfQuestions] = useState(data.length);
  const timerInterval = useRef();
  const amountOfQuestionsOptions = [5, 10, 25, 50, 100, data.length];

  const isFinished = () => {
    const finished = currentIndex + 1 > data.length;
    if (finished) clearInterval(timerInterval.current);
    return finished;
  };

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

  useEffect(() => {
    if (start) {
      timerInterval.current = setInterval(
        () => setTimer((prevState) => (prevState += 1)),
        1000
      );
    }
  }, [start]);

  return (
    <div
      className="App"
      style={{ alignItems: isFinished() ? "flex-start" : "center" }}
    >
      <div className="Content">
        {start && !isFinished() && (
          <div className="Timer">Time elapsed: {formatTime(timer)}</div>
        )}
        {!start ? (
          <>
            <h1>Welcome to AWS Developer Associate practice Exam</h1>
            <p style={{ paddingTop: 10, paddingBottom: 20, fontWeight: 300 }}>
              I got these question and answers from examtopics + checked the
              discussion for false answers
            </p>
            <p>
              Questions:{" "}
              <input
                name="Questions Amount"
                value={amountOfQuestions}
                className="QuestionInput"
                onChange={(e) => {
                  const value = e.target.value;
                  if (
                    (/^[0-9\b]+$/.test(value) &&
                      value <= data.length &&
                      value > 0) ||
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
            </p>
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
              text={`${
                shuffleCount ? `Shuffled x${shuffleCount}` : "Shuffle?"
              }`}
              style={{
                backgroundColor: "green",
                marginTop: 20,
              }}
              onClick={shuffleData}
            />
          </>
        ) : (
          <>
            {!isFinished() ? (
              <>
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
                clickNext={() =>
                  setCurrentIndex((prevState) => (prevState += 1))
                }
              />
                <GetScore
                  data={data}
                  finalAnswers={answers}
                  style={{ position: "absolute", top: 0, right: 0 }}
                />
            <p
              style={{
                position: "absolute",
                color: "grey",
                right: 0,
                bottom: 0,
                paddingRight: 10,
              }}
            >{`${currentIndex + 1}/${data.length}`}</p>
              </>
            ) : (
              <Results data={data} finalAnswers={answers} />
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
