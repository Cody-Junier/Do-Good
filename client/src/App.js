import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Imported pages

import Home from './pages/Home';
import Login from './pages/Login';
import NoMatch from './pages/NoMatch';
import SingleCharity from './pages/SingleCharity';
import Profile from './pages/Profile';
import Signup from './pages/Signup';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Router>
        <div >
          <Header />
          <div >
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/charity" component={SingleCharity} />

              <Route component={NoMatch} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>


    </div>
  );
}

export default App;
