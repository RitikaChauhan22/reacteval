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
   
  //  <BrowserRouter>
  //      <Navbar />
  //      <div className="App">
         
  //       <Container>
  //         <Switch>
  //             <Route path="/" component={Home} />
  //             <Route path="/movies" component={MoviesDashboard} />
  //             <Route path="/about" component={About} />

  //         </Switch>
  //       </Container> 
    
  //      </div>
  //   </BrowserRouter>
  <>
    <MoviesDashboard/> 
    </>
  );
}

export default App;
