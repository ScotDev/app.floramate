import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import Home from './components//layout/Homepage/Home';
import About from './components/About';
import Species from './components/Species';
import Advice from './components/Advice';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';

import './styles.min.css';

const theme = {
  primaryColour: "#2f3e46",
  primaryAccent: "#6e6448",
  primaryText: "#f7fffb",
  secondaryColour: "#84a98c",
  secondaryAccent: "#f7fffb",
  secondaryBlue: "#5a6368",
  primaryBg: "#f6f9fc",
  black: "#000",
  size: {
    title: "4rem",
    subtitle: "2.6rem",
    largeText: "2rem",
    regularText: "1.1rem",
    smallText: "0.9rem",
  },
  // boxShadow: "6px 6px 25px 6px rgba(0,0,0, 0.7)",
  // boxShadow: "0 6px 12px -2px rgb(50 50 93 / 25%),
  // 0 3px 7px - 3px rgb(0 0 0 / 30 %)",
  mainContentPadding: "25vw",
  borderRadius: "8px"
};

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Route exact path='/' component={Home}></Route>
          <Route path='/species' component={Species}></Route>
          <Route path='/advice' component={Advice}></Route>
          <Route path='/about' component={About}></Route>
          {/* <Footer></Footer> */}
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));