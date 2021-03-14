import React from 'react';

import Navbar from '../Navbar';
import { ProfileContent, ProfileTitle, ProfileSubtitle, ProfileGrid, ProfileImageContainer } from './ProfileUIElements.js';

import Spinner from '../utils/Spinner';

import PlantProfileImage from './PlantProfileImage';

import TextBlock from "../utils/TextBlock";
import Pill from "../utils/Pill";

import useAPI from '../../hooks/useApi';

const APIurl = process.env.REACT_APP_API_URL

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
                    <ProfileImageContainer>
                        <PlantProfileImage alt={`${data.common_name} profile`}
                            //  thumb={data.image_url} 
                            src={data.image_url} />
                    </ProfileImageContainer>
                    <TextBlock data={data} />
                </ProfileGrid>
            </ProfileContent>}
        </>
    )
}
