import React , { useEffect, useState } from "react"
import { Link, Outlet } from "react-router-dom"

const Dashboard =() =>{
    return (
        <div>
            <h1>Dashboard</h1>
             <Link to="/vans">Vans</Link>    
        </div>
    )
}

export default Dashboard