import React, {Component} from 'react'
import SortedSenatorsByParty from './SortedSenatorsByParty'
import '../App.css'

class SearchSenators extends Component{

  handleSearch = (event) => {
    this.props.handleSearchOnChange(event.target.value)
    
    console.log("Search text changed", event.target.value)
  }

  render(){
    return(
      <div>
        <div className="add-team-repo-container">
        <h3>Search Senators by Last Name</h3>
        <input type="text" placeholder="Search Senators"
        onChange={(event) => this.handleSearch(event)}/> Sorted by Party</div>
        <div className="repo-container"><h3>Senators of the 117th Congress</h3>
        {this.props.filteredSenators.map((filteredSenator) => <SortedSenatorsByParty filteredSenator={filteredSenator}/>)}
        </div>
        <hr/>
      </div>
    )
  }
}
export default SearchSenators