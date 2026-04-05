import React from "react";
import AdvancedRandom from "./components/AdvancedRandom";

function App() {
  return (
    <div style={styles.app}>
      {/* HEADER */}
      <header style={styles.header}>
        <h1 style={styles.headerText}>🎲 Random Number Generator</h1>
      </header>

      {/* MAIN CONTENT */}
      <main style={styles.main}>
        <div style={styles.cardWrapper}>
          <AdvancedRandom />
        </div>
      </main>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <p>© 2026 Random App | Built with React</p>
      </footer>
    </div>
  );
}

const styles = {
  app: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f5f5f5",
  },
  header: {
    backgroundColor: "rgb(32, 125, 137)",
    color: "white",
    padding: "20px 10px",
    textAlign: "center",
    boxShadow: "0 2px 5px rgb(32, 125, 137)",
  },
  headerText: {
    margin: 0,
    fontSize: "26px",
  },
  main: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  cardWrapper: {
    width: "100%",
    maxWidth: "450px", // card max width for large screens
    padding: "20px",
    boxSizing: "border-box",
  },
  footer: {
    backgroundColor: "rgb(32, 125, 137)",
    color: "white",
    textAlign: "center",
    padding: "15px 10px",
    marginTop: "auto",
  },
};

export default App;