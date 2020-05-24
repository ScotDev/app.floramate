import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './components/Home';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CardGrid from './components/CardGrid';
import Footer from './components/Footer';
import About from './components/About';
import Species from './components/Species';
import Advice from './components/Advice';


import './styles.min.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <body>
          <div className="skewed"></div>
          {/* <Home></Home> */}
          <Navbar></Navbar>
          <Route path='/species' component={Species}></Route>
          <Route path='/advice' component={Advice}></Route>
          <Route path='/about' component={About}></Route>
          <Hero></Hero>
          <CardGrid></CardGrid>
          <Footer></Footer>
        </body>
      </div>
    </BrowserRouter>
  );
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));