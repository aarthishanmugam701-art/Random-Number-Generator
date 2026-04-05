import React, { useState } from "react";

function AdvancedRandom() {
  const [num, setNum] = useState(null);
  const [history, setHistory] = useState([]);
  const [range, setRange] = useState(500);

  const generateNumber = () => {
    const value = Math.floor(Math.random() * range) + 1;
    setNum(value);
    setHistory([value, ...history]); // add new number at start
  };

  const evenOdd = num !== null ? (num % 2 === 0 ? "Even" : "Odd") : "";

  return (
    <div style={styles.card}>
      <h2> Generate Random Number</h2>

      {/* Range input */}
      <div style={{ margin: "10px 0" }}>
        <label>Max Range: {range}</label>
        <input
          type="range"
          min="1"
          max="500"
          value={range}
          onChange={(e) => setRange(Number(e.target.value))}
          style={{ width: "100%" }}
        />
      </div>

      {/* Generated number */}
      <div style={styles.numberBox}>
        {num === null ? "No number yet" : num}
      </div>

      {/* Even / Odd */}
      {num !== null && <p style={{ margin: "5px" }}>({evenOdd})</p>}

      {/* Generate button */}
      <button style={styles.button} onClick={generateNumber}>
        Generate
      </button>

      {/* History */}
      {history.length > 0 && (
        <div style={styles.history}>
          <h4>History:</h4>
          <ul>
            {history.map((n, i) => (
              <li key={i}>{n} ({n % 2 === 0 ? "Even" : "Odd"})</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

const styles = {
  card: {
    width: "100%",
    maxWidth: "400px",
    padding: "25px",
    margin: "0 auto",
    textAlign: "center",
    borderRadius: "15px",
    boxShadow: "0 5px 15px rgb(32, 125, 137)",
    backgroundColor: "#fff",
  },
  numberBox: {
    fontSize: "40px",
    fontWeight: "bold",
    margin: "20px 0",
    color: "#4caf50",
  },
  button: {
    padding: "10px 25px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "rgb(38, 173, 191)",
    color: "white",
    marginBottom: "20px",
  },
  history: {
    textAlign: "left",
    marginTop: "20px",
  },
};

export default AdvancedRandom;