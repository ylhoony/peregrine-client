import React, { Component, Fragment } from "react";

class Dashboard extends Component {
  render() {
    return (
      <Fragment>
        <main className={this.props.mainClassName}>
          <div className={this.props.toolbarClassName} />
          <p>test</p>
        </main>
      </Fragment>
    );
  }
}

export default Dashboard;
