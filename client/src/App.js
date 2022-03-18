import logo from './images/logo.svg';
// import { ReactComponent as Logo } from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';


function App() {
  return (
     <div className="App">
    <Navbar/>
    <LandingPage/>

    </div>
  );
}

export default App;
