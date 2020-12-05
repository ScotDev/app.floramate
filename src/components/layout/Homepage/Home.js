import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { Content } from '../../ui-styled-components/Utils';

import Hero from '../../Hero';
import Search from './Search';
import CardGrid from '../../CardGrid';
import SpeciesProfile from '../../Species'
import Info from './Info'


class Home extends Component {
    render() {
        return (
            <BrowserRouter>
                <Content>
                    <Hero></Hero>
                    <Search></Search>
                    <section className="section"><h2 className="section-title">Latest</h2>
                        <CardGrid>
                        </CardGrid>
                    </section>
                    <div className="section">
                        <h2 className="section-title">What do we do?</h2>
                        <Info></Info>
                    </div>
                </Content>
                <Route path="/:post_id" component={SpeciesProfile}></Route>
            </BrowserRouter>
        );
    }

}

export default Home;