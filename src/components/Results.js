import React from 'react';
import { useQuery } from 'react-query';
import Card from './Card';
import { ResultsGrid } from './ui-styled-components/Grid';
import Spinner from '../components/utils/Spinner';


const APIurl = process.env.REACT_APP_API_URL


const fetchData = async () => {
    const res = await fetch(`${APIurl}/profiles`);
    return res.json();
}


export default function Results() {
    const { data, status } = useQuery('species', fetchData,
        // {
        //     staleTime: 60 * 1000,
        //     refetchOnWindowFocus: false
        // }
    );

    if (status === "loading") {
        return <Spinner />
    }


    console.log("Data :", data)
    console.log("status :", status)


    const items = data.map((item, index) => {
        return (
            <Card key={index} data={item} />
        )
    })

    return (
        <>
            <ResultsGrid>
                {items}
            </ResultsGrid>
        </>
    )
}
