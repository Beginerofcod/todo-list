import React, { useState } from "react";
import "./Todo.css";
import { Button } from "@material-ui/core";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

function Todo({text}) {

  return (
    <div className="todos"> 
          <div className="todo_items">            
            <li>{text}</li>                  
            <div className="button">              
            </div>
          </div>   
    </div>
  );
}

export default Todo;
