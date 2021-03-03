import React, {Component} from 'react'

class Senators extends Component {
  render (){
    return(
      <div>
        <ul>
          <li>Senator id: {this.props.senator.sen_alpha_id}</li>
          <li>Name: {this.props.senator.first_name} {this.props.senator.last_name}</li>
          <li>Team id: {this.props.senator.team_id}</li>
        </ul>
      </div>
    )
  }
}
export default Senators