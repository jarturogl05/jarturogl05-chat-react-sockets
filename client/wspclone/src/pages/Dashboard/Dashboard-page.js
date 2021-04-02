import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import './Dashboard.css'

export default function Dashboard({id}) {
    return (
        <div className='dashboard-container'>
            <Sidebar id={id}/>
            <div className='contenido'>
            </div>
        </div>
    )
}
