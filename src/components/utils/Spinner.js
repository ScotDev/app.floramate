import React from 'react'
// import { spinnerContainer } from '../ui-styled-components/Spinner';

import SpinnerSVG from '../../assets/img/loading.svg';

export default function Spinner() {
    return (
        <>
            <img src={SpinnerSVG} alt="" id="spinner" />
        </>
    )
}
