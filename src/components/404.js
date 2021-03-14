import React from 'react'
import { Link } from 'react-router-dom'
import { ErrorCard } from './ui-styled-components/Utils'
import Navbar from './Navbar';

export default function Error({ code, message }) {
    return (<>
        <Navbar></Navbar>
        <ErrorCard>
            <h1>{message ? message : "Error loading data, please try again in a few moments"}</h1>
            <h2>{code && code}</h2>
            <Link to="/">Go to homepage</Link>
        </ErrorCard>
    </>)
}
