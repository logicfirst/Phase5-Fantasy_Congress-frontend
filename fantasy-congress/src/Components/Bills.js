import React, {Component} from 'react'

class Bills extends Component {
  
  render(){
    return(
      <div>
        <div>
        <ul>
          <li>Bill Id: {this.props.bill.bill_id}</li>
          <li>Title: {this.props.bill.title}</li>
          <li>Sponsor: {this.props.bill.sponsor_title}{this.props.bill.sponsor_name}</li>
          <li>Introduced Date: {this.props.bill.introduced_date}</li>
          <li>Last Major Action: {this.props.bill.latest_major_action}</li>
          <li>Last Major Action Date: {this.props.bill.latest_major_action_date}</li>
          <li>House Passage: {this.props.bill.house_passage}</li>
          <li>Senate Passage: {this.props.bill.senate_passage}</li>
          <li>Enacted: {this.props.bill.enacted}</li>
          <li>Vetoed: {this.props.bill.vetoed}</li>
        </ul>
        <hr/>
        </div>
      </div>
    )
  }
}
export default Bills