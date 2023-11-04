import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    async function getQuotes() {
      const res = await fetch("https://api.adviceslip.com/advice");
      const data = await res.json();
      setQuotes((q) => [...q, data.slip.advice]);
    }

    getQuotes();
  }, [activeIndex]);

  // TODO: Learn why we used [activeIndex] in useEffect
  // TODO: Learn what this line does: setQuotes((q) => [...q, data.slip.advice]);
  // TODO: Relearn and practise spread operator

  return (
    <div className="App">
      <h1 className="quotes">{quotes[activeIndex]}</h1>
      {/* TODO: Hide Previous button when index becomes less than 0  */}
      <div className="quotes__button-group">
        <button
          onClick={() => setActiveIndex(activeIndex - 1)}
          className="quotes__btn quotes__btn--previous"
        >
          Previous
        </button>

        <button
          onClick={() => setActiveIndex(activeIndex + 1)}
          className="quotes__btn quotes__btn--next"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
