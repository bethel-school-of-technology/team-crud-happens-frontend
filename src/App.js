import React, { Component, } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Testimony } from './pages/testimony';
import { Treatments } from './pages/treatments';
import { About } from './pages/about';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import { Jumbotron } from './components/Jumbotron';

//App.js is where we add our routing to change pages.

//<React.Fragment>...this creates a wrapper, not having to create a Div to wrap all components; need open/close tag to wrap everything.
//<Router>...is my element
//<Layout>...is wrapping all other components to be passed to layout which renders layout.js, centering the page.
//<Switch>...allows me to switch between pages
//<Route>...each route to each page


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