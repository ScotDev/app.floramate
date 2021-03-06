import React from 'react';
import { useQuery } from 'react-query';
import Card from './Card';
import { ResultsGrid } from './ui-styled-components/Grid';
import Spinner from '../components/utils/Spinner';


// CARD SHOULD BE A DUMB COMPONENT AND LOGIC ELEVATED TO THIS COMPONENT

const fetchData = async () => {
    // const res = await fetch("http://192.168.167.192:1337/profiles");
    return res.json();
}


export default function Results(props) {
    const { data, status } = useQuery('species', fetchData);

    if (status === "loading") {
        return <Spinner />
    }


    console.log("Data :", data)
    console.log("status :", status)

    // const speciesData = props.speciesData.data;

    const limit = props.limit;

    return (
        <>
            <ResultsGrid>
                <Card speciesData={data} limit={limit} />
            </ResultsGrid>
        </>
    )
}
