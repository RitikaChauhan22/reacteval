//import logo from './logo.svg';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import { Container } from "@material-ui/core";
import Home from './components/Home';
import MoviesDashboard from './components/MoviesDashboard';
import About from './components/About';

function App() {
  return (
  
   <>
   <MoviesDashboard/>
   </>
  );
}

export default App;
