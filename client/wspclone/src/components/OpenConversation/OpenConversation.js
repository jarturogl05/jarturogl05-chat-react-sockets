import React,{useState} from 'react'
import {useConversations} from '../../context/ConversationsProvider'
import './OpenConversation.css'

export default function OpenConversation() {
  const [text, setText] = useState('');
  const  {sendMessage, selectedConversation} = useConversations();

  function handleSubmit(e){
    e.preventDefault();
    sendMessage(selectedConversation.recipients.map(r => r.id), text
    
    )
    //sendText('');
  }

  return (
    <div className='conversation-content'>
      <div className="chat">
        
      </div>
      <div className='form-area'>
        <form onSubmit={handleSubmit}>
          <textarea className='text-area-chat' onChange={e => setText(e.target.value)}></textarea>
          <button className='button-chat' type='submit'>Send</button>
        </form>
      </div>
    </div>
  );
}
