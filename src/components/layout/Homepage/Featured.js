import React from 'react';

import useAPI from '../../../hooks/useApi'

import Spinner from '../../utils/Spinner';

import Card from '../../Card';
import { ResultsGrid } from '../../ui-styled-components/Grid';

const APIurl = process.env.REACT_APP_API_URL


export default function Featured() {

    const getData = useAPI(`${APIurl}/profiles?_limit=3`)

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
        <ResultsGrid>
            {items}
        </ResultsGrid>
    )
}
