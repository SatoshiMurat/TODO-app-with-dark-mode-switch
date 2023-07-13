import React, { useState } from 'react';
import './app.css';

function App() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  function addItem() {
    if (!newItem) {
      alert("Add An Item");
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem
    };

    setItems(oldList => [...oldList, item]);
    setNewItem("");
  }

  function deleteItem(id) {
    const updatedItems = items.filter(item => item.id !== id);
    setItems(updatedItems);
  }

  function toggleDarkMode() {
    setDarkMode(prevDarkMode => !prevDarkMode);
  }

  return (
    <div className={`App ${darkMode ? "dark-mode" : ""}`}>
      <h1>TODO LIST</h1>
      <div className="toggle-container">
        <span className="toggle-label">Dark Mode</span>
        <label className="switch">
          <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
          <span className="slider round"></span>
        </label>
      </div>
      <form onSubmit={e => {
        e.preventDefault();
        addItem();
      }}>
        <input
          type="text"
          placeholder='Add An Item...'
          value={newItem}
          onChange={e => setNewItem(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.value}
            <button onClick={() => deleteItem(item.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;



