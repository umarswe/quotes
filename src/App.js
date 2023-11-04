import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [quote, setQuote] = useState("");

  async function getQuotes() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setQuote(data.slip.advice);
  }

  useEffect(function () {
    getQuotes();
  }, []);

  getQuotes();

  return (
    <div className="App">
      <h1 className="quotes">{quote}</h1>
      <button onClick={getQuotes} className="quotes__btn">
        Next
      </button>
    </div>
  );
}

export default App;
