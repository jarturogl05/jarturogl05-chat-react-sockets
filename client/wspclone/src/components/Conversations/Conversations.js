import React from 'react'
import './Conversations.css'
import { useSpring, animated } from 'react-spring'


export default function Conversations() {
    //const props = useSpring({opacity: 1, from: {opacity: 0}})
    const props = useSpring({
        opacity: 1,
        transform: "translate(0px, 0px)",
        from: { opacity: 0, transform: "translate(-20px, 0px)" }
      });
    return (
        <animated.div style={props}>

        <div className='conversation-container'>
            <h1>chats</h1>            
            <h1>chats</h1>
            <h1>chats</h1>
            <h1>chats</h1>
            <h1>chats</h1>
            <h1>chats</h1>
            <h1>chats</h1>
            <h1>chats</h1>
            <h1>chats</h1>
            <h1>chats</h1>
            <h1>chats</h1>
            <h1>chats</h1>
            <h1>chats</h1>
            <h1>chats</h1>
            <h1>chats</h1>
            <h1>chats</h1>
            <h1>chats</h1>
            <h1>chats</h1>
            <h1>chats</h1>
            <h1>chats</h1>
            <h1>chats</h1>
            <h1>chats</h1>
            <h1>chats</h1>
            <h1>chats</h1>
            <h1>chats</h1>
            <h1>chats</h1>
            <h1>chats</h1>

        </div>
        </animated.div>

    )
}
