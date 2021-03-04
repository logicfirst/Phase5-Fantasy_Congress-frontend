import React, {Component} from 'react'

class SortedSenatorsByParty extends Component {
  render(){
    return(
      <div>
        <ul>
          <li>Name: {this.props.filteredSenator.first_name} {this.props.filteredSenator.last_name}</li>
          <li>Team: {this.props.filteredSenator.team.team_name}</li>
          <li>Senator id: {this.props.filteredSenator.sen_alpha_id}</li>
          <li>Title: {this.props.filteredSenator.title}</li>
          <li>Title: {this.props.filteredSenator.state}</li>
          <li>Party: {this.props.filteredSenator.party}</li>
          <li>D.O.B: {this.props.filteredSenator.date_of_birth}</li>
          <li>Gender: {this.props.filteredSenator.gender}</li>
          <li>Seniority: {this.props.filteredSenator.seniority}</li>
          <li>Next Election: {this.props.filteredSenator.next_election}</li>
          <li>Senate Class: {this.props.filteredSenator.senate_class}</li>
          <li>State Rank: {this.props.filteredSenator.state_rank}</li>
          <li>Missed Votes Percentage: {this.props.filteredSenator.missed_votes_pct}</li>
          <li>Votes with Party Percentage: {this.props.filteredSenator.votes_with_party_pct}</li>
          <li>url: {this.props.filteredSenator.url}</li>
          <li>Phone: {this.props.filteredSenator.phone}</li>
        </ul>
      </div>
    )
  }

}
export default SortedSenatorsByParty