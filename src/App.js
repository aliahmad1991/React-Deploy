import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
       <HashRouter basename='/'>
   <div>
    <ul>
     <li><Link to="/">Home</Link></li>
     <li><Link to="/about">About</Link></li>
    </ul>
    <hr />
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
   </div>
  </HashRouter>
    )
  }
}
