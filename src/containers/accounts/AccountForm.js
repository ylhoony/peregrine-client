import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "../../actions/index";
import { withStyles } from "@material-ui/core/styles";

// mui
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: 0,
    marginBottom: 0,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 3,
      marginBottom: theme.spacing.unit * 3,
      padding: theme.spacing.unit * 3
    }
  },
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
    if (!!(window.location.pathname === "/accounts/new")) {
      this.props.actions.closeLeftDrawer();
    }
  }

  handleInputChange = e => {
    const key = e.target.name;
    const value = e.target.value;

    this.setState({
      ...this.state,
      account: {
        ...this.state.account,
        [key]: value
      }
    });
  };

  handleFormSubmit = async e => {
    e.preventDefault();
    await this.props.actions.createAccount(this.state);
    await this.props.actions.fetchCurrentAccount();
    this.props.history.push("/");
  };

  render() {
    const { countries, currencies, classes, match } = this.props;

    return (
      <Fragment>
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography variant="h6" gutterBottom>
              {match.path === "/accounts/new"
                ? "Create New Account"
                : "Account Information"}
            </Typography>

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
                  onChange={e => this.handleInputChange(e)}
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
                  onChange={e => this.handleInputChange(e)}
                >
                  {countries.map(country => (
                    <option key={country.id} value={country.id}>
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
                  onChange={e => this.handleInputChange(e)}
                >
                  {currencies.map(currency => (
                    <option key={currency.id} value={currency.id}>
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
                  onClick={e => this.handleFormSubmit(e)}
                >
                  Create
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </main>
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
