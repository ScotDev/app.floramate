import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Card() {
    const [species, setSpecies] = useState([]);

    const getSpeciesData = () => {
        try {
            axios.get('https://178.62.125.35/api/v1/posts').then(res => {
                console.log(res.data.data)
                setSpecies(res.data.data)
            })
        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        getSpeciesData()
    }, []);


    const items = species.map(item => {
        return (<div className="card" key={item._id}>
            <h1>{item.species}</h1>
            <h2>{item.indoorOutdoor}</h2>
            <p>{item.notes}</p>
            <a href="#" className="btn btn-secondary">{item.species}</a>
        </div>)
    });

    return (
        <>
            {items}
        </>
    )
}

export default Card;


/* Object.keys(species).map((item, _id) => (<div className="card" key={item._id}> */

/* species.map((item, _id) => (<div className="card" key={item._id}>
                <h1>{item.title}</h1>
                <h2>{item.species}</h2>
                <p>{item.notes}</p>
                <a href="#" className="btn btn-secondary">{item._id}</a>
            </div>)) */