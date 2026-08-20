import React from "react";
import "./App.css";

function App() {
  const handleGetStarted = () => {
    window.location.href = "/plants";
  };

  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Paradise Nursery</h1>

        <p>
          Welcome to Paradise Nursery, your online destination for beautiful
          and healthy houseplants.
        </p>

        <p>
          Discover a variety of plants and bring nature into your home.
        </p>

        <button className="get-started-btn" onClick={handleGetStarted}>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;
