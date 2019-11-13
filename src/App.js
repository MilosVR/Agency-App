import React from 'react';
import './App.scss'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import LandingPage from './components/Landing/LandingPage'
import About from './components/About/About'
import Service from './components/Services/Service'
import News from './components/News/News'
import Contact from './components/Contact/Contact'

function App() {
  return (
    <BrowserRouter>
     <Navbar />
      <Route exact path='/' component={LandingPage}/>
      <Switch>
        <Route path='/about' component={About} />
        <Route path='/service' component={Service} />
        <Route path='/news' component={News} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
