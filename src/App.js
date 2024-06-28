import { useState } from 'react';
import { FaTrash } from 'react-icons/fa'; // Import the delete icon from react-icons
import './App.css';

function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const handleInput = (e) => {
    setInput(e.target.value);
  }
  
  const handleTask = () => {
    if (input.trim()) { // Prevent adding empty tasks
      setList([...list, input]);
      setInput("");
    }
  }

  const handleDelete = (index) => {
    const filterList = list.filter((ele, i) => i !== index);
    setList(filterList);
  }

  return (
    <div className="App">
      <input 
        type='text' 
        value={input} 
        onChange={handleInput} 
        placeholder="Add a task"
      />
      <button onClick={handleTask}>Add Task</button>
      <ul>
        {list.map((item, index) => (
          <li key={index} className="task-item">
            {item}
            <FaTrash className="delete-icon" onClick={() => handleDelete(index)} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
