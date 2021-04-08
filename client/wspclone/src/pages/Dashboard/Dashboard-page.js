import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import OpenConversation from '../../components/OpenConversation/OpenConversation'
import './Dashboard.css'
import { useConversations } from '../../context/ConversationsProvider'

export default function Dashboard({id}) {
    const {selectedConversation} = useConversations()

    return (
        <div className='dashboard-container'>
            <Sidebar id={id}/>
            <div className='contenido'>
                {console.log(selectedConversation)}
                {selectedConversation && <OpenConversation/>}
            </div>
        </div>
    )
}
