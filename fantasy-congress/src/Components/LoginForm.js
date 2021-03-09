import React, {Component} from 'react'

class LoginForm extends Component {

  state = {
    isLoggedIn: false
  }

  handleOnClick(){
    this.setState({isLoggedIn: true})
   }

  render(){
    return(
      <div className="login-nav">
        <form>
          Username:<input type="text" placeholder="Username"/>
          Password:<input type="password" placeholder="Password"/>
          <button type="submit">Login</button>
        </form>
      </div>
    )
  }

}
export default LoginForm