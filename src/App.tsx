import Notes from './components/Notes'
import ContextApp from "./reactContext/index"

const App = () => {
  return (
    // <Notes/>
    <ContextApp/>
  )
}

export default App
// uncomment below section to learn about useEffect, memo, useMemo and useCallback
/*
import React, { useState, useEffect, useMemo, useCallback } from "react";
import List from "./components/list";
import type { Todo } from "./components/list";
const initialState = [
  { id: 1, task: "Go hiking " },
  { id: 2, task: "Pay the electricity bill " },
];
function App() {
  const [todoList, setTodoList] = useState(initialState);
  const [task, setTask] = useState("");
  const [term, setTerm] = useState("");

  const printTodoList = useCallback(() => {
    console.log("Changing todoList", todoList);
  }, [todoList]);

  useEffect(() => {
    printTodoList()
  }, [todoList])
  
  useEffect(() => {
    console.log("Rendering <App/>");
  });

  const handleCreate = () => {
    const newTodo = { id: Date.now(), task };
    setTodoList([...todoList, newTodo]);
    setTask("");
  };

  const filteredTodoList = useMemo(
    () =>
      todoList.filter((todo: Todo) => {
        console.log("filtering");
        return todo.task.toLowerCase().includes(term.toLocaleLowerCase());
      }),
    [term, todoList]
  );

  const handleSearch = () => {
    setTerm(task);
    setTodoList(filteredTodoList);
  };

  const handleDelete = useCallback(
    (taskId: number) => {
      const newTodoList = todoList.filter((todo: Todo) => todo.id !== taskId);
      setTodoList(newTodoList);
    },
    [todoList]
  );

  return (
    <>
      <input type="text" value={task} onChange={e => setTask(e.target.value)} />
      <button onClick={handleCreate}>Create</button>
      <button onClick={handleSearch}>Search</button>
     /* <List todoList={todoList} handleDelete={handleDelete} />
    </>
  );
}
*/
