import React from "react";
import { useState } from "react";

export default function Form() {
  const [displayForm, setDisplayForm] = useState("display");
  const [displayReview, setDisplayReview] = useState("hide");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [message, setMessage] = useState("");

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }
  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }
  function handleAge(e) {
    setAge(e.target.value);
  }
  function handleMessage(e) {
    setMessage(e.target.value);
  }

  function handleForm(e) {
    e.preventDefault();
    setDisplayForm("hide");
    setDisplayReview("display");
  }

  function handleBackClick() {
    setDisplayReview("hide");
    setDisplayForm("display");
  }

  function handleSendForm() {
    window.location = window.location;
  }

  return (
    <>
      <form onSubmit={handleForm} className={displayForm}>
        <div className="first-name">
          <label>First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={handleFirstNameChange}
          />
        </div>
        <div className="last-name">
          <label>Last Name</label>
          <input type="text" value={lastName} onChange={handleLastNameChange} />
        </div>
        <select value={age} onChange={handleAge}>
          <option>Age</option>
          <option>0-18</option>
          <option>19-30</option>
          <option>30-40</option>
          <option>Over 40</option>
        </select>
        <div className="message">
          <label>Message: </label>
        </div>
        <div className="text-area">
          <textarea
            cols="30"
            rows="6"
            value={message}
            onChange={handleMessage}
          ></textarea>
        </div>
        <input type="submit" />
      </form>

      <div className={"review-form " + displayReview}>
        <h2>First Name = {firstName} </h2>
        <h2>Last Name = {lastName} </h2>
        <h2>Age = {age} </h2>
        <h2>Message = {message} </h2>
        <div>
          <button onClick={handleBackClick}>Back</button>
          <button onClick={handleSendForm}>Send Form</button>
        </div>
      </div>
    </>
  );
}
