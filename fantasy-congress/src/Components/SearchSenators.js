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
        <h4>Search Senators by Last Name</h4>
        <input type="text" placeholder="Search Senators"
        onChange={(event) => this.handleSearch(event)}/>
        <div className="repo-container">
        {this.props.filteredSenators.map((filteredSenator) => <SortedSenatorsByParty filteredSenator={filteredSenator}/>)}
        
        </div>
      </div>
    )
  }
}
export default SearchSenators