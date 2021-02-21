import React from 'react';
// import { ResultsCard } from './ui-styled-components/Card';
import Card from './Card';
import { ResultsGrid } from './ui-styled-components/Grid';

export default function Results(props) {
    const speciesData = props.speciesData.speciesData;

    const { limit } = props;

    return (
        <>
            <ResultsGrid initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <Card speciesData={speciesData} limit={limit} />
            </ResultsGrid>
        </>
    )
}
