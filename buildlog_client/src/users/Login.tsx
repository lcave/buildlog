import React, { useState } from 'react';
import axios from 'axios';
import { login } from '../utils/auth/login';
import { API_URL } from '../utils/env';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(<span></span>);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        axios.post(API_URL + "/login", {
            "email": email,
            "password": password
        }).then(function (response) {
            login(response.data.token)
        }).catch(function () {
            setError(<span>Invalid email or password</span>);
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {error}
                <label className="text-white" >Email</label>
                <input type="text" name="email" onChange={e => setEmail(e.target.value)} />
                <label>Password</label>
                <input type="text" name="password" onChange={e => setPassword(e.target.value)} />
                <input type="submit" />
            </form>
        </div>
    )
}

export default Login