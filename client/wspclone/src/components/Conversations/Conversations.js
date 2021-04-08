import React, {useState} from "react";
import "./Conversations.css";
import { useSpring, animated } from "react-spring";
import { useConversations } from "../../context/ConversationsProvider";

export default function Conversations() {
  const { conversations, selectedConversationIndex } = useConversations();
  const [isSelected, setIsSelected] = useState('')

  const props = useSpring({
    opacity: 1,
    transform: "translate(0px, 0px)",
    from: { opacity: 0, transform: "translate(-20px, 0px)" },
  });
  return (
    <animated.div style={props}>
      <div>
        {conversations.map((conversation, index) => (
          <div
            className={`${
              isSelected !== index
                ? "conversation_title"
                : "conversation_title_click"
            }`}
            key={index}
            onClick={() => {
              
              selectedConversationIndex(index)
              setIsSelected(index)
            }}
          >
            <p>{conversation.recipients.map((r) => r.name).join(",")}</p>
          </div>
        ))}
      </div>
    </animated.div>
  );
}
