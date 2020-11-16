import React, { useRef, useState } from 'react';
import { animated, useTransition } from "react-spring";
import axios from 'axios';
import { login } from '../utils/auth';
import { API_URL } from '../utils/env';
import LoadingButton from '../app/LoadingButton';
import useComponentSize from '@rehooks/component-size';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);

    const [submit, toggleSubmit] = useState(false);
    const [error, toggleError] = useState(false);
    const ref = useRef(null);
    const { height } = useComponentSize(ref);

    const expand = useTransition(error, null, {
        from: { height: 0 },
        enter: { height },
        leave: { height: 0 },
        update: { height }
    });

    const handleSubmit = e => {
        e.preventDefault();
        if (error) { toggleError(false) };
        toggleSubmit(true);
        axios.post(API_URL + "/users/sign_in", {
            "email": email,
            "password": password
        }).then(function (response) {
            login(response.headers["access-token"], response.headers["expire-at"], response.headers["refresh-token"]);
        }).catch(function () {
            setTimeout(() => {
                toggleError(true);
            }, 400);
            toggleSubmit(false);
        })
    }

    return (
        <div className="absolute w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
            <div className="p-10 bg-white rounded-lg text-center shadow-lg">
                <h1 className="text-3xl">Login</h1>
                {expand.map(
                    ({ item, props, key }) =>
                        item && (
                            <animated.div className="bg-red-300 rounded-lg flex justify-center items-center" key={key} id="error-wrapper" style={{
                                ...props,
                                overflow: "hidden",
                                position: "relative"
                            }}>
                                <span ref={ref} className="p-2" >Invalid email or password</span>
                            </animated.div>
                        ))}
                <form onSubmit={handleSubmit} id="login-form" className="flex flex-col text-left my-4">
                    <label className="text-blue-700 text-lg ml-2" >Email</label>
                    <input className="mb-4 bg-gray-200 p-2 rounded-lg outline-none border-transparent border-2 focus:border-blue-700" autoFocus type="text" name="email" onChange={e => setEmail(e.target.value)} />
                    <label className="text-blue-700 text-lg ml-2">Password</label>
                    <input className="mb-4 bg-gray-200 p-2 rounded-lg outline-none border-transparent border-2 focus:border-blue-700" type="text" name="password" onChange={e => setPassword(e.target.value)} />
                    <div className="flex mb-6 ml-2">
                        <label className="block">
                            <input className="mr-2 leading-tight" type="checkbox" onChange={e => setRemember(!remember)}/>
                            <span className="text-sm">
                                Stay signed in
                                </span>
                        </label>
                    </div>
                    <LoadingButton className="button p-2 rounded-lg text-lg hover:bg-green-400 bg-green-200 transition-all duration-300 outline-none border-transparent border focus:border-blue-700" type="submit" isLoading={submit}> Submit </LoadingButton>
                </form>
            </div>
        </div>
    )
}

export default Login