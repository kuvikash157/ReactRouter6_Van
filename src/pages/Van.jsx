import React, { useState, useEffect } from 'react';
import { Link, useSearchParams, useLoaderData } from "react-router-dom";
import { getVans } from '../Api/api';
import Loading from '../components/Loading';

export async function loader() {
    const data = await getVans();
    return data;
}
const Van = () => {

    //const [vans, setVans] = useState([]);
    const vans = useLoaderData();
    const [searchParam, setSearchParam] = useSearchParams({});
    const typeFilter = searchParam.get("type");

    useEffect(() => {
        if (typeFilter) {
            setSearchParam({ type: typeFilter });
        } else {
            setSearchParam({});
        }
    }, [typeFilter]);

    const displayedVans = typeFilter ? vans.filter(van => van.type === typeFilter) : vans;

    const vanElements = displayedVans.map(van => (
        <div key={van.id} className="van-tile">
            < Link to={`./${van.id}`} state={{ search: `?${searchParam.toString()}`, type: typeFilter }} >
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
        } else {
            newSearchParams.set(key, value);
            return `?${newSearchParams.toString()}`;
        }
    }

    return (
        <div className="van-list-container">
            <h1>Explore Vans</h1>
            <div className="van-list-filter-buttons">

                <button onClick={() => setSearchParam({ type: "simple" })} className={`van-type simple ${typeFilter === "simple" ? "selected" : ""}`}
                >Simple</button>

                <button onClick={() => setSearchParam({ type: "rugged" })} className={`van-type rugged ${typeFilter === "rugged" ? "selected" : ""}`}
                >Rugged</button>

                <button onClick={() => setSearchParam({ type: "luxury" })} className={`van-type luxury ${typeFilter === "luxury" ? "selected" : ""}`}
                >Luxury</button>

                {typeFilter &&
                    <button className="van-type clear-filters" onClick={() => setSearchParam({})}
                    >Clear filter</button>
                }

            </div>
            <br />

            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}

export default Van