import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "../../actions/index";
import { withStyles, withTheme } from "@material-ui/core/styles";

// mui
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  gridButton: {
    display: "flex",
    alignItems: "flex-end"
  }
});

class AccountForm extends Component {
  constructor() {
    super();

    this.state = {
      account: {
        first_name: "",
        last_name: "",
        company_name: "",
        address_1: "",
        address_2: "",
        city: "",
        state: "",
        postal_code: "",
        country_id: null,
        currency_id: null
      }
    };
  }

  componentDidMount() {
    console.log("this is account form page");
  }

  handleInputChange = e => {
    console.log("name", e.target.name);
    console.log("value", e.target.value);

    const key = e.target.name;
    const value = e.target.value;

    this.setState({
      [key]: value
    });
  };

  render() {
    const { countries, currencies, classes, match } = this.props;
    console.log(this.props);

    return (
      <Fragment>
        <Typography variant="h6" gutterBottom>
          {match.path === "/accounts/new"
            ? "Create New Account"
            : "Account Information"}
        </Typography>

        <form autoComplete="off">
          <Grid container spacing={24}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="first_name"
                name="first_name"
                label="First Name"
                fullWidth
                margin="none"
                InputLabelProps={{
                  shrink: true
                }}
                onChange={e => this.handleInputChange(e)}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="last_name"
                name="last_name"
                label="Last Name"
                fullWidth
                margin="none"
                InputLabelProps={{
                  shrink: true
                }}
                onChange={e => this.handleInputChange(e)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                id="company_name"
                name="company_name"
                label="Company Name"
                fullWidth
                margin="none"
                InputLabelProps={{
                  shrink: true
                }}
                onChange={e => this.handleInputChange(e)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                id="address_1"
                name="address_1"
                label="Address Line 1"
                fullWidth
                margin="none"
                InputLabelProps={{
                  shrink: true
                }}
                onChange={e => this.handleInputChange(e)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                id="address_2"
                name="address_2"
                label="Address Line 2"
                fullWidth
                margin="none"
                InputLabelProps={{
                  shrink: true
                }}
                onChange={e => this.handleInputChange(e)}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="city"
                name="city"
                label="City"
                fullWidth
                margin="none"
                InputLabelProps={{
                  shrink: true
                }}
                onChange={e => this.handleInputChange(e)}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="state"
                name="state"
                label="State"
                fullWidth
                margin="none"
                InputLabelProps={{
                  shrink: true
                }}
                onChange={e => this.handleInputChange(e)}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="postal_code"
                name="postal_code"
                label="Postal Code"
                fullWidth
                margin="none"
                InputLabelProps={{
                  shrink: true
                }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="country_id"
                name="country_id"
                label="Country"
                fullWidth
                margin="none"
                select
                SelectProps={{
                  native: true
                }}
                onSelect={e => this.handleInputChange(e)}
              >
                {countries.map(country => (
                  <option key={country._id.$oid} value={country._id.$oid}>
                    {country.name}
                  </option>
                ))}
              </TextField>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="email"
                name="email"
                label="Email"
                fullWidth
                margin="none"
                InputLabelProps={{
                  shrink: true
                }}
                onChange={e => this.handleInputChange(e)}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="phone"
                name="phone"
                label="Phone"
                fullWidth
                margin="none"
                InputLabelProps={{
                  shrink: true
                }}
                onChange={e => this.handleInputChange(e)}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="currency_id"
                name="currency_id"
                label="Currency"
                fullWidth
                margin="none"
                select
                SelectProps={{
                  native: true
                }}
                onSelect={e => this.handleInputChange(e)}
              >
                {currencies.map(currency => (
                  <option key={currency._id.$oid} value={currency._id.$oid}>
                    {currency.name}
                  </option>
                ))}
              </TextField>
            </Grid>

            <Grid item xs={12} sm={6} className={classes.gridButton}>
              <Button
                variant="contained"
                color="primary"
                size="medium"
                fullWidth
              >
                Create
              </Button>
            </Grid>
          </Grid>
        </form>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ countries, currencies }) => {
  return {
    countries: countries.countries,
    currencies: currencies.currencies
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

export default withStyles(styles, { withTheme: true })(
  withRouter(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(AccountForm)
  )
);
