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
import Teams from './Teams'
import '../App.css';

class FantasyCongress extends Component {

  state = {
    users: [],
    senators: [],
    teams: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/users')
    .then(res => res.json())
    .then((fetchedUsers) => {this.setState({users: fetchedUsers})})

    fetch('http://localhost:3000/senators')
    .then(res => res.json())
    .then((fetchedSenators) => {this.setState({senators: fetchedSenators})})

    fetch('http://localhost:3000/teams')
    .then(res => res.json())
    .then((fetchedTeams) => {this.setState({teams: fetchedTeams})})

  }

  addTeam = (team) => {
    this.setState({
      teams: [...this.state.team, team]
    })
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
            <li>
              <Link to="/teams">Teams</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/teams">
          teams={this.state.teams.map ((team) => <Teams team={team}/>)}
          </Route>
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