import React from 'react';

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
            <Route path='/' exact component={Home} />
            <Route path='/testimony' component={Testimony} />
            <Route path='/trestments' component={Treatments} />
            <Route path='/about' component={About} />
        </Switch>
    </Router>
    );
}





export default App;