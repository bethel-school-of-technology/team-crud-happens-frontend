import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Testimony from './pages/testimony';
import Treatments from './pages/treatments';


const App = () => {
    return (
        <Router>
        <Navbar />
        <Switch>
            <Route path='/home' exact component={Home} />
            <Route path='/testimony' component={Testimony} />
            <Route path='/treatments' component={Treatments} />
            <Route path='/about' component={About} />
        </Switch>
    </Router>
    );
}





export default App;