import { useState } from "react";

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChange(event) {
    setValue(event.target.value);
  }

  return {
    value,
    onChange: handleChange,
  };
}

function LoginForm() {
  const username = useFormInput("");
  const password = useFormInput("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Username:", username.value);
    console.log("Password:", password.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" {...username} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" {...password} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
