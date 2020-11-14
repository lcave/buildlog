import React, { useState } from 'react';
import axios from 'axios';
import { login } from '../utils/auth/login';
import { API_URL } from '../utils/env';
import loading from '../assets/images/loading.gif';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        var btn = document.getElementById("submit-btn")
        btn!.style.opacity = "0";
        btn!.style.display = "none";
        var wheel = document.getElementById("loading-wheel");
        wheel!.style.display = "inherit";
        wheel!.style.opacity = "1";
        axios.post(API_URL + "/login", {
            "email": email,
            "password": password
        }).then(function (response) {
            login(response.data.token)
        }).catch(function () {
            wheel!.style.opacity = "0";
            wheel!.style.display = "none";
            document.getElementById('error-wrapper')!.style.opacity = "1";
            btn!.style.display = "inherit";
            btn!.style.opacity = "1";
        })
    }

    return (
        <div className="absolute w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
            <div className="p-10 bg-white rounded-lg text-center shadow-lg">
                <h1 className="text-3xl mb-4">Login</h1>
                <div className="opacity-0 transition-all duration-300" id="error-wrapper">
                    <span className="bg-red-300 p-2 rounded-lg">Invalid email or password</span>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col text-left my-4">
                    <label className="text-blue-700 text-lg ml-2" >Email</label>
                    <input className="mb-4 bg-gray-200 p-2 rounded-lg outline-none border-transparent border-2 focus:border-blue-700" autoFocus type="text" name="email" onChange={e => setEmail(e.target.value)} />
                    <label className="text-blue-700 text-lg ml-2">Password</label>
                    <input className="mb-4 bg-gray-200 p-2 rounded-lg outline-none border-transparent border-2 focus:border-blue-700" type="text" name="password" onChange={e => setPassword(e.target.value)} />
                    <div className="full-width mt-4 flex justify-center" style={{ height: "45px" }}>
                        <input type="submit" id="submit-btn" className="p-2 rounded-lg text-lg hover:bg-green-400 bg-green-200 transition-all duration-300 outline-none border-transparent border focus:border-blue-700" />
                        <img src={loading} id="loading-wheel" className="hidden opacity-0 transition-all duration-200" style={{ height: "45px"}} alt="loading wheel" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login