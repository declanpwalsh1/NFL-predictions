import React from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/About.js';
import Main from './components/Main.js';
import Register from './components/Register';
import Login from './components/Login';


import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';



// main class of the project. Will include main page, router, nav bar etc
const App = () => {
    return (
      <div className="App">
          <Router>
            <Nav />
            <Switch>
              <Route path='/about' exact component={About}/>
              {/* <Route path='/search' exact component={Search}/> */}
              <Route path='/' exact component={Main} />
              <Route path='/register' exact component={Register} />
              <Route path='/login' exact component={Login} />
              <Route path='/' render={() => <h1>404 Page not found</h1>} />
            </Switch>
          </Router>
      </div>
    );
  
}

export default App;
