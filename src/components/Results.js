import React, { useState } from 'react';
import Card from './Card';
import { ResultsGrid } from './ui-styled-components/Grid';
import Spinner from '../components/utils/Spinner';

import useAPI from '../hooks/useApi';


const APIurl = process.env.REACT_APP_API_URL


export default function Results(props) {
    const [query, setQuery] = useState()

    console.log(props)

    // const query = `?_where[common_name_contains]=${props.query}`;

    const getData = useAPI(`${APIurl}/profiles?_limit=10`)

    const { data, isLoading } = getData;

    if (isLoading) {
        return <Spinner />
    }

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
