import React , { useEffect, useState } from "react"
import { Link, Outlet , useOutletContext} from "react-router-dom"

const Pricing =() =>{

    const selectedVan = useOutletContext()
    console.log("selectedVan",selectedVan)
    return (
             <h3 className="host-van-price">${selectedVan.price}<span>/day</span></h3>
    )
}

export default Pricing