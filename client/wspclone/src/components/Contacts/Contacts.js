import React,{useState} from 'react'
import './Contacts.css'
import { useSpring, animated } from 'react-spring'


export default function Contacts() {
    //const props = useSpring({opacity: 1, from: {opacity: 0}})

    const props = useSpring({
        opacity: 1,
        transform: "translate(0px, 0px)",
        from: { opacity: 0, transform: "translate(-20px, 0px)" }
      });
    return (
        <animated.div style={props}>
        <div >
            <h1>Contacts</h1>            
            <h1>Contacts</h1>
            <h1>Contacts</h1>
            <h1>Contacts</h1>
            <h1>Contacts</h1>
            <h1>Contacts</h1>
            <h1>Contacts</h1>
            <h1>Contacts</h1>
            <h1>Contacts</h1>
            <h1>Contacts</h1>
            <h1>Contacts</h1>
            <h1>Contacts</h1>
            <h1>Contacts</h1>
            <h1>Contacts</h1>
            <h1>Contacts</h1>
            <h1>Contacts</h1>
            <h1>Contacts</h1>
            <h1>Contacts</h1>
            <h1>Contacts</h1>
            <h1>Contacts</h1>

        </div>
        </animated.div>

    )
}
