import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [msg, setMsg] = useState('');
  const [user, setUser] = useState('');

  useEffect(() => {
    if (msg) {
      alert('Thank u for visiting me 🤩');
    }
  }, [msg]);

  const submitHandler = (e) => {
    e.preventDefault();
    setMsg(`Welcome ${user} 🤯`)
  };

  return (
    <div className="App">
      <h1>Hello User App! </h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter your username"
          value={user}
          onChange={(e) => { setUser(e.target.value) }}
        />
        <button>Greet me!</button>
      </form>
      <p> {msg ? msg : "Pls enter your name 🤭"}</p>
    </div>
  );
}

export default App;
