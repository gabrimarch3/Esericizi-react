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
    
    const onLogout = (event) => {
        setuserID("");
        setUserPassword("")
    }

    const isLoginDisabled = userID === "" || userPassword === "";
    const isLogoutDisabled = userID === "" || userPassword === "";

    return (
        <div className="login-form">
            <form>
                <input type="text" value={userID} placeholder="Nome Utente" onChange={handleUserID}/>
                <input type="password" value={userPassword}  placeholder="1234" onChange={handleUserPassword}/>
                <button className="login" disabled={isLoginDisabled} onClick={onLogin}>Log-in</button>
                <button className="logout" disabled={isLogoutDisabled} onClick={onLogout}>Log-out</button>
            </form>
        </div>
    )   


}

export default Login;