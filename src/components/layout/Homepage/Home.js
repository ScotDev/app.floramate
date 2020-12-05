import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { Content, PageSection, PageSectionTitle } from '../../ui-styled-components/Utils';

import Hero from '../../Hero';
import Search from './Search';
import SpeciesGrid from '../../SpeciesGrid';
import SpeciesProfile from '../../Species'
import Info from './Info'


class Home extends Component {
    render() {
        return (
            <BrowserRouter>
                <Content>
                    <Hero></Hero>
                    <Search></Search>
                    <PageSection>
                        <PageSectionTitle>Latest</PageSectionTitle>
                        <SpeciesGrid>
                        </SpeciesGrid>
                    </PageSection>
                    <PageSection><PageSectionTitle>What do we do?</PageSectionTitle>
                        <Info></Info>
                    </PageSection>
                </Content>
                <Route path="/:post_id" component={SpeciesProfile}></Route>
            </BrowserRouter>
        );
    }

}

export default Home;