import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/hero/hero';
import Work from './components/work/work';
import Testimonial from './components/testimonial/testimonial'
import Articles from './components/articles/article'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'
import Workdetails from './components/workdetails/workdetails'
import Detailspecific from './components/workdetailspecific/detailspecific'
import Articlepage from './components/Articlepage/articlepage'
import Articlesingle from './components/articlesingle/articlesingle'
import Aboutme from './components/Aboutme/aboutme'
import Contactpage from './components/contactpage/contactpage'

import React from 'react'
import ReactDOM from 'react-dom'

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
        <Switch>
          <Route exact path="/">
            <Hero />
            <Work/>
            <Testimonial/>
            <Articles/>
            <Contact/>
          </Route>

          <Route exact path="/work">
              <Workdetails></Workdetails>
          </Route>

          <Route exact path="/workdetails">
              <Detailspecific></Detailspecific>
          </Route>

          <Route exact path="/articles">
              <Articlepage></Articlepage>
          </Route>

          <Route exact path="/article/:id">
              <Articlesingle></Articlesingle>
          </Route>

          <Route exact path="/about">
              <Aboutme></Aboutme>
          </Route>

          <Route exact path="/contact">
              <Contactpage></Contactpage>
          </Route>
        </Switch>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
