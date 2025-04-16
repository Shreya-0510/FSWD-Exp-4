function TaskItem({ task, toggleTask, deleteTask }) {
    return (
      <li className="task-item">
        <span
          className={`task-text ${task.completed ? "completed" : ""}`}
          onClick={() => toggleTask(task.id)}
        >
          {task.text}
        </span>
        <div className="task-buttons">
          <button className="complete-button" onClick={() => toggleTask(task.id)}>
            ✔
          </button>
          <button className="delete-button" onClick={() => deleteTask(task.id)}>
            ✖
          </button>
        </div>
      </li>
    );
  }
  
  export default TaskItem;
  