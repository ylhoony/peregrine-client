import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import { actions } from "../../actions/index";

// mui import
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
  layout: {
    width: "auto",
    display: "block", // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  }
});

class SignUp extends Component {
  constructor(props) {
    super(props);

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
    const { value } = e.target;

    this.setState({
      ...this.state,
      user: {
        ...this.state.user,
        [key]: value
      }
    });
  }

  handleFormSubmit = async e => {
    e.preventDefault();
    console.log(this.state);
    await this.props.actions.signUp(this.state);

    if (!!this.props.currentUser) {
      this.props.history.push("/accounts");
    }
  };

  render() {
    const { classes } = this.props;
    console.log(this.props);

    return (
      <Fragment>
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <form
              className={classes.form}
              onSubmit={e => this.handleFormSubmit(e)}
            >
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="email">Email Address</InputLabel>
                <Input
                  id="email"
                  name="email"
                  autoFocus
                  onChange={e => this.handleInputChange(e)}
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input
                  name="password"
                  type="password"
                  id="password"
                  onChange={e => this.handleInputChange(e)}
                  // autoComplete="current-password"
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="password_confirmation">
                  Password Confirmation
                </InputLabel>
                <Input
                  name="password_confirmation"
                  type="password"
                  id="password_confirmation"
                  onChange={e => this.handleInputChange(e)}
                  // autoComplete="current-password"
                />
              </FormControl>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign up
              </Button>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <FormControlLabel
                control={
                  <Button
                    component={Link}
                    // value="Sign In"
                    color="secondary"
                    to="/signin"
                  >
                    Sign In
                  </Button>
                }
                // label="signin"
              />
            </form>
          </Paper>
        </main>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ authentication }) => {
  return {
    currentUser: authentication.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(withRouter(SignUp))
);
