import React, { useState } from 'react';
import Results from '../Results';

import { SearchSection, SearchBox, SearchBtn, ResultsHeading } from '../ui-styled-components/Search';

export default function Search() {

    const [query, setQuery] = useState("")

    const handleChange = e => {
        e.preventDefault();
        setQuery(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        setQuery(e.target.value)
    }

    console.log(query)

    return (
        <>
            <SearchSection initial={{ opacity: 0.2 }} animate={{ opacity: 1 }}>
                <h2>Species</h2>
                <form>
                    <SearchBox type="text" placeholder="Search..." value={query} onChange={handleChange}></SearchBox>
                    <SearchBtn type="submit" value="Search" onClick={handleSubmit} />
                </form>

            </SearchSection>

            {query && (<ResultsHeading initial={{ opacity: 0.2 }} animate={{ opacity: 1 }}>Results</ResultsHeading>)}

            <Results query={query} />
        </>
    )
}
