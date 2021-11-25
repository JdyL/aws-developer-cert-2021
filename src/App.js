import { useState } from "react";
import "./App.css";
import { QuestionAnswer } from "./components/QuestionAnswer";
import { data } from "./data";
import { Results } from "./components/Results";
import { GetScore } from "./components/GetScore";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  const currentQuestionData = data[currentIndex];

  const isFinished = () => {
    return currentIndex + 1 > data.length;
  };

  return (
    <div className="App">
      <div className="Content">
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
            clickNext={() => setCurrentIndex((prevState) => (prevState += 1))}
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
      </div>
    </div>
  );
}

export default App;
