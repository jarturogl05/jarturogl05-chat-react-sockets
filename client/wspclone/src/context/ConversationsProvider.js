import React, {useContext, useState} from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import {useContacts} from './ContactsProvider'

const ConversationsContext = React.createContext();

export function useConversations(){

    return useContext(ConversationsContext);
}

export function ConversationsProvider({id, children}) {

    const [conversations, setConversations] = useLocalStorage('conversations', []);
    const [selectedConversationIndex, setSelectedConversationIndex] = useState('');
    const {contacts} = useContacts();

    function createConversation(recipients){
        setConversations(prevConversations => {
            return [...prevConversations, {recipients, messages: [] }]
        });
    }

    function addMessageToConversation({ recipients, text, sender}){
        setConversations(prevConversations => {
            let madeChange = false;
            const newMessage = {sender, text}

            const NewConversations = prevConversations.map(conversation =>{
                if (arrayEquality(conversation.recipients, recipients)){
                    madeChange = true

                    return {
                        ...conversation,
                        messages: [...conversation.messages, newMessage]
                    }
                }
                return conversation

            })

            if(madeChange){
                return NewConversations
            }else{
                return [...prevConversations, {recipients, messages: [newMessage]}];
            }
        })

    }

    function sendMessage(recipients, text){
        addMessageToConversation({recipients, text, sender:id})
    }

    const formattedConversations = conversations.map((conversation, index) => {
      const recipients = conversation.recipients.map((recipient) => {
        const contact = contacts.find((contact) => {
          return contact.id === recipient;
        });

        const name = (contact && contact.name) || recipient;
        return { id: recipient, name };
      });

      const messages = conversation.messages.map(message => {
        const contact = contacts.find((contact) => {
            return contact.id === message.sender;
          });
  
          const name = (contact && contact.name) || message.sender;
          const fromMe = id === message.sender
          return {...message, senderName:name, fromMe}
      })

      const selected = index === selectedConversationIndex;
      return { ...conversation, messages, recipients, selected };
    });



    const value = {
        conversations: formattedConversations,
        selectedConversation: formattedConversations[selectedConversationIndex],
        selectedConversationIndex: setSelectedConversationIndex,
        createConversation,
        sendMessage
    }
    return (
        <div>
            <ConversationsContext.Provider value={value}>
                {children}
            </ConversationsContext.Provider>
        </div>
    )
}


function arrayEquality(a, b){
    if(a.length !== b.length) return false

    a.sort();
    b.sort();

    return a.every((element, index) =>{
        return element === b[index];
    })
}