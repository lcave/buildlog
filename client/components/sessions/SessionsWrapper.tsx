import React, { useEffect, useState } from 'react';
import { animated, useTransition } from "react-spring";
import FormWrapper from './FormWrapper';
import Login from './Login';

function SessionsWrapper({ show = false, showForm, setShowForm, handleClose, ...props }) {

    const expand = useTransition(showForm, null, {
        from: { position: 'absolute', overflow: 'hidden', maxHeight: 0 },
        enter: { maxHeight: 10000 },
        leave: { maxHeight: 0 },
        update: { maxHeight: 10000 }
    })

    const fade = useTransition(show, null, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    })

    const handleCloseForm = () => {
        setShowForm(false);
    }

    return (<>
        {fade.map(({ item, key, props }) =>
            item && <animated.div key={key} style={props}>
                <div className="w-screen h-screen absolute flex justify-center items-center bg-black bg-opacity-50 top-0 left-0">
                    <FormWrapper handleClose={handleCloseForm} />
                </div>
            </animated.div>
        )
        }</>
    )
}

export default SessionsWrapper