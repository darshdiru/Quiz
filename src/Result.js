import React from "react";

const buttonDesign = {
  color: "#ffffff",
  backgroundColor: "green",
  border: "none",
  borderRadius: "10px",
  padding: "25px",
  margin: "1rem",
  width: "25%",
  outline: "none",
};

function Result(props) {
  return (
    <div className="container">
      <h3 style={{ margin: "1.5rem" }}>
        You scored {props.scores} of {props.total}
      </h3>
      <button style={buttonDesign} onClick={props.playAgain}>
        Play Again
      </button>
    </div>
  );
}

export default Result;
