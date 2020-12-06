import React, { useState } from 'react';
import SessionsWrapper from '../sessions/SessionsWrapper';

function Header() {

    const [showOverlay, toggleOverlay] = useState(false);
    const [formIndex, setFormIndex] = useState(0);

    const openOverlay = (index) => {
        setFormIndex(index)
        toggleOverlay(true)
    }

    const closeOverlay = () => {
        toggleOverlay(false)
    }

    return (
        <>
            <nav className="justify-between bg-white px-6 py-1 absolute top-0 w-screen flex shadow items-center">
                <div className="inline text-dark mr-6 text-3xl font-light tracking-tight">
                    <h1 className="inline">BUILD<img src="/wrench.svg" width="10px" alt="Wrench" className="inline mx-2" />LOG</h1>
                </div>
                <div className="float-right">
                    <button className="button font-bold mr-2 px-10 py-1 rounded-lg text-lg bg-transparent 
                                   transition-all duration-300 border border-blue-800 hover:border-green-500 
                                   hover:bg-green-500 text-blue-700 hover:text-white"
                        onClick={() => openOverlay(0)}>
                        Log In
                </button>
                    <button className="button font-bold px-10 py-1 rounded-lg text-lg hover:bg-blue-700 bg-blue-500 
                                   transition-all duration-300 text-white border border-transparent"
                        onClick={() => openOverlay(1)}>
                        Sign up
                </button>
                </div>
            </nav>
            <SessionsWrapper show={showOverlay} handleClose={closeOverlay} index={formIndex} />
        </>
    );
}
export default Header