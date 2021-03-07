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


export default function PlantProfile() {
    const { id } = useParams();


    const fetchData = async () => {
        const res = await fetch("http://192.168.167.192:1337/profiles/" + id);
        return res.json();
    }


    const { data, status } = useQuery('species', fetchData);
    console.log("Profile data here :", data)

    // if (status === "loading") {
    //     return <Spinner />
    // }


    return (
        <>
            <Navbar bgColor={"#2f3e46"} padding={"10vw"} />
            {/* Remove content and replace with custom styles */}
            <ProfileContent>
                <ProfileTitle>{data.common_name}</ProfileTitle>
                <ProfileSubtitle>{data.latin_name}</ProfileSubtitle>
                <Pill status={data.status} native={data.native} />
                <ProfileGrid>
                    {/* <img alt="" src={data.image_url} height="450px" width="100%" /> */}
                    <Panels data={data} />
                    <TextBlock data={data} />
                </ProfileGrid>
            </ProfileContent>
        </>
    )
}
