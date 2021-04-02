import React, { useRef } from "react";
import "./Login.css";
import {v4 as uuidV4} from 'uuid'


export default function Login({onIdSubmit}) {
  const idRef = useRef();

  function handleSumbit(e){
      e.preventDefault();
      onIdSubmit(idRef.current.value);
  }

  function createNewID(){
      onIdSubmit(uuidV4());
  }

  return (
    <div className="login-container">
      <form onSubmit={handleSumbit} className="login-form">
        <p>
          <label className="login-form_label" htmlFor="createid">
            Enter your id
          </label>
          <input
            className="login-form_input"
            id="createid"
            type="text"
            required
            ref={idRef}
          ></input>
        </p>
        <div className='button-container'>
        <button className='login-button' type='submit'>Login</button>
        <button onClick={createNewID} type='button' className='new-button' >Create new id</button>
        </div>
      </form>
    </div>
  );
}
