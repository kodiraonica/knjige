import React from "react";

export default class Date extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  render() {
    return (
      <div className="Date">
        <h2>Danas je: {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
