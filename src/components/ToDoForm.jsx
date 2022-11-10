import React, { useState } from "react";

const ToDoForm = ({addToDo}) => {

  const [task, setTask] = useState("")
  const [description, setDescription] = useState("")
  const [isCompleted, setIsCompleted] = useState(false)

  const submit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      task: task,
      description: description,
      isComplete: isCompleted
    }

    addToDo(newTask);
    console.log(newTask);

  }

  return (
      <div className="row">
        <div className="col">
          <form action="" onSubmit={submit}>
            <div className="mb-3">
              <label 
              htmlFor="task" 
              className="form-label"
              id="task">
                Task name
              </label>
              <input
                type="text"
                className="form-control"
                id="task"
                onChange={e => setTask(e.target.value)}
                value={task}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea
                className="form-control"
                id="description"
                rows="3"
                onChange={e => setDescription(e.target.value)}
                value={description}
              ></textarea>
              <div className="form-check my-3">
              <label 
              htmlFor="isCompleted" 
              className="form-check-label"
              id="isCompleted">
                Is complete
              </label>
              <input
                type="checkbox"
                className="form-check-input"
                id="isCompleted"
                onChange={e => setIsCompleted(e.target.checked)}
                checked={isCompleted}
              />
              </div>
              <button className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
  );
};

export default ToDoForm;
