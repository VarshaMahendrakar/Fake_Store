import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"

function Login(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try{
            const res = await fetch("http://localhost:8000/api/login",{
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            });
            const data = await res.json();

            if(!res.ok){
                setError(data.error || "login failed");
                return;
            }
            localStorage.setItem("isLoggedIn","true");
            localStorage.setItem("username", data.username || username);
            navigate("/");
        } catch(err){
            setError("something went wrong");
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                {error && <div style={{color: 'red'}}>{error}</div>}
                <input
                    type="text"
                    placeholder='username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login