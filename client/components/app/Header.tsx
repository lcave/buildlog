import React, { useState } from 'react';
import { animated, useTransition } from 'react-spring';
import Login from '../sessions/Login';

function Header() {

    const [showLogin, toggleLogin] = useState(false);
    const [showSignup, toggleSignup] = useState(false);

    const handleLoginToggle = () => {
        toggleLogin(!showLogin)
    }

    var login = null;

    return (
        <nav className="justify-between flex-wrap bg-white px-6 py-3 absolute top-0 w-screen">
            <div className="inline text-dark mr-6">
                <span className="font-semibold text-xl tracking-tight">Buildlog</span>
            </div>
            <div className="float-right">
                <button className="button font-bold mr-2 px-10 py-1 rounded-lg text-lg bg-transparent 
                                   transition-all duration-300 border border-blue-800 hover:border-green-500 
                                   hover:bg-green-500 text-blue-700 hover:text-white"
                    onClick={() => handleLoginToggle()}>
                    Login
                </button>
                <button className="button font-bold px-10 py-1 rounded-lg text-lg hover:bg-blue-700 bg-blue-500 transition-all duration-300 text-white border border-transparent">
                    Sign up
                </button>
            </div>
            <Login show={showLogin} handleClose={handleLoginToggle} />
        </nav>
    );
}
export default Header