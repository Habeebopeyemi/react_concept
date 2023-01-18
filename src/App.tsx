import React, { useState, useEffect, useMemo, useCallback } from "react";
import List from "./components/list";

const initialState = [
  { id: 1, task: "Go hiking" },
  { id: 2, task: "Pay the electricity bill" },
];
function App() {
  const [todoList, setTodoList] = useState(initialState);
  const [task, setTask] = useState("");

  useEffect(() => {
    console.log("Rendering <App/>");
  });

  const handleCreate = () => {
    const newTodo = { id: Date.now(), task };
    setTodoList([...todoList, newTodo]);
    setTask("");
  };

  return (
    <>
      <input type="text" value={task} onChange={e => setTask(e.target.value)} />
      <button onClick={handleCreate}>Create</button>
      {/* render the created list here */}
      <List todoList={todoList}/>
    </>
  );
}

export default App;
