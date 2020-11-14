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
            setError(<span className="bg-red-300 p-2 rounded-lg">Invalid email or password</span>);
        })
    }

    return (
        <div className="absolute w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
            <div className="p-10 bg-white rounded-lg text-center shadow-lg">
                <h1 className="text-3xl mb-4">Login</h1>
                {error}
                <form onSubmit={handleSubmit} className="flex flex-col text-left my-4">
                    <label className="text-blue-700 text-lg ml-2" >Email</label>
                    <input className="mb-4 bg-gray-200 p-2 rounded-lg outline-none border-transparent border-2 focus:border-blue-700" autoFocus type="text" name="email" onChange={e => setEmail(e.target.value)} />
                    <label className="text-blue-700 text-lg ml-2">Password</label>
                    <input className="mb-4 bg-gray-200 p-2 rounded-lg outline-none border-transparent border-2 focus:border-blue-700" type="text" name="password" onChange={e => setPassword(e.target.value)} />
                    <input type="submit" className="mt-4 p-2 rounded-lg mx-20 text-lg hover:bg-green-400 bg-green-200 transition-colors duration-200 outline-none border-transparent border focus:border-blue-700" />
                </form>
            </div>
        </div>
    )
}

export default Login