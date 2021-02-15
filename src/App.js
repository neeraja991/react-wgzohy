import React, { useState } from "react";
import "./App.css";
import styles from './style.css';

function Todo({ todo, index, completeTodo, removeTodo }) {
  const div = {
      color: "white",
      backgroundColor: "lightcoral",
      padding: "10px",
      margin:"10px",
      fontFamily: "Arial"
    };
  return (
    <div style={div}>
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}

      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => removeTodo(index)}>x</button>
      </div>
    </div>
    </div>
  );
}

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  const input = {
      color: "white",
      padding: "10px",
      margin:"10px",
      fontFamily: "Arial"
    };

  return (
    <form onSubmit={handleSubmit}>
      <input style={input}
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
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
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
