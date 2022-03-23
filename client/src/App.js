import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';


import './App.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
//import Header from './components/Header';
import Footer from './components/Footer';




//Imported pages

import Home from './pages/Home';
import Login from './pages/Login';
import NoMatch from './pages/NoMatch';
import SingleCharity from './pages/SingleCharity';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import AddCharity from './pages/AddCharity';


const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});


function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">

        <Navbar />

        <Router>
          <div >
            <div >
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/charity" component={SingleCharity} />
                <Route exact path= "/add" component={AddCharity} />
                <Route component={NoMatch} />
              </Switch>
            </div>
            <Footer />
          </div>
        </Router>


      </div>
  </ApolloProvider>
  );
}

export default App;
