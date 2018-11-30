import React, { Component, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import authentication from "../../services/authentication";
import { actions } from "../../actions/index";
import Breadcrumb from "../../components/shared/Breadcrumb";

// mui
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Popper from "@material-ui/core/Popper";
import Fade from "@material-ui/core/Fade";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

// Icons
import HomeIcon from "@material-ui/icons/HomeOutlined";
import MenuIcon from "@material-ui/icons/MenuOutlined";
import SearchIcon from "@material-ui/icons/Search";
import PersonIcon from "@material-ui/icons/PersonOutlineOutlined";
import EjectIcon from "@material-ui/icons/EjectOutlined";
import UnfoldIcon from "@material-ui/icons/UnfoldMoreOutlined";

const styles = theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  navLeft: {
    alignItems: "center",
    display: "flex",
    justifyContent: "flex-start"
  },
  navRight: {
    display: "flex",
    justifyContent: "flex-end"
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.up("xs")]: {
      paddingLeft: "4px",
      paddingRight: "4px"
    },
    [theme.breakpoints.up("sm")]: {
      paddingLeft: "12px",
      paddingRight: "12px"
    }
  },
  headerList: {
    paddingTop: 0,
    paddingBottom: 0,
    width: "-webkit-fill-available"
  },
  headerListItem: {
    paddingLeft: theme.spacing.unit,
    paddingRight: theme.spacing.unit
  },
  headerListItemText: {
    paddingRight: theme.spacing.unit * 0.5
  },
  breadcrumbWrapper: {
    paddingLeft: theme.spacing.unit * 2
  },
  popper: {
    zIndex: theme.zIndex.drawer + 1
  }
});

class Header extends Component {
  constructor() {
    super();
    this.state = {
      anchorEl: null,
      popperOpen: false
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSignOut = () => {
    authentication.removeToken();
    this.props.history.push("/signin");
  };

  handleLeftDrawerOpen = () => {
    !!this.props.leftDrawerOpen
      ? this.props.actions.closeLeftDrawer()
      : this.props.actions.openLeftDrawer();
  };

  handleHeaderPopperOpen = e => {
    this.setState({
      anchorEl: e.currentTarget,
      popperOpen: !this.state.popperOpen
    });
  };

  render() {
    const { accounts, classes, currentAccount, leftDrawerOpen } = this.props;

    let accountList;

    if (!accounts.length) {
      accountList = "";
    } else {
      accountList = accounts.map(account => {
        return (
          <ListItem button key={account.id}>
            <ListItemText>{account.company_name}</ListItemText>
          </ListItem>
        );
      });
    }

    return (
      <Fragment>
        <Popper
          className={classes.popper}
          open={this.state.popperOpen}
          anchorEl={this.state.anchorEl}
          placement="bottom-start"
          transition
        >
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <ClickAwayListener
                onClickAway={e => this.handleHeaderPopperOpen(e)}
              >
                <Paper>
                  <List component="nav" dense>
                    {accountList}
                  </List>
                  <Divider />
                  <List component="nav" dense>
                    <ListItem button component={Link} to="/accounts">
                      <ListItemText>See all accounts</ListItemText>
                    </ListItem>
                    <ListItem button component={Link} to="/accounts/new">
                      <ListItemText>Add new organization</ListItemText>
                    </ListItem>
                  </List>
                </Paper>
              </ClickAwayListener>
            </Fade>
          )}
        </Popper>
        <AppBar
          color="default"
          position="fixed"
          className={classNames(
            classes.appBar,
            leftDrawerOpen && classes.appBarShift
          )}
        >
          <Toolbar
            disableGutters={true}
            variant="dense"
            classes={{ dense: classes.toolbar }}
          >
            <div className={classes.navLeft}>
              {!!(window.location.pathname === "/accounts/new") ? (
                <IconButton
                  aria-label="Control drawer"
                  color="inherit"
                  fontSize="small"
                  component={Link}
                  to="/"
                >
                  <HomeIcon fontSize="small" />
                </IconButton>
              ) : (
                <Fragment>
                  <IconButton
                    aria-label="Control drawer"
                    color="inherit"
                    fontSize="small"
                    onClick={() => this.handleLeftDrawerOpen()}
                  >
                    <MenuIcon fontSize="small" />
                  </IconButton>

                  <List className={classes.headerList}>
                    <ListItem
                      button
                      dense
                      className={classes.headerListItem}
                      onClick={e => this.handleHeaderPopperOpen(e)}
                    >
                      <ListItemText
                        disableTypography
                        className={classes.headerListItemText}
                      >
                        <Typography variant="subtitle1">
                          {!!currentAccount
                            ? currentAccount.company_name
                            : "Create Account"}
                        </Typography>
                      </ListItemText>
                      <UnfoldIcon fontSize="small" />
                    </ListItem>
                  </List>

                  <div className={classes.breadcrumbWrapper}>
                    <Breadcrumb />
                  </div>
                </Fragment>
              )}
            </div>

            <div className={classes.navRight}>
              <IconButton color="inherit">
                <SearchIcon fontSize="small" />
              </IconButton>
              <IconButton color="inherit" component={Link} to="/profile">
                <PersonIcon fontSize="small" />
              </IconButton>
              <IconButton color="inherit" onClick={() => this.handleSignOut()}>
                <EjectIcon fontSize="small" />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

const mapStateToProps = ({ accounts, layouts }) => {
  return {
    currentAccount: accounts.currentAccount,
    accounts: accounts.accounts,

    leftDrawerWidth: layouts.leftDrawerWidth,
    leftDrawerOpen: layouts.leftDrawerOpen
  };
};

export default withStyles(styles, { withTheme: true })(
  withRouter(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(Header)
  )
);
