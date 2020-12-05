import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import Home from './components//layout/Homepage/Home';
import About from './components/About';
import Species from './components/Species';
import Advice from './components/Advice';
// import Results from './components/Results';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import './styles.min.css';

const theme = {
  primaryColour: "#2f3e46",
  primaryAccent: "#6e6448",
  primaryText: "#f7fffb",
  secondaryColour: "#487161",
  secondaryAccent: "#f7fffb",
  black: "#000",
  size: {
    title: "3rem",
    subtitle: "2rem",
    largeText: "1.4rem",
    regularText: "1.25rem",
    smallText: "1rem",
  },
  boxShadow: "6px 6px 25px 6px rgba(0,0,0, 0.7)"
};

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <div className="App">
          <div className="skewed"></div>
          <Navbar></Navbar>
          <Route exact path='/' component={Home}></Route>
          <Route path='/species' component={Species}></Route>
          <Route path='/advice' component={Advice}></Route>
          <Route path='/about' component={About}></Route>
          <Footer></Footer>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));