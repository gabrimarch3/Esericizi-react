import { useState } from "react";

const TodoList = () => {
  const [item, setItem] = useState([]);
  const [value, setValue] = useState("");

  const handleValue = (event) => {
    setValue(event.target.value);
  };

  const handleTodoList = () => {
    setItem([...item, value]);
    setValue("");
  };

  const handleReset = () => {
    setItem([]);
  };

  const handleRemoveOne = (id) => {
    const updateItems = [...item];
    updateItems.splice(id, 1);
    setItem(updateItems)
  }

  return (
    <div>
      <ul>
        {item.map((item, id) => (
          <div className="todo-item">
            <li key={id}>{item}</li>
            <button onClick={handleRemoveOne}>X</button>
          </div>
        ))}
      </ul>
      <input type="text" name="todoItem" value={value} onChange={handleValue} />
      <button onClick={handleTodoList}>Aggiungi</button>
      <button onClick={handleReset}>Rimuovi tutto</button>
    </div>
  );
};

export default TodoList;
