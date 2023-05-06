import { useState } from "react";

const Login = (props) => {
    const [userID, setuserID] = useState("");
    const [userPassword, setUserPassword] = useState("")

    const handleUserID = (event) => {
        setuserID(event.target.value)
    }

    const handleUserPassword = (event) => {
        setUserPassword(event.target.value)
    }
 


    const onLogin = (event) => {
        event.preventDefault();
        let user = {
            name: userID,
            psw: userPassword
        }
        console.log(user);
    }
    
    const isLoginDisabled = userID === "" || userPassword === "";

    return (
        <div className="login-form">
            <form>
                <input type="text" placeholder="Nome Utente" onChange={handleUserID}/>
                <input type="password"  placeholder="1234" onChange={handleUserPassword}/>
                <button disabled={isLoginDisabled} onClick={onLogin}>Log-in</button>
            </form>
        </div>
    )   


}

export default Login;