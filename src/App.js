import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './styles/App.css';
import './styles/normalize.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';
import AppFooter from './components/AppFooter'

class App extends Component {
  render() {
    return (
      <div className="App">
      <header>
        <Link to='/' id="logo">TedTunes</Link>
          <nav className="clearfix">
            <Link to='/'>Landing</Link>
            <Link to='/library'>Library</Link>
          </nav>
      </header>
        <main>
          <Route exact path="/" component={Landing} />
          <Route path="/library" component={Library} />
          <Route path="/album/:slug" component={Album} />
        </main>
        <AppFooter />
      </div>
    );
  }
}

export default App;
