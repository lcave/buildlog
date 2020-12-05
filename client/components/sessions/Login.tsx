import React, { useEffect, useRef, useState } from 'react';
import { animated, useTransition, useSpring } from "react-spring";
import axios from 'axios';
import { login } from '../utils/auth';
import { API_URL } from '../utils/env';
import LoadingButton from '../app/LoadingButton';
import useComponentSize from '@rehooks/component-size';
import Cross from '../app/icons/Cross';

function Login({ show = false, handleClose, swapForm, ...props }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);

    const [submit, toggleSubmit] = useState(false);
    const [error, toggleError] = useState(false);
    const ref = useRef(null);
    const { height } = useComponentSize(ref);

    const inputClasses = "transition-all duration-200 mb-4 bg-gray-200 p-2 rounded-lg outline-none border-transparent border-2 focus:border-blue-700";

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
        <div className="p-10 bg-white rounded-lg text-center shadow-lg relative">
            <Cross className="transition-all absolute top-20 right-20 duration-200 
                            text-gray-500 hover:text-red-700 cursor-pointer"
                onClick={() => handleClose()} />
            <h1 className="text-3xl">Log In</h1>
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
                <input className={inputClasses} autoFocus type="text" name="email" onChange={e => setEmail(e.target.value)} />
                <label className="text-blue-700 text-lg ml-2">Password</label>
                <input className={inputClasses} type="text" name="password" onChange={e => setPassword(e.target.value)} />
                <div className="flex items-center mb-6 ml-2">
                    <input className="mr-2 leading-tight" type="checkbox" onChange={e => setRemember(!remember)} />
                    <label className="block">
                        <span className="text-sm">
                            Stay signed in
                            </span>
                    </label>
                </div>
                <LoadingButton className="button p-2 rounded-lg text-lg hover:bg-green-400 
                        bg-green-200 transition-all duration-300 outline-none 
                        border-transparent border focus:border-blue-700"
                    type="submit" isLoading={submit}> Submit </LoadingButton>
            </form>
            <a className="text-blue-700 cursor-pointer hover:underline" onClick={() => swapForm()}>New to Buildlog? <strong>SIGN UP</strong></a>
        </div>
    )
}

export default Login