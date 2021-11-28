import React, { useState } from "react";
import { Results } from "../Results";
import { Modal, Button } from "../";

export const GetScore = ({ className, style, data, finalAnswers }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {showModal && (
        <>
          <Modal setShowModal={setShowModal}>
            <Results data={data} finalAnswers={finalAnswers} />
          </Modal>
        </>
      )}
      <Button
        text="Check results"
        className={className}
        style={style}
        onClick={() => setShowModal((prevState) => !prevState)}
      />
    </>
  );
};

export default GetScore;
