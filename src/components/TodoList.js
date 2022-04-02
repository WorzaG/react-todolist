import React from "react";

export default function TodoList({ todos }) {
  return (
    <div className="todos">
      {todos.map((item) => (
        <ul key={item}>
          <li className="order"></li>
          <li key={item}>{item}</li>
        </ul>
      ))}
    </div>
  );
}
