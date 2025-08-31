import React, { useState, useEffect } from "react"
import { Link, useParams, Outlet } from "react-router-dom"
import HostVanDetailLayout from "../../components/HostVanDetailLayout"


const HostVanDetail = () => {

    const params = useParams()
    const [currentVan, setVan] = useState(null)

    useEffect(() => {
        fetch(`/api/host/van/${params.id}`)
            .then(res => res.json())
            .then(data => { console.log("data", data?.vans[0]); return setVan(data.vans[0]) })
    }, [params.id])

    return (
        <div className="van-detail-container">
            {currentVan ? (
                <>
                    {/* <Link to="/host/vans" className="back-button">&larr; <span>Back to all vans</span> </Link> */}
                    <Link to=".." relative="path" className="back-button">&larr; <span>Back to all vans</span> </Link>

                    <div className="van-detail">
                        <img src={currentVan.imageUrl} alt={currentVan.name} />
                        <i className={`van-type ${currentVan.type} selected`}>{currentVan.type}</i>
                        <HostVanDetailLayout />
                         <Outlet context={currentVan} />
                        <h2>{currentVan.name}</h2>
                        <p className="van-price"><span>${currentVan.price}</span>/day</p>
                        <p>{currentVan.description}</p>
                        <button className="link-button">Edit</button>
                        <Link to="/host/vans" className="back-button">&larr; <span>Back to all vans</span> </Link>
                    </div>
                </>
            )
                : (<h2>Loading...</h2>)
            }
        </div>
    )
}



export default HostVanDetail