import React from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import './App.css';
import Dashboard from './pages/Dashboard/Dashboard-page';
import Login from './pages/Login/Login.js'

function App() {
  const [id, setId] = useLocalStorage('id');
  return (
    id ? <Dashboard id={id}/> : <Login onIdSubmit={setId}/>
  )
}

export default App;
