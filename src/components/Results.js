import React from 'react';
// import { ResultsCard } from './ui-styled-components/Card';
import Card from './Card';
import { ResultsGrid } from './ui-styled-components/Grid';

// import Navbar from './Navbar';
// import Footer from './Footer';



export default function Results(props) {
    const speciesData = props.speciesData.speciesData;



    return (
        <>

            <ResultsGrid>
                <Card speciesData={speciesData} />

            </ResultsGrid>

        </>
    )
}
