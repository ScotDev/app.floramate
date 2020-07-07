import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Hero from './Hero';
import Search from './Search';
import CardGrid from './CardGrid';
// import Spinner from './layout/Spinner'
import SpeciesProfile from './Species'


class Home extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="content">
                    <Hero></Hero>
                    <Search></Search>
                    <section className="section"><h2 className="section-title">Latest</h2>
                        <CardGrid>
                        </CardGrid>
                    </section>
                    {/* <Spinner></Spinner> */}
                </div>
                <Route path="/:post_id" component={SpeciesProfile}></Route>
            </BrowserRouter>
        );
    }

}

export default Home;