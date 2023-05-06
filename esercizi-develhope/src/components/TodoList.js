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

  return (
    <div>
      <ul>
        {item.map((item, id) => (
          <li key={id}>{item}</li>
        ))}
      </ul>
      <input type="text" name="todoItem" value={value} onChange={handleValue} />
      <button onClick={handleTodoList}>Aggiungi</button>
    </div>
  );
};

export default TodoList;
