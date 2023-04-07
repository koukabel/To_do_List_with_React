import React, { useState } from "react";
import Items from "./Items";

function App() {
  const [text, setText] = useState("");
  const [item, setItem] = useState("");
  const [itemsArr, setitemsArr] = useState([]);

  const handleChange = (e) => {
    setItem(e.target.value);
  };

  const handleClick = (e) => {
    setText(item);
    setitemsArr((prevalue) => {
      return [...prevalue, item];
    });
    setItem("");
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={item} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <Items itemsArr={itemsArr} text={text} setitemsArr={setitemsArr} />
      </div>
    </div>
  );
}

export default App;
