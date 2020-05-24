import React from 'react';

import Hero from './Hero';
import CardGrid from './CardGrid';

const Home = () => {
    return (
        <>
            <div className="content">
                <Hero></Hero>
                <CardGrid></CardGrid>
            </div>
        </>
    );
}

export default Home;