const UncontrolledLogin = () => {
  const handleUncontrolledLogin = (event) => {
    event.preventDefault();

    const userName = event.target.username.value;
    const password = event.target.password.value;
    const isChecked = event.target.remember.checked;

    console.log({ userName, password, isChecked });
  };

  return (
    <div className="uncontrolled-form">
      <form onSubmit={handleUncontrolledLogin}>
        <input type="text" name="username" autoFocus/>
        <input type="password" name="password" />
        <input type="checkbox" name="remember" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default UncontrolledLogin;
