import React from "react";
import MainVideo from "../../assets/video.mp4";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <video autoPlay loop muted id="video">
        <source src={MainVideo} type="video/mp4" />
      </video>
      <div className="hero__text">
        <h2>Decentralized</h2>
        <h2>
          <span className="blue">Trading </span> Protocol
        </h2>
        <p>
          Guaranteed liquidity trading for millions of users and top Ethereum
          applications.
        </p>
        <div className="btn-group">
          <button className="btn">Use Defi</button>
          <button className="btn btn__outline">Documentation</button>
          <button className="btn btn__outline">FAQ</button>
        </div>
      </div>
      <div className="bottom-text">
        <h2>Total Volume Secured: $42,104,783,662.47</h2>
      </div>
    </div>
  );
}

export default Hero;
