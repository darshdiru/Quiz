import React from "react";
import "./App.css";
import Quiz from "./Quiz";

function App() {
  return (
    <div className="App">
      <header>
        <h2 className="text-center p-2">Welcome to General Quiz</h2>
      </header>
      <main>
        <section>
          <Quiz />
        </section>
      </main>
    </div>
  );
}

export default App;
