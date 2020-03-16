import React, { Component } from "react";
import {BrowserRouter as Router, Link, NavLink, Redirect, Prompt} from 'react-router-dom';
import Route from 'react-router-dom/Route';

const User = (params) => {
return (<h1>welocome user {params.username}</h1>)
}

class App extends Component{ 
state = {
  loggedIn:false
}

loginhandel = () => {
  this.setState(prevState => ({
    loggedIn: !prevState.loggedIn
  }))
}

  render(){
    return(
      <Router>
      <div className="App">
        <ul>
          <li><NavLink to="/" exact activeStyle={{color:'green'}}>home</NavLink></li>
          <li><NavLink to="/about/" exact activeStyle={{color:'green'}}>About</NavLink></li>
          <li><NavLink to="/user/Nilesh" exact activeStyle={{color:'green'}}>Nilesh</NavLink></li>
        </ul>

        <Prompt
          when={!this.state.loggedIn}
          message={(location)=>{
            return location.pathname.startsWith('/user') ? 'Please login' : true
          }}
        />

        <Route path="/" exact strict render={
          ()=> {
            return (<h1>welcome home</h1>)
          }
        }/>

        <input type="button" value={this.state.loggedIn ? 'log out' : 'log in'} onClick={this.loginhandel.bind(this)}/>
        <Route path="/about/" exact strict render={
          ()=> {
            return (<h1>welcome About</h1>)
          }
        }/>

      <Route path="/user/:username" exact strict render={({match}) =>(
        this.state.loggedIn ? (<User username={match.params.username}/>) : (<Redirect to="/"/>)

      )}/>

      </div>
      </Router>
    );
  }
}

export default App;