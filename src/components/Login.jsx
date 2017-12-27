import React, {Component} from 'react'
import Header from './Header';

export default class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  handleEmailChange = (event) => {
    this.setState({email: event.target.value});
  }

  handlePasswordChange = (event) => {
    this.setState({password: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    const {email, password} = this.state;
    return (
      <div id="LoginCotainer" className="inner-container">
        <Header/>
        <form onSubmit={this.handleSubmit}>
          <p>Sign in or Sign Up</p>
          <input
            type="email"
            placeholder="Email"
            onChange={this.handleEmailChange}
            value={email}/>
          <input
            type="password"
            placeholder="password"
            onChange={this.handlePasswordChange}
            value={password}/>
          <button className="red light" type="submit">Login</button>
        </form>
      </div>
    )
  }
}
