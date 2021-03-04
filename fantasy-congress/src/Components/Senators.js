import React, {Component} from 'react'

class Senators extends Component {
  render (){
    return(
      <div>
        <ul>
          <li>Name: {this.props.senator.first_name} {this.props.senator.last_name}</li>
          <li>Senator id: {this.props.senator.sen_alpha_id}</li>
          <li>Team: {this.props.senator.team.team_name}</li>
        </ul>
      </div>
    )
  }
}
export default Senators