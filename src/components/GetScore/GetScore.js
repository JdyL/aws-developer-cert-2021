import React, { useState } from "react";
import "./GetScore.css";
import { Results } from "../Results";

export const GetScore = ({ className, style, data, finalAnswers }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {showModal && (
        <>
          <div
            style={{
              position: "absolute",
              width: "70vw",
              height: "70vh",
              backgroundColor: "white",
              borderRadius: 2,
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              zIndex: 20,
            }}
          >
            <Results data={data} finalAnswers={finalAnswers} />
          </div>
          <div
            style={{
              backgroundColor: "rgba(0,0,0,0.5)",
              width: "100vw",
              height: "100vh",
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 10,
            }}
            onClick={() => setShowModal(false)}
          ></div>
        </>
      )}
      <button
        className={`ScoreBtn ${className}`}
        style={style}
        onClick={() => setShowModal((prevState) => !prevState)}
      >
        Check results
      </button>
    </>
  );
};

export default GetScore;
