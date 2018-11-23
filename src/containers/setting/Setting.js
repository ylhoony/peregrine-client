import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

// implemnt card for config sections
import { withStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorderOutlined";

const styles = theme => ({
  paper: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit
  },
  section: {
    display: "flex",
    justifyContent: "flex-start"
  },
  article: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: theme.spacing.unit * 2
  },
  card: {
    width: "30%",
    height: theme.spacing.unit * 12
  },
  cardHeader: {
    textDecoration: "none"
  }
});

// Show the list of settings required.

class Setting extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <main className={this.props.mainClassName}>
          <div className={this.props.toolbarClassName} />
          <Paper className={classes.paper}>
            <Typography variant="h6">Setting</Typography>

            <section>
              <article className={classes.article}>
                <Card classes={{ root: classes.card }}>
                  <CardHeader
                    avatar={
                      <FavoriteBorderIcon className={classes.cardHeader} />
                    }
                    className={classes.cardHeader}
                    title="Account Addresses"
                    titleTypographyProps={{ variant: "body1" }}
                    subheader="Manage your compnay addresses"
                    subheaderTypographyProps={{ variant: "body2" }}
                    component={Link}
                    to="/account-addresses"
                  />
                </Card>

                <Card classes={{ root: classes.card }}>
                  <CardHeader
                    avatar={<FavoriteBorderIcon />}
                    title="Account Contacts"
                    titleTypographyProps={{ variant: "body1" }}
                    subheader="Manage your compnay addresses"
                    subheaderTypographyProps={{ variant: "body2" }}
                  />
                </Card>

                <Card classes={{ root: classes.card }}>
                  <CardHeader
                    avatar={<FavoriteBorderIcon />}
                    title="Payment Terms"
                    titleTypographyProps={{ variant: "body1" }}
                    subheader="Manage your compnay addresses"
                    subheaderTypographyProps={{ variant: "body2" }}
                  />
                </Card>
              </article>

              <article className={classes.article}>
                <Card classes={{ root: classes.card }}>
                  <CardHeader
                    avatar={<FavoriteBorderIcon />}
                    title="Account Addresses"
                    titleTypographyProps={{ variant: "body1" }}
                    subheader="Manage your compnay addresses"
                    subheaderTypographyProps={{ variant: "body2" }}
                  />
                </Card>

                <Card classes={{ root: classes.card }}>
                  <CardHeader
                    avatar={<FavoriteBorderIcon />}
                    title="Account Contacts"
                    titleTypographyProps={{ variant: "body1" }}
                    subheader="Manage your compnay addresses"
                    subheaderTypographyProps={{ variant: "body2" }}
                  />
                </Card>

                <Card classes={{ root: classes.card }}>
                  <CardHeader
                    avatar={<FavoriteBorderIcon />}
                    title="Account Contacts"
                    titleTypographyProps={{ variant: "body1" }}
                    subheader="Manage your compnay addresses"
                    subheaderTypographyProps={{ variant: "body2" }}
                  />
                </Card>
              </article>
            </section>
          </Paper>
        </main>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Setting);
