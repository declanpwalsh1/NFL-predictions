import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About.js';
import Search from './components/Search.js';
import Main from './components/Main.js';
import Register from './components/Register';
import Login from './components/Login';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';



// main class of the project. Will include main page, router, nav bar etc
class App extends Component{
  
  componentDidMount() {
    // fetch(this.state.url)
    // .then((resp) => resp.json())
    // .then((resp) => {
    //   this.setState(() => {
    //     return (
    //       { gameData: resp }
    //     );
    //   })
    // })
    // .then(console.log(this.state.gameData))
  }

 
  render(){
    return (
      <div className="App">
          <Router>
            <Nav />
            <Switch>
              <Route path='/about' exact component={About}/>
              <Route path='/search' exact component={Search}/>
              <Route path='/' exact component={Main} />
              <Route path='/register' exact component={Register} />
              <Route path='/login' exact component={Login} />
              <Route path='/' render={() => <h1>404 Page not found</h1>} />
            </Switch>
          </Router>
      </div>
    );
  }
}

export default App;
