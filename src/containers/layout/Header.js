import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";

import SearchIcon from "@material-ui/icons/Search";

// dropdown
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import { fade } from "@material-ui/core/styles/colorManipulator";

const styles = theme => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing.unit * 3,
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  },
  selectSelect: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 3
  },
  toolbar: {
    [theme.breakpoints.up("xs")]: {
      paddingLeft: "4px",
      paddingRight: "4px"
    },
    [theme.breakpoints.up("sm")]: {
      paddingLeft: "12px",
      paddingRight: "12px"
    }
  }
});

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      account: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  };

  render() {
    const { classes } = this.props;
    console.log(classes);
    return (
      <Fragment>
        {/* <AppBar position="fixed" className={this.props.appBarClassName}> */}
        <AppBar position="fixed" className={this.props.appBarClassName}>
          <Toolbar variant="dense" classes={{ dense: classes.toolbar }}>
            <IconButton color="inherit">
              <MenuIcon fontSize="small" />
            </IconButton>

            <Select
              value={this.state.account}
              onChange={this.handleChange}
              disableUnderline
              displayEmpty
              name="account"
              className={classes.selectSelect}
            >
              <MenuItem value="">
                <em>Select Company</em>
              </MenuItem>
              <MenuItem value={10}>Test Product Lab</MenuItem>
              <MenuItem value={20}>Outpeak Services Inc., USA</MenuItem>
              <MenuItem value={30}>Nike Golf</MenuItem>
            </Select>

            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
              />
            </div>
          </Toolbar>
        </AppBar>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Header);
