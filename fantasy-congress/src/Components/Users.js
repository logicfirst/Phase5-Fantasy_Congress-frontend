import React, {Component} from 'react'

class Users extends Component {
  render (){
    return(
      <div>
        <ul>
          <li>User id: {this.props.user.id}</li>
          <li>Username: {this.props.user.username}</li>
          <li>Name: {this.props.user.first_name}</li>
          <li>email: {this.props.user.email}</li>
        </ul>
        <hr/>
      </div>
    )
  }
}
export default Users