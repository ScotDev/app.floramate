import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import Home from './components//layout/Homepage/Home';
import About from './components/About';
import Species from './components/Species';
import Advice from './components/Advice';
import PlantProfile from './components/PlantProfile/PlantProfile';

import './styles.min.css';

import { theme } from './config/Theme';
import Error from './components/404';

function App() {

  return (<>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <div className="App">
          {/* <Switch> */}
          <Route path='/' exact component={Home}></Route>
          <Route path='/species' exact component={Species}></Route>
          <Route path='/species/:id' component={PlantProfile}></Route>
          <Route path='/advice' exact component={Advice}></Route>
          <Route path='/about' exact component={About}></Route>
          <Route path='/' component={Error}></Route>
          {/* </Switch> */}
        </div>

      </ThemeProvider>
    </BrowserRouter>
  </>);
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));