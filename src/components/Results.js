import React from 'react';
import Card from './Card';
import { ResultsGrid } from './ui-styled-components/Grid';
import Spinner from '../components/utils/Spinner';

import useAPI from '../hooks/useApi';


const APIurl = process.env.REACT_APP_API_URL


export default function Results() {

    const getData = useAPI(`${APIurl}/profiles?_limit=10`)

    const { data, isLoading } = getData;

    if (isLoading) {
        return <Spinner />
    }

    console.log("Data :", data)

    let items;

    if (data) {
        items = data.map((item, index) => {
            return (
                <Card key={index} data={item} />
            )
        })

    }


    return (
        <>
            <ResultsGrid>
                {items}
            </ResultsGrid>
        </>
    )
}
