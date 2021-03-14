import React from 'react';

import Search from './functional/Search';
import Navbar from './Navbar';

const Species = (props) => {
    console.log(props)
    return (
        <>
            <Navbar></Navbar>
            <Search>
            </Search>
        </>
    )
}

export default Species;