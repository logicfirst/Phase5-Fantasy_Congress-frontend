import React, {Component} from 'react'
import '../App.css'

class Senators extends Component {
  render (){
    return(
      <div className="repo-container">
        <ul>
          <li>Name: {this.props.senator.first_name} {this.props.senator.last_name}</li>
          <li>Team: {this.props.senator.team.team_name}</li>
          <li>Senator id: {this.props.senator.sen_alpha_id}</li>
          <li>Title: {this.props.senator.title}</li>
          <li>State: {this.props.senator.state}</li>
          <li>Party: {this.props.senator.party}</li>
          <li>D.O.B: {this.props.senator.date_of_birth}</li>
          <li>Gender: {this.props.senator.gender}</li>
          <li>Seniority: {this.props.senator.seniority}</li>
          <li>Next Election: {this.props.senator.next_election}</li>
          <li>Senate Class: {this.props.senator.senate_class}</li>
          <li>State Rank: {this.props.senator.state_rank}</li>
          <li>Missed Votes Percentage: {this.props.senator.missed_votes_pct}</li>
          <li>Votes with Party Percentage: {this.props.senator.votes_with_party_pct}</li>
          <li>url: {this.props.senator.url}{this.props.senator.url}</li>
          <li>Phone: {this.props.senator.phone}</li>
        </ul>
      </div>
    )
  }
}
export default Senators