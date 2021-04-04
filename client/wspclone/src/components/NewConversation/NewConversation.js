import React from "react";
import "./NewConversation.css";
import { useContacts } from "../../context/ContactsProvider";

export default function NewConversation() {
  const { contacts } = useContacts();
  function handleSumbit(e) {
    e.preventDefault();
  }

  return (
    <div>
      <h2>Add new contact</h2>
      <form className="newConversation_form" onSubmit={handleSumbit}>
        {contacts.map((contact) => (
          <div>
            <input type="checkbox" key={contact.id} id={contact.id}></input>
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
