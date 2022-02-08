import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Todo from "./Todo";
import "./Todoform.css";
import { Button } from "@material-ui/core";

function Todoform() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [todoedit, setTodoedit] = useState(null);
  const [edittext, setEdittext] = useState("");

  //Add todo to the list
  const changes = (e) => {
    e.preventDefault();
    // console.log("you typed -->", input);
    const newList = todos;
    newList.unshift({ todo: input });
    setTodos([...newList]);
    setInput("");
  };

  //Delete the todo from the list
  const handleremove = (index) => {
    alert("Sure?");
    const newList = todos;
    newList.splice(index, 1);
    console.log(newList);
    setTodos([...newList]);
  };

  //Updating the todo from the list
  const editTodo = (props) => {
    // console.log({ props });
    // console.log(todos);
    const updatetodo = [...todos].map((todo, index) => {
      if (props === index) {
        return { todo: edittext };
      }
      return todo;
    });
    setTodos(updatetodo);
    setTodoedit(null);
    setEdittext("");
  };

  return (
    <div className="todoform">
      <div className="todoss">
        <form className="input">
          <TextField
            className="input_list"
            type="Text"
            value={input}
            name="task_title"
            placeholder="Write your TODO"
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="add" onClick={changes}>
            Add to the list
          </button>
        </form>

        {todos.map(({ todo }, index) => (
          <div className="list">
            {todoedit === index ? (
              <input
                type="text"
                onChange={(e) => setEdittext(e.target.value)}
                value={edittext}
              />
            ) : (
              <Todo text={todo}
              />
            )}
            <Button onClick={() => handleremove(index)} variant="contained">
              Delete
            </Button>

            {todoedit === index ? (
              <Button onClick={() => editTodo(index)} variant="contained">
                submit
              </Button>
            ) : (
              <Button onClick={() => setTodoedit(index)} variant="contained">
                Update
              </Button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
export default Todoform;
