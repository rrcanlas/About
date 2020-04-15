import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigator  from './components/Navigator';

import About      from './routes/About';
import Project    from './routes/Project';
import Follow     from './routes/Follow';
import Blog       from './routes/Blog';
import Notfound   from './routes/Notfound';
import Footer     from './routes/Footer';


class App extends Component {
  render() {    
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div>      
          <Navigator />
          <Switch>
            <Route path="/" activeClassName="active" component={About} exact={true} />

            <Route       path="/Project"  component={Project} /> 
            <Route       path="/Follow"   component={Follow} />
            <Route       path="/Blog"     component={Blog} />
            <Route                        component={Notfound} />
          </Switch>         
          <Footer />  
        </div>

      </BrowserRouter>     
    );
  }
}

export default App;
