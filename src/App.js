import React from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import Home from "./page/Home";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch({
      type: "todo/get",
    });
  }, [dispatch]);

  const addToDo = () => dispatch({ type: "todo/add" });

  const deleteToDo = () =>
    dispatch({
      type: "todo/delete",
      payload: 38513,
    });

  return (
    <div className="App">
      <button type="button" onClick={addToDo}>
        Add to do
      </button>
      <button type="button" onClick={deleteToDo}>
        delete
      </button>
      <Home />
    </div>
  );
}

export default App;
