import React, {Component} from 'react'
import { Redirect } from "react-router-dom";


class LoginForm extends Component {

  state = {
    isLoggedIn: false,
  }

  handleSubmit(e){
    e.preventDefault()
    this.setState({isLoggedIn: true})
   }

  render(){
    if (this.state.isLoggedIn !==false) {
      return <Redirect to='/home' />
    }
      return(
        <div className="login-nav">
          <form onSubmit={(e) => this.handleSubmit(e)}>
            Username:<input type="text" placeholder="Username"/>
            Password:<input type="password" placeholder="Password"/>
            <button type="submit">Login</button>
          </form>
        </div>
    )
  }

}
export default LoginForm