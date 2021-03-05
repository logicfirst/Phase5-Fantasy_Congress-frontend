import React, {Component} from 'react'

class AddTeamForm extends Component {

  state = {
    username: "",
    team_name: ""
  }

  handleChange = (event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  })

  handleSubmit = (event) => {
    // event.preventDefault()
    let newTeam = {
      user_id: this.state.user_id,
      team_name: this.state.team_name,
    }

    let reqPack ={
      headers: {"Content-Type" : "application/json"},
      method: 'POST',
      body: JSON.stringify(newTeam)
    }

    fetch('http://localhost:3000/teams', reqPack)
    .then((res) => res.json)
    .then(postedTeam => {
      this.props.addTeam(postedTeam)
    })
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input onChange={this.handleChange} type="text" name="user_id" placeholder="User Id"/>
            <input onChange={this.handleChange} type="text" name="team_name" placeholder="Team Name"/>
          <button type="submit">Add Team</button>
          </div>
        </form>
      </div>
    )
  }
}
export default AddTeamForm