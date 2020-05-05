import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CardGrid from './components/CardGrid';
import Footer from './components/Footer';
import RegisterForm from './components/RegisterForm';
import './styles.min.css';

function App() {
  return (
    <div className="App">
      <body>
        <div className="skewed"></div>
        <Navbar></Navbar>
        <Hero></Hero>
        <CardGrid></CardGrid>
        <Footer></Footer>
      </body>
    </div>
  );
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));