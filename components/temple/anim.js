import React from 'react'
import Anime from 'react-anime';

const Anim = () => (    
    <Anime easing="easeOutElastic"
    duration={1000}    
    direction="alternate"
    loop={true}
    delay={(el, index) => index * 240}
    translateX='13rem'
    scale={[.75, .9]}>
<div className="blue"/>
<div className="green"/>
<div className="red"/>
</Anime>
)

export default Anim;