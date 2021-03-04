import React, {Component} from 'react'

class Teams extends Component {
  render (){
    return(
      <div>
        <button onClick={() => this.props.deleteTeam(this.props.team)}>Delete Team</button>
        <ul>
          <li>User id: {this.props.team.user_id}</li>
          <li>Team Name: {this.props.team.team_name}</li>
          
        </ul>
      </div>
    )
  }
}
export default Teams
