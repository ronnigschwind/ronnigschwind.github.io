// import logo from './logo.svg';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>Ronni Hartlage - React App</h1>
      <Header />
      <Footer />

      {/* <Router>
        <Switch>
            <Route exact path='/'>
              <Home/>  
            </Route>

            <Route path='/projects'>
              <Projects/>
            </Route>
        </Switch>
      </Router> */}
    </div>
  );
}

export default App;
