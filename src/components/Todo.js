import React from "react";
import { Avatar, Button, ListItemAvatar } from "@mui/material";
import { List, ListItem, ImageIcon, ListItemText } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";

import "./Todo.css";

const Todo = ({ todo, complete, deleteTodo }) => {
  const dateInMillis = todo.time.seconds * 1000;

  var date =
    new Date(dateInMillis).toDateString() +
    " at " +
    new Date(dateInMillis).toLocaleTimeString();

  //to find the deadline date difference
  const datee = new Date(todo.time.seconds*1000).getTime()
  var present_date = new Date().getTime();
  const diffMillis = Math.abs(datee - present_date);

  // Convert milliseconds to days
  const day = Math.floor(diffMillis / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diffMillis % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diffMillis % (1000 * 60 * 60)) / (1000 * 60));
 
  



// console.log(day + "days " +hours +"hours " +minutes)

  return (
    <div style={{ backgroundColor: "wheat" }}>
      

      <List className="todo__list">
        <ListItem>
          <Checkbox
            checked={todo.completed ? "checked" : ""}
            onChange={() => complete(todo)}
          />

          <ListItemText primary={todo.task} secondary={date} />
          <ListItemText secondary={day + "D " + hours +"H " + minutes+"M left"} />


          <Button onClick={() => deleteTodo(todo)} variant="contained">
            DELETE
          </Button>
        </ListItem>
      </List>
    </div>
  );
};

export default Todo;
