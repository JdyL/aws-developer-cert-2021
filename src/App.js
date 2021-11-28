import { useContext } from "react";
import "./App.css";
import { HomePage, QuizPage, ResultsPage } from "./pages";
import { Context } from "./context";

function App() {
  const context = useContext(Context);
  const { currentIndex, data, start } = context;

  const isFinished = () => {
    const finished = currentIndex + 1 > data.length;
    return finished;
  };

  return (
    <div
      className="App"
      style={{ alignItems: isFinished() ? "flex-start" : "center" }}
    >
      <div className="Content">
        {!start ? (
          <HomePage />
        ) : (
          <>{!isFinished() ? <QuizPage /> : <ResultsPage />}</>
        )}
      </div>
    </div>
  );
}

export default App;
