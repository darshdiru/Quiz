import React, { useEffect, useState } from "react";
import Data from "./data/data.json";
import Result from "./Result";

const data = Data.questions;

export default function Quiz() {
  const [page, setPage] = useState(1);
  const [questions, setQuestions] = useState([]);
  const [scores, setScores] = useState(0);

  useEffect(() => {
    setQuestions(data);
  }, []);

  const handleAnswer = (correct, id) => {
    if (correct === id) {
      setScores(scores + 1);
      setPage(page + 1);
    } else {
      setPage(page + 1);
    }
  };

  const playAgain = () => {
    setTimeout(() => {
      setScores(0);
      setPage(1);
    }, 300);
  };

  return (
    <>
      {page < data.length + 1 ? (
        <div>
          <h3>
            Question {page}/{data.length}
          </h3>
          {questions.map((q) => {
            if (page === q.id) {
              return (
                <div
                  className="d-flex justify-content-around"
                  key={q.id}
                  style={{ marginTop: "3rem" }}
                >
                  <div className="questions">
                    <p>{q.question}</p>
                  </div>
                  <div className="answers">
                    <ul>
                      {q.answers.map((k, index) => (
                        <li key={index}>
                          <button
                            key={index}
                            onClick={() => handleAnswer(q.correctIndex, index)}
                            style={{
                              backgroundColor: `#282c34`,
                            }}
                          >
                            {k}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            } else return null;
          })}
        </div>
      ) : (
        <Result
          total={questions.length}
          scores={scores}
          playAgain={playAgain}
        />
      )}
    </>
  );
}
