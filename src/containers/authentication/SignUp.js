import React, { Component, Fragment } from "react";
import axios from "axios";

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      user: {
        email: "",
        password: "",
        password_confirmation: ""
      }
    };
  }

  handleInputChange(e) {
    const key = e.target.name;
    const value = e.target.value;

    this.setState({
      ...this.state,
      user: {
        ...this.state.user,
        [key]: value
      }
    });
    console.log(this.state);
  }

  handleFormSubmit = async e => {
    e.preventDefault();
    console.log("formsubmit state: ", this.state);

    axios({
      method: "post",
      url: "api/v1/sign_up",
      data: this.state
    }).then(res => {
      console.log(res);
    });
  };

  render() {
    return (
      <Fragment>
        <div>SignUp page</div>
        <form onSubmit={e => this.handleFormSubmit(e)}>
          <label>email: </label>
          <input
            type="text"
            name="email"
            onChange={e => this.handleInputChange(e)}
          />
          <br />
          <label>password: </label>
          <input
            type="password"
            name="password"
            onChange={e => this.handleInputChange(e)}
          />
          <br />
          <label>password confirmation: </label>
          <input
            type="password"
            name="password_confirmation"
            onChange={e => this.handleInputChange(e)}
          />
          <br />
          <button type="submit">sign up</button>
        </form>
      </Fragment>
    );
  }
}

export default SignUp;
