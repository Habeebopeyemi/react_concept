import EventEmitter from "events";
import { useReducer, useState, FormEvent } from "react";

type Note = {
  id: number;
  note: string;
};

type Action = {
  type: string;
  payload?: any;
};

type ActionTypes = {
  ADD: "ADD";
  UPDATE: "UPDATE";
  DELETE: "DELETE";
};

const actionTypes: ActionTypes = {
  ADD: "ADD",
  DELETE: "DELETE",
  UPDATE: "UPDATE",
};

const initialNotes: Note[] = [
  { id: 1, note: "Note 1" },
  { id: 2, note: "Note 2" },
];

const reducer = (state: Note[], action: Action) => {
  switch (action.type) {
    case actionTypes.ADD:
      return [...state, action.payload];
    case actionTypes.DELETE:
      return state.filter(note => note.id !== action.payload);
    case actionTypes.UPDATE:
      const updatedNote = action.payload;
      console.log(updatedNote);
      return state.map((n: Note) =>
        n.id === updatedNote.id ? updatedNote : n
      );
    default:
      return state;
  }
};

const Notes = () => {
  const [notes, dispatch] = useReducer(reducer, initialNotes);
  const [note, setNote] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    // FormEvent<HTMLFormElement>
    e.preventDefault();
    // console.log(typeof e.keyCode);
    const newNOTE = {
      id: Date.now(),
      note,
    };

    dispatch({ type: actionTypes.ADD, payload: newNOTE });
    setNote("");
  };
  // const handleEnter = (e: any) => {
  //   e.preventDefault();
  //   // console.log(typeof e.keyCode);
  //   const newNOTE = {
  //     id: Date.now(),
  //     note,
  //   };

  //   if (e.keyCode === 13) {
  //     dispatch({ type: actionTypes.ADD, payload: newNOTE });
  //     setNote("");
  //   }
  // };
  return (
    <div>
      <h2>Notes</h2>

      <ul>
        {notes.map((n: Note) => (
          <li key={n.id}>
            {n.note}{" "}
            <button
              onClick={() =>
                dispatch({ type: actionTypes.DELETE, payload: n.id })
              }>
              X
            </button>
            <button
              onClick={() =>
                dispatch({ type: actionTypes.UPDATE, payload: { ...n, note } })
              }>
              Update
            </button>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="New Note"
          value={note}
          onChange={e => setNote(e.target.value)}
          // onKeyDown={handleEnter}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Notes;
