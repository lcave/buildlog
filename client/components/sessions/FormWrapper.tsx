import React, { useState } from 'react';
import { animated, useSpring } from 'react-spring';
import Login from './Login';
import SignUp from './SignUp';

function FormWrapper({ show = false, handleClose, ...props }) {

    const [flipped, set] = useState(false)
    const { transform, opacity, zIndex } = useSpring({
        opacity: flipped ? 1 : 0,
        zIndex: flipped? 2 : 0,
        transform: `perspective(00px) rotateY(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 }
    })

    const swapForm = () => {
        set(!flipped);
    }

    return (
        <>
            <animated.div className="absolute" style={{ opacity: opacity.interpolate(o => 1 - o), transform, zIndex: 1 }}>
                < Login handleClose={handleClose} swapForm={swapForm} />
            </animated.div>
            <animated.div style={{ opacity, transform: transform.interpolate(t => `${t} rotateY(180deg)`), zIndex }}>
                < SignUp handleClose={handleClose} swapForm={swapForm} />
            </animated.div>
        </>

    )
}

export default FormWrapper