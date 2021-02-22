import React from 'react';
// import { ResultsCard } from './ui-styled-components/Card';
import Card from './Card';
import { ResultsGrid } from './ui-styled-components/Grid';

export default function Results(props) {
    const speciesData = props.speciesData.speciesData;

    const limit = props.limit;
    const parentVariants = props.parentVariants
    const childrenVariants = props.childrenVariants

    return (
        <>
            <ResultsGrid variants={parentVariants} initial="hidden" animate="visible">
                <Card speciesData={speciesData} limit={limit} childrenVariants={childrenVariants} />
            </ResultsGrid>
        </>
    )
}
