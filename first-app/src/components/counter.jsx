import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    scores: ["score1", "score2", "score3"],
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
        <ul>
          {this.state.scores.map((score) => (
            <li key={score}>{score}</li>
          ))}
        </ul>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 ";
    classes += this.state.count === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }

  formatCount() {
    var { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
