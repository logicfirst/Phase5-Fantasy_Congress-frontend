import React, {Component} from 'react'

class LoginForm extends Component {

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