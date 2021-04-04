import React, {useState} from 'react'
import './Sidebar.css'
import Conversations from '../Conversations/Conversations';
import Contacts from '../Contacts/Contacts';
import NewContact from '../NewContact/NewContact';
import NewConversation from '../NewConversation/NewConversation'
import ReactModal from 'react-modal';


const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : '70%',
      bottom                : '-10%',
      marginRight           : '-45%',
      transform             : 'translate(-50%, -50%)'
    }
  };

export default function Sidebar( {id}) {

    const [selection, setselection] = useState('chats');
    const [modalStatus, setModalStatus] = useState(false)
    const ConversationsIsOpen = selection === 'chats'; //true- false

    function closeModal(){

        setModalStatus(false);
    }

    function handleContactClick (){
        setselection('contacts')
    }
    function hanndleChatsClick() {
        setselection('chats')
    }

    function selectionContent() {
      if (selection === "chats") {
        return <Conversations />;
      } else {
        return <Contacts />;
      }
    }

    function selectionContentModal(){
        if(selection === 'chats'){
            return < NewConversation/>
        }
        else{
            return <NewContact/>
        }
    }

    return (
        <div className='Sidebar-container'>
            <div className='sidebar-buttons'>
                <button onClick={hanndleChatsClick}>chats</button>
                <button onClick={handleContactClick}>contacto</button>
            </div>
            <div className='sidebar-content'>
             {selectionContent()}
            </div>
            <div className='Sidebar-Info'>
                your id: <span>{id}</span>
                <button onClick={() => setModalStatus(true)}>New {ConversationsIsOpen ? 'Conversation' : 'Contact'}</button>

            </div>
            <ReactModal
            closeTimeoutMS={200}
            isOpen={modalStatus}
            onRequestClose={closeModal}
            style={customStyles}>
                <button onClick={closeModal}>Close</button>
                {selectionContentModal()}

            </ReactModal>
        </div>
    )
}
