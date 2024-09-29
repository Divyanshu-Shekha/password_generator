import { useCallback, useEffect, useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(9);
  const [numberallowed, setNumberallowed] = useState(false);
  const [charallowed, setCharallowed] = useState(false);
  const [passWord, setPassword] = useState("");

  const passWordgenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyz";
    if (numberallowed) {
      str += "0123456789";
    }
    if (charallowed) {
      str += "@!#$%^&*";
    }

    for (let i = 1; i <= length; i++) {
      let randomval = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(randomval);
    }
    setPassword(pass);
  }, [numberallowed, charallowed, setPassword, length]);

  useEffect(() => {
    passWordgenerator();
  }, [passWordgenerator]);

  return (
    <div className="App">
      <h1>Random PassWord Generator</h1>
      <div className="main_container">
        <div className="text_container">
          {" "}
          <input type="text" value={passWord}  className="password_container"/>
          <input
            type="button"
            value="copy"
            className="button_container"
            onClick={() => {
              navigator.clipboard.writeText(passWord);
            }}
          />
        </div>
        <div className="range_container">
          <input
            type="range"
            defaultValue={length}
            onChange={(e) => setLength(e.target.value)}
          />
          <h3>The length is : {length}</h3>
        </div>
        <div className="checkContainer">
          <label for="number">Number = </label>
          <input
            type="checkbox"
            defaultChecked={numberallowed}
            name="number"
            onChange={() => {
              setNumberallowed((prev) => !prev);
            }}
          />
          <br />
          <label for="charecter">Charecter = </label>
          <input
            type="checkbox"
            defaultChecked={charallowed}
            name="charecter"
            onChange={() => {
              setCharallowed((prev) => !prev);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
