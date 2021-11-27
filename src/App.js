import { useState, useEffect } from "react";
import "./App.css";
import { QuestionAnswer } from "./components/QuestionAnswer";
import { data as originalData } from "./data";
import { Results } from "./components/Results";
import { GetScore } from "./components/GetScore";
import { shuffle } from "lodash";
import { Button } from "./components/Button";
import { formatTime, formatChoiceLetter } from "./utils";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [data, setData] = useState(originalData);
  const [start, setStart] = useState(false);
  const [shuffleCount, setShuffleCount] = useState(0);
  const [timer, setTimer] = useState(0);
  const currentQuestionData = data[currentIndex];

  const isFinished = () => {
    return currentIndex + 1 > data.length;
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
      setInterval(() => setTimer((prevState) => (prevState += 1)), 1000);
    }
  }, [start]);

  return (
    <div className="App">
      <div className="Content">
        {start && (
          <div className="Timer">Time elapsed: {formatTime(timer)}</div>
        )}
        {!start ? (
          <>
            <h1>Welcome to AWS Developer Associate practice Exam</h1>
            <p style={{ paddingTop: 10, paddingBottom: 20, fontWeight: 300 }}>
              I got these question and answers from examtopics + checked the
              discussion for false answers
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
            <Button text="Start" onClick={() => setStart(true)} />
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
              <QuestionAnswer
                index={currentIndex + 1}
                question={currentQuestionData.question}
                choices={currentQuestionData.choices}
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
            ) : (
              <div>
                <Results data={data} finalAnswers={answers} />
              </div>
            )}
            <p
              style={{
                position: "absolute",
                color: "grey",
                right: 0,
                bottom: 0,
                paddingRight: 10,
              }}
            >{`${currentIndex + 1}/${data.length}`}</p>
            <GetScore
              data={data}
              finalAnswers={answers}
              style={{ position: "absolute", top: 0, right: 0 }}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
