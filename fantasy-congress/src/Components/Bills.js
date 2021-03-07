import React, {Component} from 'react'

class Bills extends Component {

  // state = {
  //   billData: []
  // }

  // componentDidMount (){
    
  //   const headers = { 'Content-Type': 'application/json',
  //     'X-API-Key': '2HwLq9PKKHxs9dkLQvUFOGIAptAgIn74XZ4l3go9' }
  //     fetch('https://api.propublica.org/congress/v1/117/senate/bills/introduced.json?offset=0', { headers })
  //         .then(response => response.json())
  //         .then((billData) => {this.setState({bills: billData})});
    
  // }
  
  render(){
    return(
      <div>
        <ul>
          {/* <li>User: {this.props.results.bill_id}</li> */}
          {/* <li>Team Name: {this.props.bills.title}</li> */}
        </ul>
      </div>
    )
  }
}
export default Bills