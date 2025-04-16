import { useState } from "react";

function TaskInput({ addTask }) {
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    addTask(input);
    setInput("");
  }

  return (
    <form className="task-input-container" onSubmit={handleSubmit}>
      <input
        className="task-input"
        type="text"
        placeholder="Add a new task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="add-button" type="submit">Add</button>
    </form>
  );
}

export default TaskInput;
