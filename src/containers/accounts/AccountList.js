import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import { actions } from "../../actions/index";

// mui
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
// mui icons
import EditIcon from "@material-ui/icons/EditOutlined";

class AccountList extends Component {
  handleUserCurrentAccountUpdate = e => {};

  handleAccountPageOpen = e => {
    e.preventDefault();
    const accountId = e.target.dataset.id;
    this.props.history.push(`/accounts/${accountId}`);
  };

  render() {
    const { accounts } = this.props;

    let accountList;
    if (!accounts.length) {
      accountList = (
        <TableRow>
          <TableCell colSpan={3}>Please create account.</TableCell>
        </TableRow>
      );
    } else {
      accountList = accounts.map(account => {
        return (
          <TableRow key={account.id}>
            <TableCell>{account.company_name}</TableCell>
            <TableCell>Update this</TableCell>
            <TableCell>{account.active ? "Active" : "Inactive"}</TableCell>
            <TableCell>
              <EditIcon
                data-id={account.id}
                fontSize="small"
                onClick={e => this.handleAccountPageOpen(e)}
              />
            </TableCell>
          </TableRow>
        );
      });
    }

    return (
      <Fragment>
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Account Name</TableCell>
                <TableCell>Subscriber</TableCell>
                <TableCell>Status</TableCell>
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>{accountList}</TableBody>
          </Table>
        </Paper>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ accounts }) => {
  return { accounts: accounts.accounts };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AccountList)
);
