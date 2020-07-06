import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Hero from './Hero';
import CardGrid from './CardGrid';
import SpeciesProfile from '../components/layout/SpeciesProfile';


class Home extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="content">
                    <Hero></Hero>
                    <CardGrid>

                    </CardGrid>
                </div>
                <Route path="/:post_id" component={SpeciesProfile}></Route>
            </BrowserRouter>
        );
    }

}

export default Home;