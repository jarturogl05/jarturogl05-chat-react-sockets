import React from 'react'
import './Contacts.css'
import { useSpring, animated } from 'react-spring';
import { useContacts } from '../../context/ContactsProvider';


export default function Contacts() {
    //const props = useSpring({opacity: 1, from: {opacity: 0}})
    const {contacts} = useContacts();


    const props = useSpring({
        opacity: 1,
        transform: "translate(0px, 0px)",
        from: { opacity: 0, transform: "translate(-20px, 0px)" }
      });
    return (
        <animated.div style={props}>
        <div >
            {
                contacts.map((contact) =>(
                    <div key={contact.id} className='contact_title'>
                         <p>{contact.name}</p>
                    </div>
                    
                ))
        
            }
        

        </div>
        </animated.div>

    )
}
