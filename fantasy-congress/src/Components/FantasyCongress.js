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
import AddTeamForm from './AddTeamForm'
import '../App.css';
import SearchSenators from './SearchSenators'

class FantasyCongress extends Component {

  state = {
    users: [],
    senators: [],
    teams: [],
    filteredSenators: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/users')
    .then(res => res.json())
    .then((fetchedUsers) => {this.setState({users: fetchedUsers})})

    fetch('http://localhost:3000/senators')
    .then(res => res.json())
    .then((fetchedSenators) => {this.setState({senators: fetchedSenators,
    filteredSenators: fetchedSenators})})

    fetch('http://localhost:3000/teams')
    .then(res => res.json())
    .then((fetchedTeams) => {this.setState({teams: fetchedTeams})})

  }

  addTeam = (team) => {
    this.setState({
      teams: [...this.state.team, team]
    })
  }

  deleteTeam = (deletedTeam) => {
    fetch('http://localhost:3000/teams/' + deletedTeam.id, {method: 'DELETE'})
    .then(res => res.json())
    .then(() => {this.setState({
      teams: this.state.teams.filter((team) => team !=deletedTeam)
    })})
  }

  handleSearchOnChange = (inputValue) => {
    let searchedSenators = this.state.senators.filter(senator => 
      senator.last_name.toLowerCase().includes(inputValue.toLowerCase())).sort((a, b) => 
      (a.party > b.party) ? -1 : 1)
      this.setState({
        filteredSenators: searchedSenators
      })
      console.log(inputValue)
  }

  render(){
    return(
      <div>
        <h1 className="header-font">Fantasy Congress</h1>
        {/* <Home />
        users={this.state.users.map ((user) => <Users user={user}/>)}
        senators={this.state.senators.map ((senator) => <Senators senator={senator}/>)} */}
        <Router>
      <div>
        <nav className="nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/searchsenators">Senators</Link>
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
          <div className="add-team-repo-container"><h3>Add Team</h3><AddTeamForm addTeam={this.addTeam}/></div>
          <div className="team-repo-container">{this.state.teams.map ((team) => <Teams team={team}
          deleteTeam={this.deleteTeam}/>)}</div>
          </Route>

          <Route path="/searchsenators">
          {/* senators={this.state.senators.map ((senator) => <Senators senator={senator}/>)} */}
            <SearchSenators handleSearchOnChange={this.handleSearchOnChange}
            filteredSenators={this.state.filteredSenators} />
          </Route>

          <Route path="/users">
            
          <div className="team-repo-container"><h3>Users</h3><hr/>{this.state.users.map ((user) => <Users user={user}/>)}
          </div>
          </Route>

          <Route path="/">
            <Home />
            {/* <div className="repo-container"><h3>Add Team</h3><AddTeamForm addTeam={this.addTeam}/>
            </div> */}
          </Route>
        </Switch>
      </div>
    </Router>
      </div>
    )

  }
}
export default FantasyCongress