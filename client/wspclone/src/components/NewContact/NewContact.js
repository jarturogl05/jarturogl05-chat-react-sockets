import React, { useRef } from "react";
import "./NewContact.css";

export default function NewContact({closeModal}) {
  const idRef = useRef();
  const nameRef = useRef();

    function handleSumbit(e){
        e.preventDefault();

        closeModal();
    }

  return (
    <div>
      <h2>Add new contact</h2>

      <form className="newContact_form" onSubmit={handleSumbit}>
        <label htmlFor="newcontact_id">Id</label>
        <input
          className=""
          id="newcontact_id"
          type="text"
          required
          ref={idRef}
        ></input>

        <label htmlFor="newcontact_name">Name</label>
        <input
          className=""
          id="newcontact_name"
          type="text"
          required
          ref={nameRef}
        ></input>

        <button className="NewContact_button" type="submit">
          ADD
        </button>
      </form>
    </div>
  );
}
