import React from 'react';
// import { ResultsCard } from './ui-styled-components/Card';
import Card from './Card';
import { ResultsGrid } from './ui-styled-components/Grid';

const parentVariants = {
    visible: {
        opacity: 1,
        transition: {
            duration: 0.5,
            when: "beforeChildren",
            staggerChildren: 0.22,
        }
    },
    hidden: {
        opacity: 0
    }
}

// const childrenVariants = {
//     visible: {
//         opacity: 1
//     },
//     hidden: { opacity: 0 },
//     hover: { scale: 0.97, opacity: 0.7, transition: { duration: 0.2 } }
// }


export default function Results(props) {
    const speciesData = props.speciesData.speciesData;
    const limit = props.limit;
    // const parentVariants = props.parentVariants
    // const childrenVariants = props.childrenVariants

    return (
        <>
            <ResultsGrid variants={parentVariants} initial="hidden" animate="visible">
                <Card speciesData={speciesData} limit={limit} />
            </ResultsGrid>
        </>
    )
}
