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
        <Home />
        users={this.state.users.map ((user) => <Users user={user}/>)}
        senators={this.state.senators.map ((senator) => <Senators senator={senator}/>)}
      </div>
    )

  }
}
export default FantasyCongress