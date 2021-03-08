import React from 'react';
import { useQuery } from 'react-query';
import Card from './Card';
import { ResultsGrid } from './ui-styled-components/Grid';
import Spinner from '../components/utils/Spinner';


const APIurl = process.env.REACT_APP_API_URL

// CARD SHOULD BE A DUMB COMPONENT AND LOGIC ELEVATED TO THIS COMPONENT

const fetchData = async () => {
    const res = await fetch(`${APIurl}/profiles`);
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
                {data ? <Card speciesData={data} limit={limit} /> : <Spinner />}
            </ResultsGrid>
        </>
    )
}
