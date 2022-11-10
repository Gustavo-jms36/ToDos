import React from "react";

const ToDoList = ({toDoList}) => {
  

  return (
    <div>

        
    {toDoList.map(todo => (
        <div className="card" style={{width: "18rem"}} key={todo.id}>
          <div className="card-body">
            <h5 className="card-title">{todo.task}</h5>
            <p className="card-text">
              {todo.description}
            </p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="complete">
                <p className="mb-0">Complete:{" "}
                {todo.isCompleted.toString()}
                </p>
              </div>
              <div className="d-flex justify-content-end">
            <button className="btn btn-danger"><i className="bi bi-trash3"></i></button>
            <button className="btn btn-secondary ms-1"><i className="bi bi-pencil"></i></button>
            </div>
            </div>
          </div>
        </div>
        ))}
        </div>
  );
};

export default ToDoList;
