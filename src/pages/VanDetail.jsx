import React, { useState , useEffect } from "react"
import { Link , useParams } from "react-router-dom"
const VanDetail = () =>{
const params = useParams()
const [van , setVan] = useState(null)
useEffect(() => {
    fetch(`/api/vans/${params.id}`)
    .then(res=> res.json())
    .then(data => setVan(data.vans))
},[params.id])

    return(
       <div className="van-detail-container">
        {van ? (
            <div className="van-detail">
                <img src={van.imageUrl} alt={van.name} />
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
                <h2>{van.name}</h2>
                <p className="van-price"><span>${van.price}</span>/day</p>
                <p>{van.description}</p>
                <button className="link-button">Edit</button>
                <Link to="/vans" className="back-button">Back to all vans</Link>
            </div> 
        ) : (
            <h2>Loading...</h2>          
           
        )}
        </div>
    )
}

export default VanDetail