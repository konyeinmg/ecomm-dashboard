import React, { useState,useEffect } from 'react';
import Header from './Header';
import { useNavigate } from 'react-router-dom';

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            navigate("/add");
        }
    }, []);

    const login = async () => {
        let item = {email, password};
        let result = await fetch("http://127.0.0.1:8000/api/login", {
            method: 'POST',
            headers: {
                "Content-type":'application/json',
                "Accept":'application/json'
            },
            body: JSON.stringify(item)
        })
        result = await result.json();
        localStorage.setItem('user-info', JSON.stringify(result));
        navigate("/add");
    }

    return (
        <div>
            <Header />
            <h1>Login</h1>
            <div className="col-sm-6 offset-sm-3">
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" className="form-control" />
                <br />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" className="form-control" />
                <br />
                <button onClick={login} className="btn btn-primary">Login</button>
            </div>
        </div>
    )
}

export default Login;