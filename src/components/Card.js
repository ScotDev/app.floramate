// import React, { useState } from 'react';
// // Uninstall axios
// // import axios from 'axios';

// function Card() {
//     // const [species, setSpecies] = useState([]);

//     // const getSpeciesData = () => {
//     //     try {
//     //         axios.get('https://invegtory.info/api/v1/species').then(res => {
//     //             console.log(res.data.data)
//     //             setSpecies(res.data.data)
//     //         })
//     //     } catch (error) {
//     //         console.log(error)
//     //     }

//     // }

//     // useEffect(() => {
//     //     getSpeciesData()
//     // }, []);


//     const items = species.map(item => {
//         return (<div className="card" key={item._id}>
//             <img className="card-img" src={item.photo} alt=""></img>
//             <h1 className="card-title">{item.name_common}</h1>
//             <h2 className="card-sub-title">{item.name_latin}</h2>
//             <p className="card-text">{item.range}</p>
//             <a href="https://www.google.com/" className="btn btn-secondary">{item.slug}</a>
//         </div>)
//     });

//     return (
//         <>
//             {items}
//         </>
//     )
// }

// export default Card;