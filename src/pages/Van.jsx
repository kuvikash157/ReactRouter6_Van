import React, { useState, useEffect } from 'react';
import {  Link , useSearchParams } from "react-router-dom";
import { getVans } from '../Api/api';
import Loading from '../components/Loading';

const Van = () => {

    const [vans, setVans] = useState([]);
    const [searchParam, setSearchParam] = useSearchParams({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const typeFilter = searchParam.get("type");

    useEffect(() => {
        if (typeFilter) {
            setSearchParam({ type: typeFilter });
        } else {
            setSearchParam({});
        }
    }, [typeFilter]);

    // useEffect(() => {
    //     fetch("api/vans")
    //         .then(res => res.json())
    //         .then(data => setVans(data.vans));
    // }, []);

     useEffect(() => {
        async function fetchVans() {              
            try{
            getVans().then (data => setVans(data));
                setError(null);          
            }
            catch(err){
               setError(err.message);               
            }
            finally{
                setIsLoading(false);
            }
           
        }
        fetchVans();
     
    }, []);

    const displayedVans = typeFilter ? vans.filter(van => van.type === typeFilter) : vans;

    const vanElements = displayedVans.map(van => (
        <div key={van.id} className="van-tile">
            < Link  to={`./${van.id}`} state={{ search: `?${searchParam.toString()}`, type: typeFilter }} >
                <img alt={van.name} src={van.imageUrl} />
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </ Link >
        </div>
    ))

    function genNewSearchParam(key, value) {
        const newSearchParams = new URLSearchParams(searchParam);
        if (value === null) {
            newSearchParams.delete(key);
            return newSearchParams.toString();
        } else{
            newSearchParams.set(key, value);
            return `?${newSearchParams.toString()}`;
        }      
    }

    if (error) {
        return <h2 className="error-message">Error: {error}</h2>
    }

    return (
        <div className="van-list-container">
            <h1>Explore Vans</h1>
            <div className="van-list-filter-buttons">

                <button onClick={() => setSearchParam({ type: "simple" })}   className={`van-type simple ${typeFilter === "simple" ? "selected" : ""}`}
                >Simple</button>

                <button onClick={() => setSearchParam({ type: "rugged" })}   className={`van-type rugged ${typeFilter === "rugged" ? "selected" : ""}`}
                >Rugged</button>

                <button onClick={() => setSearchParam({ type: "luxury" })}  className={`van-type luxury ${typeFilter === "luxury" ? "selected" : ""}`}
                >Luxury</button>

                {typeFilter &&
                    <button className="van-type clear-filters" onClick={() => setSearchParam({})}
                    >Clear filter</button>
                }

            </div>
            {/* Another way to do using  Link   */}
                 <br/>
            {/* <div className="van-list-filter-buttons">

                < Link  to="?type=simple" className="van-type simple"
                >Simple</ Link >
                < Link  to="?type=rugged" className="van-type rugged"
                >Rugged</ Link >
                < Link  to="?type=luxury" className="van-type luxury"
                >Luxury</ Link >

                 < Link  to={genNewSearchParam("type", 'convertible')}className="van-type rugged"
                >Convertible</ Link >

                < Link  to="." className="van-type clear-filters"
                >Clear Filters</ Link >
            </div> */}


            <div className="van-list">
                {isLoading ? <Loading/> :   vanElements    }
            </div>
        </div>
    )
}

export default Van