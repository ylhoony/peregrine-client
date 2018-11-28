import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

// implemnt card for config sections
import { withStyles } from "@material-ui/core";
// mui
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
// mui-icons
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorderOutlined";
import OpenInNewIcon from "@material-ui/icons/OpenInNewOutlined";

const styles = theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  },
  paper: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit
  },
  expansionPanelSummary: {
    backgroundColor: theme.palette.grey[100]
  },
  row: {
    textDecoration: "none",
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
});

// Show the list of settings required.
class Setting extends Component {
  constructor() {
    super();

    this.state = {
      expanded: null
    };
  }

  handleExpansionChange = panel => (e, expanded) => {
    this.setState({
      expanded: expanded ? panel : false
    });
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    return (
      <Fragment>
        <div className={classes.root}>
          <ExpansionPanel
            expanded={expanded === "general-settings"}
            onChange={this.handleExpansionChange("general-settings")}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              className={
                expanded === "general-settings" && classes.expansionPanelSummary
              }
            >
              <Typography className={classes.heading}>
                General Settings
              </Typography>
              <Typography className={classes.secondaryHeading}>
                I am an expansion panel
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                feugiat. Aliquam eget maximus est, id dignissim quam.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel
            expanded={expanded === "accounts"}
            onChange={this.handleExpansionChange("accounts")}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              className={
                expanded === "accounts" && classes.expansionPanelSummary
              }
            >
              <Typography className={classes.heading}>
                Company Information
              </Typography>
              <Typography className={classes.secondaryHeading}>
                Set up company addresses and contacts
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Table>
                <TableBody>
                  <TableRow
                    className={classes.row}
                    key={0}
                    component={Link}
                    to="/account-addresses"
                  >
                    <TableCell>Company Addresses</TableCell>
                    <TableCell>
                      <OpenInNewIcon fontSize="small" />
                    </TableCell>
                  </TableRow>
                  <TableRow
                    className={classes.row}
                    key={1}
                    component={Link}
                    to="/account-contacts"
                  >
                    <TableCell>Company Contacts</TableCell>
                    <TableCell>
                      <OpenInNewIcon fontSize="small" />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel
            expanded={expanded === "product-settings"}
            onChange={this.handleExpansionChange("product-settings")}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              className={
                expanded === "product-settings" && classes.expansionPanelSummary
              }
            >
              <Typography className={classes.heading}>
                Product Settings
              </Typography>
              <Typography className={classes.secondaryHeading}>
                product settings
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Table>
                <TableBody>
                  <TableRow
                    className={classes.row}
                    key={0}
                    component={Link}
                    to="/product-brands"
                  >
                    <TableCell>Product Brands</TableCell>
                    <TableCell>
                      <OpenInNewIcon fontSize="small" />
                    </TableCell>
                  </TableRow>
                  <TableRow
                    className={classes.row}
                    key={1}
                    component={Link}
                    to="/product-categories"
                  >
                    <TableCell>Product Categories</TableCell>
                    <TableCell>
                      <OpenInNewIcon fontSize="small" />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel
            expanded={expanded === "sales-settings"}
            onChange={this.handleExpansionChange("sales-settings")}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              className={
                expanded === "sales-settings" && classes.expansionPanelSummary
              }
            >
              <Typography className={classes.heading}>
                Sales Settings
              </Typography>
              <Typography className={classes.secondaryHeading}>
                You are currently not an owner
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Table>
                <TableBody>
                  <TableRow
                    className={classes.row}
                    key={0}
                    component={Link}
                    to="/sales-channels"
                  >
                    <TableCell>Sales Channels</TableCell>
                    <TableCell>
                      <OpenInNewIcon fontSize="small" />
                    </TableCell>
                  </TableRow>
                  <TableRow
                    className={classes.row}
                    key={1}
                    component={Link}
                    to="/account-contacts"
                  >
                    <TableCell>Company Contacts</TableCell>
                    <TableCell>
                      <OpenInNewIcon fontSize="small" />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel
            expanded={expanded === "purchase-settings"}
            onChange={this.handleExpansionChange("purchase-settings")}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              className={
                expanded === "purchase-settings" &&
                classes.expansionPanelSummary
              }
            >
              <Typography className={classes.heading}>
                Purchase Settings
              </Typography>
              <Typography className={classes.secondaryHeading}>
                product settings
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Table>
                <TableBody>
                  <TableRow
                    className={classes.row}
                    key={0}
                    component={Link}
                    to="/product-brands"
                  >
                    <TableCell>Product Brands</TableCell>
                    <TableCell>
                      <OpenInNewIcon fontSize="small" />
                    </TableCell>
                  </TableRow>
                  <TableRow
                    className={classes.row}
                    key={1}
                    component={Link}
                    to="/product-categories"
                  >
                    <TableCell>Product Categories</TableCell>
                    <TableCell>
                      <OpenInNewIcon fontSize="small" />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
      </Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Setting);
