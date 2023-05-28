import { useEffect, useState } from "react";
import "./App.css";

import { InputLabel, Input, FormControl } from "@mui/material";


import { Button } from "@mui/material";
import Todo from "./components/Todo";


import DateTimePicker from 'react-datetime-picker';

import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';


import { db } from "./Firebase/firebasee";
import { query,collection, onSnapshot,querySnapshot,getDocs ,doc,updateDoc, deleteDoc,addDoc } from "firebase/firestore";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [timee,setTime]=useState(new Date())
  


  //when app loads,listen to database and fetch new todos as they added/removed
  
//update
const completeToggle =  async (todo)=>{
  await  updateDoc(doc(db,'todos',todo.id),{
      completed:!todo.completed
    })
    
}

//Delete
const deleteTodo = async (todo) => {
  await deleteDoc(doc(db, 'todos', todo.id));
};

//create
const addTodo = async (e) => {
  await addDoc(collection(db, 'todos'), { 
    task: input,
    completed: false,
    time:timee



    });
    setInput("");
    };




//Read todo
  useEffect(()=>{
    const q=query(collection(db,'todos'))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const todoArray = [];
      querySnapshot.forEach((doc) => {
        todoArray.push({...doc.data(),id:doc.id});
        console.log(todoArray.task)
    });
    setTodos(todoArray)
      
    });
    return ()=>unsubscribe()
  },[])
 






  return (
    <div className="App" style={{ textAlign: "center" }}>
      <h1>TASK MANAGER</h1>

      <br />

      <FormControl>
        <InputLabel htmlFor="my-input">Write a Todo</InputLabel>
        <Input
          value={input}
          onChange={(event)=>{setInput(event.target.value)}}
          
        />
      
      <DateTimePicker  sx={{mt:'5'}} onChange={setTime} value={timee} />

        <Button variant="contained" sx={{ ml: 5, mt: 5 }} onClick={addTodo}>
          Add Task
        </Button>
      </FormControl>

      {todos.map((todo,index) => (
        
        
        <Todo todo={todo} key={index} complete={completeToggle} deleteTodo={deleteTodo} />
      ))}
      
    </div>
  );
}

export default App;
