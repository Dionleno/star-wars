import React, { Component } from "react";
import { Card, CardContent } from "@material-ui/core";
import "./panel.css";
class Panel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { children } = this.props;
    return (
      <Card className="card">
        <CardContent>{children}</CardContent>
      </Card>
    );
  }
}
export default Panel;
