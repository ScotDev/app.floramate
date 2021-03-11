import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

import Spinner from '../../utils/Spinner';

import Card from '../../Card';
import { ResultsGrid } from '../../ui-styled-components/Grid';

const APIurl = process.env.REACT_APP_API_URL

const fetchData = async () => {
    const res = await fetch(`${APIurl}/profiles?_limit=3`);
    return res.json();
}

export default function Featured() {

    const { data, status } = useQuery('species', fetchData,
        // {
        //     staleTime: 60 * 1000,
        //     refetchOnWindowFocus: false
        // }
    );

    if (status === "loading") {
        return <Spinner />
    }


    const items = data.map((item, index) => {
        return (
            <Card key={index} data={item} />
        )
    })

    return (
        <ResultsGrid>
            {data ? items : <Spinner />}
        </ResultsGrid>
    )
}
