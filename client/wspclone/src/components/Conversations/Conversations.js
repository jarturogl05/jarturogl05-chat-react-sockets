import React from "react";
import "./Conversations.css";
import { useSpring, animated } from "react-spring";
import { useConversations } from '../../context/ConversationsProvider'

export default function Conversations() {

    const {conversations} = useConversations();

  //const props = useSpring({opacity: 1, from: {opacity: 0}})
  const props = useSpring({
    opacity: 1,
    transform: "translate(0px, 0px)",
    from: { opacity: 0, transform: "translate(-20px, 0px)" },
  });
  return (
    <animated.div style={props}>
      <div>
        {conversations.map((conversation, index) => (
          <div className='conversation_title' key={index}>
            <h1>{conversation.recipients.map(r => r.name).join(',')}</h1>
            <hr></hr>
          </div>
        ))}
      </div>
    </animated.div>
  );
}
