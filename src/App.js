import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './styles/App.css';
import './styles/normalize.css';
import Landing from './components/Landing';
import About from './components/About';
import Library from './components/Library';
import Album from './components/Album';
import Contact from './components/Contact';
import AppFooter from './components/AppFooter'

class App extends Component {
  render() {
    return (
      <div className="App">
      <header>
        <Link to='/' id="logo">TedTunes</Link>
          <nav className="clearfix">
          <Link to='/contact'>Contact</Link>
          <Link to='/about'>About</Link>
          <Link to='/library'>Library</Link>
          </nav>
      </header>
        <main>
          <Route exact path="/" component={Landing} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/library" component={Library} />
          <Route path="/album/:slug" component={Album} />
        </main>
        <AppFooter />
      </div>
    );
  }
}

export default App;
