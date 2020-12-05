import React from 'react';
import { animated, useTransition } from "react-spring";
import FormWrapper from './FormWrapper';

function SessionsWrapper({ show = false, handleClose, index, ...props }) {

    const fade = useTransition(show, null, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    })

    return (<>
        {fade.map(({ item, key, props }) =>
            item && <animated.div key={key} style={props}>
                <div className="w-screen h-screen absolute flex justify-center items-center bg-black bg-opacity-50 top-0 left-0">
                    <FormWrapper handleClose={handleClose} index={index} />
                </div>
            </animated.div>
        )
        }</>
    )
}

export default SessionsWrapper