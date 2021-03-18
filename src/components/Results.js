import React, { useState, useEffect } from 'react';
import Card from './Card';
import { ResultsGrid } from './ui-styled-components/Grid';
import Spinner from '../components/utils/Spinner';
import { FilterBar, FilterBarWrapper, IconWrapper, FilterSelect } from './ui-styled-components/Search';
import { BsFilter } from 'react-icons/bs'

// import useAPI from '../hooks/useApi';


const APIurl = process.env.REACT_APP_API_URL

export default function Results(props) {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [limit, setLimit] = useState(20)
    const [plantType, setPlantType] = useState("")
    const [difficulty, setDifficulty] = useState("")
    const [data, setData] = useState(null);
    const [toggleDisplay, setToggleDisplay] = useState(false);

    // const defaultData = useAPI(`${APIurl}/profiles?_limit=${limit}`)

    let difficultyFilter;
    let plantTypeFilter;

    if (difficulty.length > 0) {
        difficultyFilter = `&difficulty=${difficulty}`;
    } else {
        difficultyFilter = "";
    }

    if (plantType.length > 0) {
        plantTypeFilter = `&type=${plantType}`;
    } else {
        plantTypeFilter = "";
    }

    useEffect(() => {
        const fetchSearchResults = async () => {
            setError(null)
            setIsLoading(true)
            try {
                const res = await fetch(`${APIurl}/profiles?_limit=${limit}${difficultyFilter}${plantTypeFilter}`);
                const formattedRes = await res.json();
                if (formattedRes.length === 0) {
                    setError("No results found")
                }
                setData(formattedRes);
                setTimeout(() => {
                    setIsLoading(false);
                }, 300);

            } catch (err) {
                setError(err);
                // console.log(defaultData)
                // setData(defaultData.data);
                setIsLoading(false);
                console.log("Error loading data from API: ", err)
            }

        };
        fetchSearchResults();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [limit, difficulty, plantType])


    let items;

    if (data) {
        items = data.map((item, index) => {
            return (
                <Card key={index} data={item} />
            )
        })

    }

    // Combine these into multipurpose function
    const handleLimitChange = e => {
        setLimit(e.target.value)
    }
    const handlePlantTypeChange = e => {
        setPlantType(e.target.value)
    }
    const handleDifficultyChange = e => {
        setDifficulty(e.target.value)
    }

    const handleToggleDisplay = () => {
        setToggleDisplay(!toggleDisplay)
    }

    return (
        <>

            <FilterBarWrapper>

                <IconWrapper>
                    <BsFilter onClick={handleToggleDisplay} />
                </IconWrapper>
                <FilterBar display={toggleDisplay}>

                    {/* <fieldset> */}
                    {/* <label htmlFor="type">Plant type</label> */}
                    <FilterSelect name="type" onChange={handlePlantTypeChange}>
                        <option selected value="">Any type</option>
                        <option value="Tree">Tree</option>
                        <option value="Shrub">Shrub</option>
                        <option value="Plant">Plant</option>
                    </FilterSelect>
                    {/* </fieldset> */}

                    {/* <fieldset> */}
                    {/* <label htmlFor="difficulty">Difficulty</label> */}
                    <FilterSelect name="difficulty" onChange={handleDifficultyChange}>
                        <option selected value="">Any difficulty</option>
                        <option value="Easy">Easy</option>
                        <option value="Med">Medium</option>
                        <option value="Hard">Difficult</option>
                    </FilterSelect>
                    {/* </fieldset> */}
                    {/* <fieldset> */}
                    {/* <label htmlFor="sun_requirements">Sun requirements</label> */}
                    <FilterSelect name="sun_requirements">
                        <option selected value="">Any sun</option>
                        <option value="Shade">Shade</option>
                        <option value="Half-shade">Half-shade</option>
                        <option value="Full-sun">Full-sun</option>
                    </FilterSelect>
                    {/* </fieldset> */}
                    {/* <fieldset> */}
                    {/* <label htmlFor="water_requirements">Water requirements</label> */}
                    <FilterSelect name="water_requirements">
                        <option selected value="">Any moisture</option>
                        <option value="Wet">Wet</option>
                        <option value="Medium">Medium</option>
                        <option value="Dry">Dry</option>
                    </FilterSelect>
                    {/* </fieldset> */}
                    {/* <fieldset> */}
                    {/* <label htmlFor="limit_results">No. results</label> */}
                    <FilterSelect name="limit_results" onChange={handleLimitChange}>
                        <option value="8">8</option>
                        <option value="10">10</option>
                        <option selected value="20">20</option>
                    </FilterSelect>
                    {/* </fieldset> */}

                </FilterBar>

            </FilterBarWrapper>
            <ResultsGrid>
                {error && (<p>{error}</p>)}
                {isLoading ? (<Spinner />) : items}
            </ResultsGrid>
        </>
    )
}
