import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './components//layout/Homepage/Home';
import About from './components/About';
import Species from './components/Species';
// import Advice from './components/Advice';
import Results from './components/Results';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


import './styles.min.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="skewed"></div>
        <Navbar></Navbar>
        <Route exact path='/' component={Home}></Route>
        <Route path='/species' component={Species}></Route>
        <Route path='/results' component={Results}></Route>
        <Route path='/about' component={About}></Route>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));