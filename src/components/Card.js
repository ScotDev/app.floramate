import React, { useState, useEffect } from 'react';

function Card() {
    const [state, setState] = useState([])

    useEffect(() => {
        fetch("https://invegtory.info/api/v1/posts").then(response => response.json())
            .then(response => {
                setState(response)
            }, [])
    });

    return (
        <>
            {
                state.map(data => <div className="card" key={data.id}>
                    <h1>{data.title}</h1>
                    <h2>{data.species}</h2>
                    <p>{data.notes}</p>
                    {/* <a href="#" className="btn btn-secondary">Profile</a> */}
                </div>)
            }
        </>
    )
}

export default Card;
