import React, {Component} from 'react'
import SortedSenatorsByParty from './SortedSenatorsByParty'

class SearchSenators extends Component{

  handleSearch = (event) => {
    this.props.handleSearchOnChange(event.target.value)
    
    console.log("Search text changed", event.target.value)
  }

  render(){
    return(
      <div>
        <h3>Search Senators</h3>
        <input type="text" placeholder="Search Senators"
        onChange={(event) => this.handleSearch(event)}/>
        <hr/>
        {this.props.filteredSenators.map((filteredSenator) => <SortedSenatorsByParty filteredSenator={filteredSenator}/>)}
      </div>
    )
  }
}
export default SearchSenators