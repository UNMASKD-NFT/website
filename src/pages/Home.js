import React from "react";

function Home() {
  return (
    <div className="container">
      <h1 className="text-center text-big">U N M A S K D</h1>
      <p className="text-center">800+ generative NFTs</p>
      <button
        className="buy-button"
        onClick={() =>
          window.open("https://opensea.io/collection/unmaskd", "_blank")
        }
      >
        buy now!
      </button>
    </div>
  );
}

export default Home;
