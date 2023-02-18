import { FC, useEffect, memo } from "react";
import Task from "./Task";

export type Todo = {
  id: number;
  task: string;
};

interface Props {
  todoList: Todo[];
  handleDelete: any
}

const List: FC<Props> = ({ todoList, handleDelete }) => {
  useEffect(() => {
    console.log("Rendering <List />");
  });

  return (
    <>
      <ul>
        {/* map through list and pass it on to task */}
        {todoList?.map((todo: Todo) => (
          <Task key={todo.id} id={todo.id} task={todo.task} handleDelete={handleDelete} />
        ))}
      </ul>
    </>
  );
};

export default memo(List);
