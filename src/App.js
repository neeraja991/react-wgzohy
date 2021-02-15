import React, { useState,useRef } from "react";
import "./App.css";
import styles from './style.css';

function Todo({ todo, index, completeTodo, removeTodo,changeTodo }) {
  const labelref = useRef();
  const div = {
      color: "white",
      backgroundColor: "lightcoral",
      padding: "10px",
      margin:"10px",
      fontFamily: "Arial"
    };
  return (
    <div style={div}>
      <span ref={labelref} style={{textTransform :"Uppercase"}}>{todo.text}</span>
    <div
      className="todo" 
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}
      <div>

        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => changeTodo(index)}>Change UPPERCASE</button>
        <button onClick={() => removeTodo(index)}>x</button>
       
      </div>
    </div>
    
    </div>

    
  );
}

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");
  const labelref = useRef();
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
     console.log('Keyword: ' + labelref.current.value);
     labelref.current.style.textTransform = "Uppercase";
    setValue("");
  };

 let search = (e) => {
   
     setValue("");
  }
  const input = {
      color: "black",
      padding: "10px",
      margin:"10px",
      fontFamily: "Arial"
    };

  return (
    <fieldset>
    <legend>Todo List Input</legend>
    <form onSubmit={handleSubmit}>
      <input style={input}
        type="text"
        className="input"
        ref={labelref}
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Input List..."
      />
     
   
    </form>
    </fieldset>
  );
}

function App() {
  const [todos, setTodos] = useState([
    {
      text: "Learn about React",
      isCompleted: true
    },
    {
      text: "Meet friend for lunch",
      isCompleted: false
    },
    {
      text: "Build really cool todo app",
      isCompleted: false
    }
  ]);
  const labelref = useRef();

  const addTodo = text => {
    const newTodos = [...todos, { text,isCompleted:false }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
   // console.log(...newTodos);
    if (newTodos[index].isCompleted === false) {
   
      newTodos[index].isCompleted = true;
      setTodos(newTodos);
         console.log(...newTodos);
    } else if (newTodos[index].isCompleted === true) {
     // console.log(...newTodos);
      newTodos[index].isCompleted = false;
      setTodos(newTodos);
    }
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const changeTodo = index => {
    //const newTodos = [...todos,{text:value}];
    console.log(labelref.current.value);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
      
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            changeTodo={changeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
