import React, {Component} from 'react'

class Teams extends Component {
  render (){
    return(
      <div>
        <button onClick={() => this.props.deleteTeam(this.props.team)}>Delete Team</button>
        <button>Edit</button>
        <button>Show Team</button>
        <ul>
          <li>User: {this.props.team.user.username}</li>
          <li>User Id: {this.props.team.user_id}</li>
          <li>Team Name: {this.props.team.team_name}</li>
        </ul>
        <hr/>
      </div>
    )
  }
}
export default Teams
