import React from 'react'
import './OpenConversation.css'

export default function OpenConversation() {
  return (
    <div className='conversation-content'>
      <div className="chat">
      </div>
      <div className='form-area'>
        <form>
          <textarea className='text-area-chat'></textarea>
          <button className='button-chat'>Send</button>
        </form>
      </div>
    </div>
  );
}
