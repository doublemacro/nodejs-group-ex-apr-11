import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const inputRef = useRef(null);

  const getData = async () => {
    const response = await fetch("http://localhost:3001/api/note", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const content = await response.json();
    setItems(content.data);
  };

  const doSend = async () => {
    let content = inputRef.current.value;
    const response = await fetch("http://localhost:3001/api/note", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: content }),
    });
    getData();
  };

  const doDelete = async (idToBeDeleted) => {
    const response = await fetch(
      "http://localhost:3001/api/note/" + idToBeDeleted,
      {
        method: "DELETE",
      }
    );
    getData();
  };
  return (
    <div className="main-content">
      <input type="text" ref={inputRef} />
      <button onClick={doSend}>Send</button>
      {items &&
        items.map((el, i) => {
          return (
            <div key={i}>
              <div>{el.text}</div>
              <button onClick={() => doDelete(el.id)}>DELETE</button>
            </div>
          );
        })}
    </div>
  );
}

export default App;
