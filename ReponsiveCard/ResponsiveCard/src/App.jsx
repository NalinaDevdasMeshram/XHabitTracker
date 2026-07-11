import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editIndex !== null) {
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = inputValue;
      setTodos(updatedTodos);
      setEditIndex(null);
    } else {
      setTodos([...todos, inputValue]);
    }
    setInputValue("");
  };

  const handleEdit = (index) => {
    setInputValue(todos[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const filterUpdate = todos.filter((todo, i) => i !== index);
    setTodos(filterUpdate);

    if (editIndex === index) {
      setEditIndex(null);
      setInputValue("");
    }
  };

  return (
    <form className="todo-form">
      <h2>Todo List</h2>
      <input
        type="text"
        placeholder="Enter item name"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        required
      />
      <button type="submit" onClick={handleSubmit}>
        Add
      </button>
      {todos.map((todo, index) => {
        return (
          <div key={index} className="todoList">
            <p>{todo}</p>
            <button onClick={() => handleEdit(index)} className="btn">
              Edit
            </button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        );
      })}
    </form>
  );
};

export default App;
