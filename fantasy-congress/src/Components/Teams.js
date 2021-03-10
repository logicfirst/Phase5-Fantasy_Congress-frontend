import React, {Component} from 'react'
import { Redirect } from "react-router-dom";

class Teams extends Component {

state = {
  redirect: false,
}

setRedirect = () => {
  this.setState({
    redirect: true
  })
  this.props.getTeamName(this.props.team) 
}
renderRedirect = () => {
  if (this.state.redirect) {
    return <Redirect to='/showteam' />
  }
}
  
  render (){
    return(
      <div>
        <button onClick={() => this.props.deleteTeam(this.props.team)}>Delete Team</button>
        {this.renderRedirect()}
        <button onClick={this.setRedirect}>Show Team</button>
        {/* {this.props.getTeamName(this.props.team.team_name)} */}
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
