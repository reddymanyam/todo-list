import { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { MdEdit } from "react-icons/md";
import './App.css';

function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [uid, setUid] = useState();
  const [update, setUpdate] = useState(false);

  const handleInput = (e) => {
    setInput(e.target.value);
  }
  
  const handleTask = () => {
    if (input.trim()) { 
      setList([...list, input]);
      setInput("");
    }
  }

  const handleEdit = (index) => {
    const filterList = list.filter((ele, i) => i === index);
    setInput(filterList[0]);
    setUid(index);
    setUpdate(true);
  }

  const handleUpdate = () => {
    const updatedList = [...list];
    updatedList[uid] = input;
    setList(updatedList);
    setInput("");
    setUpdate(false);
  }

  const handleDelete = (index) => {
    const filterList = list.filter((ele, i) => i !== index);
    setList(filterList);
  }

  return (
    <div className="App">
      <h2>Task Manager</h2>
      <div className="input-container">
        <input 
          type='text' 
          value={input} 
          onChange={handleInput} 
          placeholder="Add a task"
        />
        {update ? (
          <button onClick={handleUpdate}>Update</button>
        ) : (
          <button onClick={handleTask}>Add Task</button>
        )}
      </div>
      
      <ul>
        {list.map((item, index) => (
          <li key={index} className="task-item">
            <span className="task-text">{item}</span>
            <div className="task-actions">
              <MdEdit className="edit-icon" onClick={() => handleEdit(index)} />
              <FaTrash className="delete-icon" onClick={() => handleDelete(index)} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
