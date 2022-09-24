import React from "react";
import "./Subscribe.css";

function Subscribe() {
  return (
    <div className="subscribe">
      <div className="content">
        <h2>Join Our DeFi Community</h2>
        <form
          action="https://getform.io/f/75f3f925-ab0a-4b1b-9871-72b8baa243c3"
          method="POST"
        >
          <div className="form__container display-col">
            <input type="email" name="email" placeholder="Enter your email" />
            <button className="btn">Sign Up</button>
          </div>
          <div className="form__container">
            <input type="checkbox" />{" "}
            <p>Yes, I agree to receive email communications from DeFi.</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Subscribe;
