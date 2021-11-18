import { useState } from "react";
import "./App.css";
import QuestionAnswer from "./QuestionAnswer";
import { data } from "./data";

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
            setAnswer={(ans) => {
              setAnswers((prevState) => {
                return { ...prevState, [currentIndex]: ans };
              });
              setCurrentIndex((prevState) => (prevState += 1));
            }}
            showResult={() => {
              console.log("Result");
            }}
          />
        ) : (
          <div>Finished!</div>
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
      </div>
    </div>
  );
}

export default App;
