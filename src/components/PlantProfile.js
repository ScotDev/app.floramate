import React from 'react';
import { useParams } from 'react-router';

import Navbar from './Navbar';
import { ProfileContent, ProfileTitle, ProfileSubtitle, ProfileGrid } from './ui-styled-components/Profile.js';
import { Title, Subtitle } from './ui-styled-components/Text';
import Spinner from './utils/Spinner'


import Panels from "./utils/Panels";
import TextBlock from "./utils/TextBlock";
import Pill from "./utils/Pill";

import useAPI from '../hooks/useApi';

// const APIurl = process.env.REACT_APP_API_URL
const APIurl = "https://floramate-cms.herokuapp.com";

export default function PlantProfile(props) {

    const id = props.match.params.id

    const getData = useAPI(`${APIurl}/profiles/${id}`)


    if (getData.isLoading) {
        return <Spinner />
    }

    const data = getData.data;

    return (
        <>
            <Navbar bgColor={"#2f3e46"} padding={"10vw"} />
            {data && <ProfileContent>
                <ProfileTitle>{data.common_name}</ProfileTitle>
                <ProfileSubtitle>{data.latin_name}</ProfileSubtitle>
                <Pill status={data.status} native={data.native} />
                <ProfileGrid>
                    <Panels data={data} />
                    <TextBlock data={data} />
                </ProfileGrid>
            </ProfileContent>}
        </>
    )
}
