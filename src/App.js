import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import Home from './components//layout/Homepage/Home';
import About from './components/About';
import Species from './components/Species';
import Advice from './components/Advice';
// import Navbar from './components/Navbar';
import PlantProfile from './components/PlantProfile';

import './styles.min.css';

import { theme } from './config/Theme';

function App() {
  return (<>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route path='/species/:id' component={PlantProfile}></Route>
            <Route path='/species' component={Species}></Route>
            <Route path='/advice' component={Advice}></Route>
            <Route path='/about' component={About}></Route>
          </Switch>
        </div>

      </ThemeProvider>
    </BrowserRouter>
  </>);
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));