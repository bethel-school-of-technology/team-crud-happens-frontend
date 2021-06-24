import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Testimony } from './pages/testimony';
import { Treatments } from './pages/treatments';
import { About } from './pages/about';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import { Jumbotron } from './components/Jumbotron';



class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
        <NavigationBar />
        <Jumbotron />
        <Layout>
          <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/testimony" component={Testimony} />
          <Route path="/treatments" component={Treatments} />
          <Route path="/about" component={About} />
          </Switch>
        </Layout>
        </Router>
      </React.Fragment>
    );
  }
}

// import React from 'react';
// import './App.css';
// import Navbar from './components/Navbar';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Home from './pages';
// import About from './pages/about';
// import Testimony from './pages/testimony';
// import Treatments from './pages/treatments';
// //import { Route, Switch, } from 'react-router-dom';


// const App = () => {
//     return (
//         <Router>
//         <Navbar />
//         <Switch>
//             <Route path='/home' exact component={Home} />
//             <Route path='/testimony' component={Testimony} />
//             <Route path='/treatments' component={Treatments} />
//             <Route path='/about' component={About} />
//         </Switch>
//     </Router>
//     );
// }








 export default App;