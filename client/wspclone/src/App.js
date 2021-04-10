import React from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import './App.css';
import Dashboard from './pages/Dashboard/Dashboard-page';
import Login from './pages/Login/Login.js'
import { ContactsProvider } from './context/ContactsProvider';
import {ConversationsProvider} from "./context/ConversationsProvider";

function App() {
  const [id, setId] = useLocalStorage('id');
  
  const dashboard = (
    <ContactsProvider>
      <ConversationsProvider id={id}>
        <Dashboard id={id}/>
      </ConversationsProvider>
    </ContactsProvider>
  )

  return (
    id ? dashboard : <Login onIdSubmit={setId}/>
  )
}

export default App;
