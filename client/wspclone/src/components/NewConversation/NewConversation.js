import React,{useState} from "react";
import "./NewConversation.css";
import { useContacts } from "../../context/ContactsProvider";
import {useConversations} from "../../context/ConversationsProvider";

export default function NewConversation({closeModal}) {
  const { contacts } = useContacts();
  const {createConversation} = useConversations();
  const [selectedContacts, setselectedContacts] = useState([]);

  function handleSumbit(e) {
    e.preventDefault();

    createConversation(setselectedContacts);
    closeModal();

  }

  function handleChecboxChange(contactId) {
    // setselectedContacts((prevSelectedContactsID) => {
    //   if (prevSelectedContactsID.includes(contactId)) {
    //     return prevSelectedContactsID.filter((prevId) => {
    //       return contactId !== prevId;
    //     });
    //   } else {
    //     return [...prevSelectedContactsID, contactId];
    //   }
    // });

    setselectedContacts(contactId);
  }

  return (
    <div>
      <h2>Add new contact</h2>
      <form className="newConversation_form" onSubmit={handleSumbit}>
        {contacts.map((contact) => (
          <div key={contact.id}>
            <input
              value={selectedContacts.includes(contact.id)}
              type="checkbox"
              id={contact.id}
              onChange={() => handleChecboxChange(contact.id)}
            ></input>
            <label htmlFor={contact.id}>{contact.name}</label>
          </div>
        ))}
        <button className="NewConversation_button" type="submit">
          ADD
        </button>
      </form>
    </div>
  );
}
