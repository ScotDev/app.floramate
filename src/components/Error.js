import React from 'react'
import { ErrorCard } from './ui-styled-components/Utils'

export default function Error({ code, message }) {
    return (
        <ErrorCard>
            <h1>{message ? message : "Error loading data, please try again in a few moments"}</h1>
            <h2>{code && code}</h2>
        </ErrorCard>
    )
}
