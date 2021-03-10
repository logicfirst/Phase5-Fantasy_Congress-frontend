import React, {Component} from 'react'

class ShowTeam extends Component {

  render (){
    return(
      <div className='team-container'>
        <h3>Team: {this.props.selectedTeamName.team_name}</h3>
        <h3>Senators:</h3>
        <ul>
          {this.props.senators.map(senator => <li>{senator.first_name} {senator.last_name} ({senator.party})</li>)}
        </ul>
      </div>
    )
  }
}
export default ShowTeam