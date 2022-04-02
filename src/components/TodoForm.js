import React, { useState } from "react";
import { toast } from "react-toastify";

export default function TodoForm({ todos, setodo }) {
  const [input, setinput] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    if (input === "") {
      toast.error("it is empty");
    } else {
      setodo([input, ...todos]);
      setinput("");
      toast.success("task added");
    }
  };
  return (
    <div>
      <form className="todo-form">
        <input
          name="todo"
          value={input}
          onChange={(e) => setinput(e.target.value)}
          placeholder="Something to do..."
        />
        <button onClick={handleClick}>+</button>
      </form>
    </div>
  );
}
