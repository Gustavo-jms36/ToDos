import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";

function App() {

  const toDoListed = [
    {
      id: 1,
      task: "comer",
      description: "hacer la comida a las 12pm",
      isCompleted: false,
    },
    {
      id: 2,
      task: "lavar",
      description: "lavar la ropa sucia a las 7am",
      isCompleted: false,
    },
  ];

  const [newToDoList, setNewToDoList] = useState(toDoListed);

  const addToDo = (newTask) => {
    // alert(newTask.task);
    setNewToDoList([ ...newToDoList, newTask]);
  }

  return (
    <div className="App">
      <div className="container my-4">
        <div className="row">
            <div className="col-12 col-md-4 form">
              <ToDoForm  addToDo={addToDo}/>
            </div>
            <div className="col-12 col-md-4 list">
              <ToDoList toDoList={toDoListed}/>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
