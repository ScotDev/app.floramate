import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router';

import Navbar from './Navbar';
import { ProfileContent, ProfileTitle, ProfileSubtitle, ProfileGrid } from './ui-styled-components/Profile.js';
import { Title, Subtitle } from './ui-styled-components/Text';
import Spinner from './utils/Spinner'


import Panels from "./utils/Panels";
import TextBlock from "./utils/TextBlock";
import Pill from "./utils/Pill";

const APIurl = process.env.REACT_APP_API_URL

export default function PlantProfile() {
    const { id } = useParams();

    const fetchData = async () => {
        const res = await fetch(`${APIurl}/profiles/${id}`);
        return res.json();

    }
    const { data, status } = useQuery('species', fetchData);
    // console.log("Profile data here :", data)

    return (
        <>
            <Navbar bgColor={"#2f3e46"} padding={"10vw"} />
            <ProfileContent>
                <ProfileTitle>{data.common_name}</ProfileTitle>
                <ProfileSubtitle>{data.latin_name}</ProfileSubtitle>
                <Pill status={data.status} native={data.native} />
                <ProfileGrid>
                    <Panels data={data} />
                    <TextBlock data={data} />
                </ProfileGrid>
            </ProfileContent>
        </>
    )
}
