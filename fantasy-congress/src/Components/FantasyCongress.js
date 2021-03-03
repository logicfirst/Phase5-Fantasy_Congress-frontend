import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Home from './Home'
import Users from './Users'
import Senators from './Senators'

class FantasyCongress extends Component {

  state = {
    users: [],
    senators: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/users')
    .then(res => res.json())
    .then((fetchedUsers) => {this.setState({users: fetchedUsers})})

    fetch('http://localhost:3000/senators')
    .then(res => res.json())
    .then((fetchedSenators) => {this.setState({senators: fetchedSenators})})

  }

  render(){
    return(
      <div>
        <h1>Fantasy Congress</h1>
        {/* <Home />
        users={this.state.users.map ((user) => <Users user={user}/>)}
        senators={this.state.senators.map ((senator) => <Senators senator={senator}/>)} */}
        <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/senators">Senators</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/senators">
          senators={this.state.senators.map ((senator) => <Senators senator={senator}/>)}
          </Route>
          <Route path="/users">
          users={this.state.users.map ((user) => <Users user={user}/>)}
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
      </div>
    )

  }
}
export default FantasyCongress