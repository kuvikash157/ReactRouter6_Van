import React, { useState , useEffect } from "react"
import { Link , useParams, useLocation } from "react-router-dom"
import Loading from "../components/Loading"
const VanDetail = () =>{

const params = useParams()
const [van , setVan] = useState(null)
const location = useLocation();
const search = location.state?.search || "";
const type = location.state?.type || "all";

console.log(location);

useEffect(() => {
    fetch(`/api/vans/${params.id}`)
    .then(res=> res.json())
    .then(data => setVan(data.vans))
},[params.id])


    return(
        
       <div className="van-detail-container">
        {/* <Link to=".." relative="path" className="back-button">&larr; <span>Back to all vans</span> </Link> */}
         <Link to={`..${search}` } relative="path" className="back-button">&larr; <span>{ `Back to ${type} vans`}</span> </Link>
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
            <Loading />
            // <h2>Loading...</h2>          
           
        )}
        </div>
    )
}

export default VanDetail