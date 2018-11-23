import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";

import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";

class AccountForm extends Component {
  constructor() {
    super();

    this.state = {
      account: {
        name: "",
        address_1: "",
        address_2: "",
        city: "",
        state: "",
        country_id: null,
        default_currency_id: null
      }
    };
  }

  componentDidMount() {
    console.log("this is account form page");
  }

  handleInputChange = e => {
    console.log("name", e.target.name);
    console.log("value", e.target.value);
  };

  render() {
    return (
      <Fragment>
        <h2>Account Form</h2>
        <FormControl margin="dense">
          <InputLabel htmlFor="name">Name</InputLabel>
          <Input
            id="name"
            name="name"
            type="text"
            value={this.state.name}
            onChange={e => this.handleInputChange(e)}
          />
        </FormControl>
        <FormControl margin="dense">
          <InputLabel htmlFor="address_1">Address 1</InputLabel>
          <Input
            id="address_1"
            name="address_1"
            type="text"
            value={this.state.name}
            onChange={e => this.handleInputChange(e)}
          />
        </FormControl>
      </Fragment>
    );
  }
}

export default withRouter(AccountForm);
