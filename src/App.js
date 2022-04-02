import "./App.css";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
/* COMPONENTS */
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {
  const [todos, setodo] = useState(["Eve git", "Alışveriş"]);

  return (
    <div className="App">
      <ToastContainer />
      <TodoForm todos={todos} setodo={setodo} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
