import React, { Component, } from 'react';
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

 export default App;